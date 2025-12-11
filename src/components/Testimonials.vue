<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        <h2 class="text-xl font-semibold text-slate-900">Testimoni Klien</h2>
        <p class="text-xs md:text-sm text-slate-500 max-w-md">
          Cerita singkat dari brand dan organisasi yang pernah bekerja bersama kami.
        </p>
      </div>
      <div class="flex items-center gap-2 text-xs text-slate-400">
        <button
          type="button"
          class="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
          @click="prev"
          aria-label="Sebelumnya"
        >
          ‹
        </button>
        <button
          type="button"
          class="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
          @click="next"
          aria-label="Berikutnya"
        >
          ›
        </button>
      </div>
    </div>

    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(t, i) in testimonials"
          :key="t.id"
          class="w-full flex-shrink-0 pr-0 md:pr-6"
        >
          <div
            class="rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-slate-100 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6"
          >
            <div
              class="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 overflow-hidden"
            >
              <img
                v-if="t.logo"
                :src="t.logo"
                :alt="t.client"
                class="w-full h-full object-contain"
              />
              <span v-else>
                {{ initials(t.client) }}
              </span>
            </div>

            <div class="flex-1">
              <p class="text-sm text-slate-700 mb-3 leading-relaxed">
                “{{ t.quote }}”
              </p>
              <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span class="font-semibold text-slate-700">{{ t.client }}</span>
                <span>•</span>
                <span>{{ t.role }}</span>
                <span v-if="t.eventType">• {{ t.eventType }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 flex justify-center gap-2">
        <button
          v-for="(t, i) in testimonials"
          :key="`dot-${t.id}`"
          type="button"
          class="w-2.5 h-2.5 rounded-full transition"
          :class="i === currentIndex ? 'bg-slate-900' : 'bg-slate-300'"
          @click="goTo(i)"
          aria-label="Pilih testimoni"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

/**
 * @typedef {Object} Testimonial
 * @property {number} id
 * @property {string} client
 * @property {string} role
 * @property {string} quote
 * @property {string} [eventType]
 * @property {string} [logo]
 */

/** @type {Testimonial[]} */
const testimonials = [
  {
    id: 1,
    client: "PT Sukses Makmur",
    role: "Marketing Manager",
    quote:
      "Tim sangat rapi dalam menyiapkan rundown dan koordinasi vendor. Eksekusi gala dinner berjalan on-time dan tanpa kendala berarti.",
    eventType: "Gala Dinner Korporat",
    logo: "",
  },
  {
    id: 2,
    client: "Brand X Phone",
    role: "Brand Lead",
    quote:
      "Peluncuran produk terasa dinamis dan sesuai dengan positioning brand kami. Integrasi AV dan lighting sangat membantu storytelling di panggung.",
    eventType: "Product Launch",
    logo: "",
  },
  {
    id: 3,
    client: "Komunitas Tech Summit",
    role: "Event Director",
    quote:
      "Mereka sangat responsif terhadap perubahan last-minute. Logistik dan alur peserta di venue terjaga dengan baik.",
    eventType: "Conference",
    logo: "",
  },
];

const currentIndex = ref(0);
let timer = null;

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
}

function goTo(i) {
  currentIndex.value = i;
}

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

onMounted(() => {
  timer = setInterval(next, 7000);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>


