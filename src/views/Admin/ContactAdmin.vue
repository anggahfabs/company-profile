<template>
  <AdminLayout>
    <div class="p-6 space-y-6">

      <!-- FORM -->
      <ContactForm
        :modelValue="selected"
        :isEdit="isEdit"
        @save="save"
        @cancel="cancel"
      />

      <!-- TABLE -->
      <ContactTable
        :contactList="contactList"
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
import ContactForm from "@/components/Admin/Contact/ContactForm.vue"
import ContactTable from "@/components/Admin/Contact/ContactTable.vue"

export default {
  components: { AdminLayout, ContactForm, ContactTable },

  setup() {
    const contactList = ref([])
    const selected = ref(null)
    const isEdit = ref(false)

    const fetchContact = async () => {
      try {
        const response = await API.get('/admin/contact')
        if (response.data && response.data.length > 0) {
          contactList.value = response.data
        } else {
          contactList.value = []
        }
      } catch (err) {
        console.error('Error fetching contact:', err)
      }
    }

    const save = async (data) => {
      try {
        if (isEdit.value && selected.value) {
          await API.put(`/admin/contact/${selected.value.id}`, data)
          alert('Contact info berhasil diupdate!')
        } else {
          await API.post('/admin/contact', data)
          alert('Contact info berhasil ditambahkan!')
        }
        await fetchContact()
        selected.value = null
        isEdit.value = false
      } catch (err) {
        console.error('Error saving contact:', err)
        alert(err.response?.data?.msg || 'Gagal menyimpan contact info')
      }
    }

    const edit = (row) => {
      selected.value = { ...row }
      isEdit.value = true
    }

    const remove = async (id) => {
      alert('Contact info tidak bisa dihapus, hanya bisa diedit')
    }

    const cancel = () => {
      selected.value = null
      isEdit.value = false
    }

    onMounted(() => {
      fetchContact()
    })

    return { contactList, selected, isEdit, save, edit, remove, cancel }
  }
}
</script>
