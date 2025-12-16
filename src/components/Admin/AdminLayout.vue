<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <AdminSidebar :unreadCount="unreadCount" />

    <!-- CONTENT AREA -->
    <div class="flex-1 flex flex-col">
      <AdminHeader />

      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminSidebar from './AdminSidebar.vue'
import AdminHeader from './AdminHeader.vue'
import API from '@/services/api'

export default {
  components: { AdminSidebar, AdminHeader },
  setup() {
    const unreadCount = ref(0)

    const fetchUnreadCount = async () => {
      try {
        const response = await API.get('/admin/messages/unread')
        unreadCount.value = response.data.total
      } catch (err) {
        console.error('Gagal mengambil jumlah pesan belum dibaca', err)
      }
    }

    onMounted(() => {
      fetchUnreadCount()
    })

    return {
      unreadCount
    }
  }
}
</script>
