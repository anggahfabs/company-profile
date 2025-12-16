<template>
  <div class="overflow-x-auto bg-white rounded-xl shadow border">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="px-4 py-3 text-left font-semibold">Nama</th>
          <th class="px-4 py-3 text-left font-semibold">Email</th>
          <th class="px-4 py-3 text-left font-semibold">Phone</th>
          <th class="px-4 py-3 text-left font-semibold">Perusahaan</th>
          <th class="px-4 py-3 text-left font-semibold">Jenis Acara</th>
          <th class="px-4 py-3 text-left font-semibold">Tanggal & Lokasi</th>
          <th class="px-4 py-3 text-left font-semibold">Pesan</th>
          <th class="px-4 py-3 text-left font-semibold">Tanggal Dibuat</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="msg in messages"
          :key="msg.id"
          class="border-t hover:bg-gray-50 transition-colors duration-150"
        >
          <td class="px-4 py-3 font-medium text-gray-900">{{ msg.name }}</td>
          <td class="px-4 py-3 text-gray-700">{{ msg.email }}</td>
          <td class="px-4 py-3 text-gray-700">{{ msg.phone || "-" }}</td>
          <td class="px-4 py-3 text-gray-700">{{ msg.company || "-" }}</td>
          <td class="px-4 py-3 text-gray-700">{{ msg.event_type || "-" }}</td>
          <td class="px-4 py-3 text-gray-700">{{ msg.event_info || "-" }}</td>
          <td
            class="px-4 py-3 max-w-xs truncate text-gray-700"
            :title="msg.message"
          >
            {{ msg.message }}
          </td>
          <td class="px-4 py-3 text-gray-500 whitespace-nowrap">
            {{ formatDate(msg.created_at) }}
          </td>
        </tr>

        <tr v-if="messages.length === 0">
          <td colspan="8" class="text-center py-12 text-gray-400">
            <div class="flex flex-col items-center gap-2">
              <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p class="font-medium">Belum ada pesan masuk</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    }
  }
}
</script>