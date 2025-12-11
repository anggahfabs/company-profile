<template>
  <section class="py-10">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-xl font-semibold text-slate-900 mb-4">
        Pertanyaan yang Sering Diajukan
      </h2>
      <p class="text-sm text-slate-600 mb-6">
        Beberapa hal yang sering ditanyakan seputar harga, timeline, dan scope
        kerja kami.
      </p>

      <div class="space-y-3">
        <details
          v-for="item in faqs"
          :key="item.id"
          class="group border border-slate-200 rounded-xl bg-white px-4 py-3"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <span class="text-sm font-medium text-slate-800 pr-4">
              {{ item.q }}
            </span>
            <span
              class="w-6 h-6 flex items-center justify-center rounded-full text-slate-500 group-open:rotate-45 transition"
            >
              +
            </span>
          </summary>
          <p class="mt-2 text-xs text-slate-600 leading-relaxed">
            {{ item.a }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * @typedef {Object} FAQ
 * @property {number} id
 * @property {string} q
 * @property {string} a
 */

/** @type {FAQ[]} */
const faqs = [
  {
    id: 1,
    q: "Berapa kisaran biaya untuk satu event?",
    a: "Budget sangat bergantung pada skala acara, jumlah tamu, kebutuhan teknis, dan venue. Biasanya kami mulai dari diskusi kebutuhan, lalu menyiapkan estimasi kasar dan beberapa opsi paket.",
  },
  {
    id: 2,
    q: "Seberapa jauh hari sebaiknya kami menghubungi tim Anda?",
    a: "Idealnya 4–8 minggu sebelum acara untuk event kecil-menengah, dan 3–6 bulan untuk event besar seperti konferensi atau konser.",
  },
  {
    id: 3,
    q: "Apakah bisa hanya membantu bagian tertentu saja (misal dekor atau produksi)?",
    a: "Bisa. Kami fleksibel — Anda dapat menggunakan jasa kami untuk full-service atau hanya untuk pilar tertentu seperti produksi, dekorasi, atau manajemen venue.",
  },
  {
    id: 4,
    q: "Apakah Anda bisa bekerja di luar kota?",
    a: "Ya, kami terbiasa menangani event di berbagai kota. Biaya transportasi dan akomodasi tim akan dibahas di awal proposal.",
  },
];
</script>
