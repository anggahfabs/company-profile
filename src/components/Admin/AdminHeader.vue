<template>
  <header
    class="bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300"
  >
    <!-- Title -->
    <h1 class="text-2xl font-bold text-gray-800 tracking-wide">Admin Dashboard</h1>

    <!-- Logout Button -->
    <button
      @click="logout"
      class="flex items-center gap-2 text-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"/>
      </svg>
      Logout
    </button>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const logout = () => {
  localStorage.removeItem("admin_auth")
  router.push("/admin/login")
}
</script>

<style scoped>
/* Optional: hover shadow untuk header */
header:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
