<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">
    
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Social Media</h2>
        <p class="text-sm text-gray-500 mt-1">Manage your social media links</p>
      </div>
      <button 
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2" 
        @click="$emit('add')"
      >
        <span class="text-lg">+</span>
        Add Link
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-gradient-to-r from-gray-100 to-gray-50">
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">Platform</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200">URL</th>
            <th class="p-4 font-semibold text-gray-700 text-sm border-b border-gray-200 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr 
            v-for="item in items" 
            :key="item.id" 
            class="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
          >
            <!-- Platform -->
            <td class="p-4 text-sm font-semibold text-gray-800">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                {{ item.platform }}
              </div>
            </td>

            <!-- URL -->
            <td class="p-4">
              <a 
                :href="item.url" 
                target="_blank" 
                class="text-blue-600 hover:underline break-all text-sm"
              >
                {{ item.url }}
              </a>
            </td>

            <!-- Actions -->
            <td class="p-4">
              <div class="flex items-center justify-center gap-2">
                <button 
                  class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('edit', item)"
                >
                  Edit
                </button>

                <button 
                  class="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 font-medium text-sm transition-colors duration-150 shadow-sm hover:shadow"
                  @click="$emit('delete', item.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <!-- Empty State -->
          <tr v-if="!items || items.length === 0">
            <td colspan="3" class="p-10 text-center">
              <div class="flex flex-col items-center gap-3">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span class="text-4xl">🔗</span>
                </div>
                <div>
                  <p class="text-gray-600 font-medium">No social media links</p>
                  <p class="text-sm text-gray-500 mt-1">Click "Add Link" to get started</p>
                </div>
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
  props: ["items"],
  emits: ["edit", "delete", "add"]
}
</script>
