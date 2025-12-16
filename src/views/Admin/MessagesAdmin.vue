<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Pesan Pengunjung</h1>

    <div class="overflow-x-auto bg-white rounded-xl shadow border">
      <table class="min-w-full text-sm">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-3 text-left">Nama</th>
            <th class="px-4 py-3 text-left">Email</th>
            <th class="px-4 py-3 text-left">Phone</th>
            <th class="px-4 py-3 text-left">Perusahaan</th>
            <th class="px-4 py-3 text-left">Jenis Acara</th>
            <th class="px-4 py-3 text-left">Tanggal & Lokasi</th>
            <th class="px-4 py-3 text-left">Pesan</th>
            <th class="px-4 py-3 text-left">Tanggal</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="msg in messages"
            :key="msg.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="px-4 py-3 font-medium">{{ msg.name }}</td>
            <td class="px-4 py-3">{{ msg.email }}</td>
            <td class="px-4 py-3">{{ msg.phone || '-' }}</td>
            <td class="px-4 py-3">{{ msg.company || '-' }}</td>
            <td class="px-4 py-3">{{ msg.event_type || '-' }}</td>
            <td class="px-4 py-3">{{ msg.event_info || '-' }}</td>
            <td class="px-4 py-3 max-w-xs truncate" :title="msg.message">
              {{ msg.message }}
            </td>
            <td class="px-4 py-3 text-gray-500">
              {{ formatDate(msg.created_at) }}
            </td>
          </tr>

          <tr v-if="messages.length === 0">
            <td colspan="8" class="text-center py-6 text-gray-400">
              Belum ada pesan masuk
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import API from "@/services/api";

export default {
  setup() {
    const messages = ref([]);

    const fetchMessages = async () => {
      try {
        const res = await API.get("/admin/messages");
        messages.value = res.data;
      } catch (err) {
        console.error("Gagal ambil pesan:", err);
      }
    };

    const formatDate = (date) => {
      return new Date(date).toLocaleString("id-ID");
    };

    onMounted(fetchMessages);

    return { messages, formatDate };
  },
};
</script>
