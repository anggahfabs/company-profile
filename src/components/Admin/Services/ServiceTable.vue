<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">List Services</h2>
        <p class="text-sm text-gray-500 mt-1">Manage your service offerings</p>
      </div>
      <button 
        @click="$emit('add')" 
        class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <span class="text-lg">+</span>
        Add Service
      </button>
    </div>

    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gradient-to-r from-gray-100 to-gray-50">
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-center w-24">Icon</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-left w-1/4">Title</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-left">Description</th>
            <th class="border-b border-gray-200 p-4 text-sm font-semibold text-gray-700 text-center w-48">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr 
            v-for="service in services" 
            :key="service.id"
            class="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
          >
            <td class="p-4 text-center">
              <div class="flex items-center justify-center">
                <span class="text-4xl bg-gradient-to-br from-yellow-50 to-orange-50 w-16 h-16 flex items-center justify-center rounded-xl border-2 border-gray-200 shadow-sm">
                  {{ service.icon || '🎯' }}
                </span>
              </div>
            </td>
            <td class="p-4">
              <p class="font-semibold text-gray-800">{{ service.title }}</p>
            </td>
            <td class="p-4">
              <p class="text-gray-600 text-sm line-clamp-2">{{ service.description || service.desc }}</p>
            </td>
            <td class="p-4">
              <div class="flex items-center justify-center gap-2">
                <button 
                  @click="$emit('edit', service)" 
                  class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                >
                  Edit
                </button>
                <button 
                  @click="$emit('delete', service.id)" 
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
  props: ["services"],
  emits: ["add", "edit", "delete"],
}
</script>