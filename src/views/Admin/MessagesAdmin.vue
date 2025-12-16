<template>
  <AdminLayout :unreadCount="unreadCount">
    <div class="p-6 space-y-6">
      <h1 class="text-2xl font-bold">Pesan Pengunjung</h1>
      <MessagesTable
        :messages="messages"
        @update-unread="fetchMessages"
      />
    </div>
  </AdminLayout>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import API from "@/services/api";
import AdminLayout from "@/components/Admin/AdminLayout.vue";
import MessagesTable from "@/components/Admin/Messages/MessagesTable.vue";

export default {
  components: { AdminLayout, MessagesTable },

  setup() {
    const messages = ref([]);

    const fetchMessages = async () => {
      try {
        const res = await API.get("/admin/messages");
        messages.value = res.data || [];
      } catch (err) {
        console.error("Gagal ambil pesan:", err);
      }
    };

    onMounted(fetchMessages);

    const unreadCount = computed(() =>
      messages.value.filter((m) => m.is_read === 0).length
    );

    const recountUnread = () => {
      // computed akan otomatis update, tapi kita bisa paksa rerender jika perlu
    };

    return { messages, unreadCount, fetchMessages };
  },
};
</script>
