<template>
  <AdminLayout>
    <ServiceTable 
      :services="services"
      @add="openAdd"
      @edit="openEdit"
      @delete="deleteService"
    />

    <ServiceForm 
      v-if="showForm"
      :modelValue="selectedService"
      :isEdit="isEdit"
      @close="closeForm"
      @save="saveService"
    />
  </AdminLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import API from '@/services/api'
import AdminLayout from '@/components/Admin/AdminLayout.vue'
import ServiceTable from '@/components/Admin/Services/ServiceTable.vue'
import ServiceForm from '@/components/Admin/Services/ServiceForm.vue'

const services = ref([])
const showForm = ref(false)
const isEdit = ref(false)
const selectedService = ref(null)

const fetchServices = async () => {
  try {
    const response = await API.get('/admin/services')
    services.value = response.data
  } catch (err) {
    console.error('Error fetching services:', err)
    alert('Gagal memuat services')
  }
}

const openAdd = () => {
  selectedService.value = null
  isEdit.value = false
  showForm.value = true
}

const openEdit = (item) => {
  selectedService.value = { ...item }
  isEdit.value = true
  showForm.value = true
}

const closeForm = () => {
  showForm.value = false
  selectedService.value = null
}

const saveService = async (data) => {
  try {
    if (isEdit.value) {
      await API.put(`/admin/services/${selectedService.value.id}`, data)
      alert('Service berhasil diupdate!')
    } else {
      await API.post('/admin/services', data)
      alert('Service berhasil ditambahkan!')
    }
    await fetchServices()
    closeForm()
  } catch (err) {
    console.error('Error saving service:', err)
    alert(err.response?.data?.msg || 'Gagal menyimpan service')
  }
}

const deleteService = async (id) => {
  if (!confirm('Yakin ingin menghapus service ini?')) return
  try {
    await API.delete(`/admin/services/${id}`)
    alert('Service berhasil dihapus!')
    await fetchServices()
  } catch (err) {
    console.error('Error deleting service:', err)
    alert('Gagal menghapus service')
  }
}

onMounted(() => {
  fetchServices()
})
</script>
