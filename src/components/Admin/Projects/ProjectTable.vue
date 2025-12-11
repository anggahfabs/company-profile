<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Projects</h2>
        <p class="text-sm text-gray-500 mt-1">Manage your project portfolio</p>
      </div>
      <button 
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2" 
        @click="$emit('add')"
      >
        <span class="text-lg">+</span>
        Add Project
      </button>
    </div>

    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-gradient-to-r from-gray-100 to-gray-50">
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">Image</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">Title</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">Category</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">Address</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="p in projects" :key="p.id" class="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150">
            <td class="p-4">
              <div class="relative group">
                <img 
                  :src="getImageUrl(p.image)" 
                  @error="handleImageError"
                  class="h-20 w-28 object-cover rounded-lg shadow-sm border-2 border-gray-200 group-hover:shadow-md transition-shadow duration-200" 
                  :alt="p.title"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200"></div>
              </div>
            </td>
            <td class="p-4">
              <span class="font-semibold text-gray-800">{{ p.title }}</span>
            </td>
            <td class="p-4">
              <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 shadow-sm">
                {{ p.category }}
              </span>
            </td>
            <td class="p-4">
              <div class="text-sm text-gray-600 line-clamp-2">
                {{ p.address }}
              </div>
            </td>
            <td class="p-4">
              <div class="flex items-center justify-center gap-2">
                <button 
                  class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('edit', p)"
                >
                  Edit
                </button>
                <button 
                  class="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('delete', p.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          
          <tr v-if="!projects || projects.length === 0">
            <td colspan="5" class="p-10 text-center">
              <div class="flex flex-col items-center gap-3">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span class="text-4xl">📁</span>
                </div>
                <div>
                  <p class="text-gray-600 font-medium">No projects yet</p>
                  <p class="text-sm text-gray-500 mt-1">Click "Add Project" to create your first project</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: Array,
});

const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://via.placeholder.com/300x200?text=No+Image';
  if (imagePath.startsWith('http')) return imagePath;
  return `http://localhost:5000${imagePath}`;
};

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
};
</script>