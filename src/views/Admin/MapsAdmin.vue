<template>
  <AdminLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Manage Maps</h1>

      <div class="flex justify-between mb-4">
        <button
          @click="showForm = true"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          + Add Maps
        </button>
      </div>

      <MapTable :maps="maps" @edit="editMap" @delete="deleteMap" />

      <!-- FORM -->
      <div v-if="showForm" class="mt-6">
        <MapForm
          :editData="editData"
          @close="closeForm"
          @save="saveMap"
        />
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted } from "vue"
import API from "@/services/api"
import AdminLayout from "@/components/Admin/AdminLayout.vue"
import MapTable from "@/components/Admin/Maps/MapTable.vue"
import MapForm from "@/components/Admin/Maps/MapForm.vue"

export default {
  components: { AdminLayout, MapTable, MapForm },

  setup() {
    const showForm = ref(false)
    const editData = ref(null)
    const maps = ref([])

    const fetchMaps = async () => {
      try {
        const response = await API.get('/admin/maps')
        maps.value = response.data
      } catch (err) {
        console.error('Error fetching maps:', err)
        alert('Gagal memuat maps')
      }
    }

    const editMap = (row) => {
      editData.value = { ...row }
      showForm.value = true
    }

    const deleteMap = async (id) => {
      if (!confirm('Yakin ingin menghapus map ini?')) return
      try {
        await API.delete(`/admin/maps/${id}`)
        alert('Map berhasil dihapus!')
        await fetchMaps()
      } catch (err) {
        console.error('Error deleting map:', err)
        alert('Gagal menghapus map')
      }
    }

    const saveMap = async (formData) => {
      try {
        if (formData.id) {
          // update
          await API.put(`/admin/maps/${formData.id}`, formData)
          alert('Map berhasil diupdate!')
        } else {
          // insert
          await API.post('/admin/maps', formData)
          alert('Map berhasil ditambahkan!')
        }
        await fetchMaps()
        closeForm()
      } catch (err) {
        console.error('Error saving map:', err)
        alert(err.response?.data?.msg || 'Gagal menyimpan map')
      }
    }

    const closeForm = () => {
      showForm.value = false
      editData.value = null
    }

    onMounted(() => {
      fetchMaps()
    })

    return { maps, showForm, editData, editMap, deleteMap, saveMap, closeForm }
  }
}
</script>
