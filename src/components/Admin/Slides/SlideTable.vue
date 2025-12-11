<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">

    <div class="flex justify-between items-center mb-6">
      <div>
        <h3 class="text-2xl font-bold text-gray-800">Slides Collection</h3>
        <p class="text-sm text-gray-500 mt-1">Manage your presentation slides</p>
      </div>
      <button
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        @click="$emit('add')"
      >
        <span class="text-lg">+</span>
        Add Slide
      </button>
    </div>

    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full">
        <thead>
          <tr class="bg-gradient-to-r from-gray-100 to-gray-50 text-left">
            <th class="p-4 text-sm font-semibold text-gray-700 border-b border-gray-200">Preview</th>
            <th class="p-4 text-sm font-semibold text-gray-700 border-b border-gray-200">Title</th>
            <th class="p-4 text-sm font-semibold text-gray-700 border-b border-gray-200">Subtitle</th>
            <th class="p-4 text-sm font-semibold text-gray-700 border-b border-gray-200 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr 
            v-for="slide in slides" 
            :key="slide.id" 
            class="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
          >
            <td class="p-4 w-36">
              <div class="relative group">
                <img 
                  :src="getImageUrl(slide.image)" 
                  @error="handleImageError"
                  class="w-32 h-20 object-cover rounded-lg border-2 border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200" 
                  alt="Slide image"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200"></div>
              </div>
            </td>

            <td class="p-4">
              <p class="font-medium text-gray-800 line-clamp-2">{{ slide.title }}</p>
            </td>

            <td class="p-4">
              <p class="text-gray-600 text-sm line-clamp-2">{{ slide.subtitle }}</p>
            </td>

            <td class="p-4">
              <div class="flex items-center justify-center gap-2">
                <button
                  class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-200 transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('edit', slide)"
                >
                  Edit
                </button>

                <button
                  class="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium text-sm hover:bg-red-200 transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('delete', slide.id)"
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
  props: {
    slides: Array
  },
  methods: {
    getImageUrl(imagePath) {
      if (!imagePath) return '/placeholder-image.jpg';
      
      // Jika path sudah lengkap (http/https), return as is
      if (imagePath.startsWith('http')) {
        return imagePath;
      }
      
      // Jika path relatif, tambahkan base URL backend
      const baseURL = 'http://localhost:5000';
      return `${baseURL}${imagePath}`;
    },
    handleImageError(event) {
      // Fallback jika gambar gagal load
      event.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 100 60"%3E%3Crect fill="%23ddd" width="100" height="60"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
    }
  }
}
</script>