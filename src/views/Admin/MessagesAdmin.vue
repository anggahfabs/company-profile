<template>
  <AdminLayout>
    <div class="p-6 space-y-6">
      <h1 class="text-2xl font-bold">Pesan Pengunjung</h1>

      <MessagesTable :messages="messages" />
    </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted } from "vue"
import API from "@/services/api"

import AdminLayout from "@/components/Admin/AdminLayout.vue"
import MessagesTable from "@/components/Admin/Messages/MessagesTable.vue"

export default {
  components: { AdminLayout, MessagesTable },

  setup() {
    const messages = ref([])

    const fetchMessages = async () => {
      try {
        const res = await API.get("/admin/messages")
        messages.value = res.data || []
      } catch (err) {
        console.error("Gagal ambil pesan:", err)
      }
    }

    onMounted(fetchMessages)

    return { messages }
  }
}
</script>
