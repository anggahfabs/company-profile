<template>
  <AdminLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Manage Social Media</h1>

      <SosmedForm
        :modelValue="selected"
        :isEdit="isEdit"
        @save="save"
        @cancel="cancel"
      />

      <SosmedTable
        :items="items"
        @edit="edit"
        @delete="remove"
      />
    </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted } from "vue"
import API from "@/services/api"
import AdminLayout from "@/components/Admin/AdminLayout.vue"
import SosmedForm from "@/components/Admin/Sosmed/SosmedForm.vue"
import SosmedTable from "@/components/Admin/Sosmed/SosmedTable.vue"

export default {
  components: { AdminLayout, SosmedForm, SosmedTable },

  setup() {
    const items = ref([])
    const selected = ref(null)
    const isEdit = ref(false)

    const fetchSocialMedia = async () => {
      try {
        const response = await API.get('/admin/social-media')
        items.value = response.data
      } catch (err) {
        console.error('Error fetching social media:', err)
        alert('Gagal memuat social media')
      }
    }

    const save = async (data) => {
      try {
        if (isEdit.value) {
          await API.put(`/admin/social-media/${selected.value.id}`, data)
          alert('Social media berhasil diupdate!')
        } else {
          await API.post('/admin/social-media', data)
          alert('Social media berhasil ditambahkan!')
        }
        await fetchSocialMedia()
        selected.value = null
        isEdit.value = false
      } catch (err) {
        console.error('Error saving social media:', err)
        alert(err.response?.data?.msg || 'Gagal menyimpan social media')
      }
    }

    const edit = (item) => {
      selected.value = { ...item }
      isEdit.value = true
    }

    const remove = async (id) => {
      if (!confirm('Yakin ingin menghapus social media ini?')) return
      try {
        await API.delete(`/admin/social-media/${id}`)
        alert('Social media berhasil dihapus!')
        await fetchSocialMedia()
      } catch (err) {
        console.error('Error deleting social media:', err)
        alert('Gagal menghapus social media')
      }
    }

    const cancel = () => {
      selected.value = null
      isEdit.value = false
    }

    onMounted(() => {
      fetchSocialMedia()
    })

    return { items, selected, isEdit, save, edit, remove, cancel }
  }
}
</script>
