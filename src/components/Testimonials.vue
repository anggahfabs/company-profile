<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        <h2 class="text-xl font-semibold text-slate-900">Client Testimonials</h2>
        <p class="text-xs md:text-sm text-slate-500 max-w-md">
          Short stories from brands and organizations that have worked with us.
        </p>
      </div>
      <div class="flex items-center gap-2 text-xs text-slate-400">
        <button type="button"
          class="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
          @click="prev" aria-label="Previous">
          ‹
        </button>
        <button type="button"
          class="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100"
          @click="next" aria-label="Next">
          ›
        </button>
      </div>
    </div>

    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(t, i) in testimonials" :key="t.id" class="w-full flex-shrink-0 pr-0 md:pr-6">
          <div
            class="rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-slate-100 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
            <div
              class="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 overflow-hidden">
              <img v-if="t.logo" :src="t.logo" :alt="t.client" class="w-full h-full object-contain" />
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
        <button v-for="(t, i) in testimonials" :key="`dot-${t.id}`" type="button"
          class="w-2.5 h-2.5 rounded-full transition" :class="i === currentIndex ? 'bg-slate-900' : 'bg-slate-300'"
          @click="goTo(i)" aria-label="Select testimonial"></button>
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
      "The team was very organized in preparing the rundown and coordinating vendors. The gala dinner execution ran on-time and without significant issues.",
    eventType: "Corporate Gala Dinner",
    logo: "",
  },
  {
    id: 2,
    client: "Brand X Phone",
    role: "Brand Lead",
    quote:
      "The product launch felt dynamic and aligned with our brand positioning. AV and lighting integration greatly helped storytelling on stage.",
    eventType: "Product Launch",
    logo: "",
  },
  {
    id: 3,
    client: "Tech Summit Community",
    role: "Event Director",
    quote:
      "They were very responsive to last-minute changes. Logistics and participant flow at the venue were well maintained.",
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
