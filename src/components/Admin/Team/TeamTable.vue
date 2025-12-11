<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Team List</h2>
      <p class="text-sm text-gray-500 mt-1">Manage your team members</p>
    </div>

    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gradient-to-r from-gray-100 to-gray-50">
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-center">Photo</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-left">Name</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-left">Position</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-center">Social Media</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="t in teams" :key="t.id" class="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150">
            <td class="p-4 text-center">
              <div class="flex justify-center">
                <div class="relative group">
                  <img 
                    :src="getPhotoUrl(t.photo)" 
                    @error="handleImageError"
                    class="h-16 w-16 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200" 
                    alt="Team photo"
                  />
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-200"></div>
                </div>
              </div>
            </td>
            <td class="p-4">
              <span class="font-semibold text-gray-800">{{ t.name }}</span>
            </td>
            <td class="p-4">
              <span class="text-gray-600">{{ t.position }}</span>
            </td>
            <td class="p-4">
              <div class="flex gap-3 justify-center">
                <a 
                  v-if="t.instagram" 
                  :href="t.instagram" 
                  target="_blank"
                  class="text-pink-600 hover:text-pink-700 hover:scale-110 transition-transform duration-150"
                  title="Instagram"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  v-if="t.tiktok" 
                  :href="t.tiktok" 
                  target="_blank"
                  class="text-gray-900 hover:text-gray-700 hover:scale-110 transition-transform duration-150"
                  title="TikTok"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <span v-if="!t.instagram && !t.tiktok" class="text-gray-400 text-sm">-</span>
              </div>
            </td>
            <td class="p-4">
              <div class="flex gap-2 justify-center">
                <button 
                  @click="$emit('edit', t)" 
                  class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                >
                  Edit
                </button>
                <button 
                  @click="$emit('delete', t.id)" 
                  class="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teams"],
  emits: ["edit", "delete"],
  methods: {
    getPhotoUrl(photoPath) {
      if (!photoPath) return this.getPlaceholder();
      
      // Jika path sudah lengkap (http/https), return as is
      if (photoPath.startsWith('http')) {
        return photoPath;
      }
      
      // Jika path relatif, tambahkan base URL backend
      const baseURL = 'http://localhost:5000';
      return `${baseURL}${photoPath}`;
    },
    getPlaceholder() {
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3ENo Photo%3C/text%3E%3C/svg%3E';
    },
    handleImageError(event) {
      event.target.src = this.getPlaceholder();
    }
  }
}
</script>