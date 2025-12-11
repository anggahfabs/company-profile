<template>
  <div class="bg-white p-6 shadow-lg rounded-lg border border-slate-200">
    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-slate-800 mb-2">Contact Information</h2>
      <p class="text-sm text-slate-600">
        Informasi kontak yang ditampilkan di halaman Contact publik. Hanya boleh ada 1 data contact info.
      </p>
    </div>

    <div class="overflow-x-auto rounded-lg border border-slate-200">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 border-b-2 border-slate-300">
            <th class="p-4 font-semibold text-slate-700 text-sm">Alamat</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">Telepon</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">WhatsApp</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">Email</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">Senin-Jumat</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">Sabtu</th>
            <th class="p-4 font-semibold text-slate-700 text-sm">Minggu</th>
            <th class="p-4 font-semibold text-slate-700 text-sm text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="c in contactList" :key="c.id" class="hover:bg-blue-50 transition-colors border-b border-slate-200">
            <td class="p-4 text-sm text-slate-700 max-w-xs">
              <div class="line-clamp-2">{{ c.address }}</div>
            </td>
            <td class="p-4 text-sm text-slate-700 whitespace-nowrap">
              <span class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {{ c.phone }}
              </span>
            </td>
            <td class="p-4 text-sm text-slate-700 whitespace-nowrap">
              <span v-if="c.whatsapp" class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {{ c.whatsapp }}
              </span>
              <span v-else class="text-slate-400">-</span>
            </td>
            <td class="p-4 text-sm text-slate-700">
              <span class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {{ c.email }}
              </span>
            </td>
            <td class="p-4 text-sm text-slate-700 whitespace-nowrap">
              <span v-if="c.weekday_hours" class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ c.weekday_hours }}
              </span>
              <span v-else class="text-slate-400">-</span>
            </td>
            <td class="p-4 text-sm text-slate-700 whitespace-nowrap">
              <span v-if="c.saturday_hours" class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ c.saturday_hours }}
              </span>
              <span v-else class="text-slate-400">-</span>
            </td>
            <td class="p-4 text-sm text-slate-700 whitespace-nowrap">
              <span v-if="c.sunday_hours" class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ c.sunday_hours }}
              </span>
              <span v-else class="text-slate-400">-</span>
            </td>

            <td class="p-4 text-center">
              <button
                @click="$emit('edit', c)"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                Edit
              </button>
            </td>
          </tr>
          
          <tr v-if="!contactList || contactList.length === 0">
            <td colspan="8" class="p-10 text-center">
              <div class="flex flex-col items-center gap-3">
                <svg class="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>
                <div>
                  <p class="text-slate-600 font-medium">Belum ada contact info</p>
                  <p class="text-sm text-slate-500 mt-1">Silakan tambahkan di form di atas</p>
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
  props: ["contactList"],
  emits: ["edit", "delete"],
}
</script>