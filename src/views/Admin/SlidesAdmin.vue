<template>
  <AdminLayout>

    <SlideTable
      :slides="slides"
      @add="openAdd"
      @edit="openEdit"
      @delete="deleteSlide"
    />

    <SlideForm
      v-if="showForm"
      :modelValue="selectedSlide"
      :isEdit="isEdit"
      @close="closeForm"
      @save="saveSlide"
    />

  </AdminLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import API from "@/services/api";

import AdminLayout from "@/components/Admin/AdminLayout.vue";
import SlideTable from "@/components/Admin/Slides/SlideTable.vue";
import SlideForm from "@/components/Admin/Slides/SlideForm.vue";

const slides = ref([]);
const showForm = ref(false);
const isEdit = ref(false);
const selectedSlide = ref(null);
const loading = ref(false);

// Fetch slides dari API
const fetchSlides = async () => {
  try {
    const response = await API.get("/admin/slides");
    slides.value = response.data;
  } catch (err) {
    console.error("Error fetching slides:", err);
    alert("Gagal memuat slides");
  }
};

const openAdd = () => {
  selectedSlide.value = null;
  isEdit.value = false;
  showForm.value = true;
};

const openEdit = (slide) => {
  selectedSlide.value = { ...slide };
  isEdit.value = true;
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
  selectedSlide.value = null;
};

const saveSlide = async (data) => {
  loading.value = true;
  
  try {
    if (isEdit.value) {
      // UPDATE slide
      await API.put(`/admin/slides/${selectedSlide.value.id}`, data);
      alert("Slide berhasil diupdate!");
    } else {
      // CREATE slide
      await API.post("/admin/slides", data);
      alert("Slide berhasil ditambahkan!");
    }
    
    await fetchSlides(); // Refresh data
    closeForm();
  } catch (err) {
    console.error("Error saving slide:", err);
    alert(err.response?.data?.msg || "Gagal menyimpan slide");
  } finally {
    loading.value = false;
  }
};

const deleteSlide = async (id) => {
  if (!confirm("Yakin ingin menghapus slide ini?")) return;
  
  try {
    await API.delete(`/admin/slides/${id}`);
    alert("Slide berhasil dihapus!");
    await fetchSlides(); // Refresh data
  } catch (err) {
    console.error("Error deleting slide:", err);
    alert("Gagal menghapus slide");
  }
};

// Load data saat component mounted
onMounted(() => {
  fetchSlides();
});
</script>
