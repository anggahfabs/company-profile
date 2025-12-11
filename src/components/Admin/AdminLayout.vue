<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <AdminSidebar />

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
import AdminSidebar from './AdminSidebar.vue'
import AdminHeader from './AdminHeader.vue'

export default {
  components: { AdminSidebar, AdminHeader }
}
</script>
