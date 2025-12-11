<template>
  <AdminLayout>

    <ProjectTable
      :projects="projects"
      @add="openAdd"
      @edit="openEdit"
      @delete="deleteProject"
    />

    <ProjectForm
      v-if="showForm"
      :modelValue="selectedProject"
      :isEdit="isEdit"
      @close="closeForm"
      @save="saveProject"
    />

  </AdminLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import API from "@/services/api";
import AdminLayout from "@/components/Admin/AdminLayout.vue";
import ProjectTable from "@/components/Admin/Projects/ProjectTable.vue";
import ProjectForm from "@/components/Admin/Projects/ProjectForm.vue";

const projects = ref([]);
const showForm = ref(false);
const isEdit = ref(false);
const selectedProject = ref(null);

const fetchProjects = async () => {
  try {
    const response = await API.get('/admin/projects');
    projects.value = response.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
    alert('Gagal memuat projects');
  }
};

const openAdd = () => {
  selectedProject.value = null;
  isEdit.value = false;
  showForm.value = true;
};

const openEdit = (project) => {
  selectedProject.value = { ...project };
  isEdit.value = true;
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
  selectedProject.value = null;
};

const saveProject = async (data) => {
  try {
    if (isEdit.value) {
      await API.put(`/admin/projects/${selectedProject.value.id}`, data);
      alert('Project berhasil diupdate!');
    } else {
      await API.post('/admin/projects', data);
      alert('Project berhasil ditambahkan!');
    }
    await fetchProjects();
    closeForm();
  } catch (err) {
    console.error('Error saving project:', err);
    alert(err.response?.data?.msg || 'Gagal menyimpan project');
  }
};

const deleteProject = async (id) => {
  if (!confirm('Yakin ingin menghapus project ini?')) return;
  try {
    await API.delete(`/admin/projects/${id}`);
    alert('Project berhasil dihapus!');
    await fetchProjects();
  } catch (err) {
    console.error('Error deleting project:', err);
    alert('Gagal menghapus project');
  }
};

onMounted(() => {
  fetchProjects();
});
</script>
