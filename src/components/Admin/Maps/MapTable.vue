<template>
  <div class="overflow-x-auto">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-4 py-2">Title</th>
          <th class="border px-4 py-2">Preview</th>
          <th class="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in maps" :key="row.id">
          <td class="border px-4 py-2">{{ row.title }}</td>
          <td class="border px-4 py-2 max-w-[300px]">
            <div v-html="row.embed"></div>
          </td>
          <td class="border px-4 py-2 flex gap-2">
            <button
              @click="$emit('edit', row)"
              class="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              @click="$emit('delete', row.id)"
              class="bg-red-600 text-white px-3 py-1 rounded"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["maps"]
}
</script>
