<template>
  <section class="py-10">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-xl font-semibold text-slate-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-sm text-slate-600 mb-6">
        Common questions about pricing, timeline, and our scope of work.
      </p>

      <div class="space-y-3">
        <details v-for="item in faqs" :key="item.id"
          class="group border border-slate-200 rounded-xl bg-white px-4 py-3">
          <summary class="flex items-center justify-between cursor-pointer list-none">
            <span class="text-sm font-medium text-slate-800 pr-4">
              {{ item.q }}
            </span>
            <span
              class="w-6 h-6 flex items-center justify-center rounded-full text-slate-500 group-open:rotate-45 transition">
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
    q: "What is the price range for an event?",
    a: "Budget depends heavily on event scale, number of guests, technical needs, and venue. We usually start by discussing requirements, then preparing rough estimates and package options.",
  },
  {
    id: 2,
    q: "How far in advance should we contact your team?",
    a: "Ideally 4–8 weeks before for small-medium events, and 3–6 months for large events like conferences or concerts.",
  },
  {
    id: 3,
    q: "Can you help with only specific parts (e.g. decor or production)?",
    a: "Yes. We are flexible — you can use our services for full-service or just for specific pillars like production, decoration, or venue management.",
  },
  {
    id: 4,
    q: "Can you work out of town?",
    a: "Yes, we are used to handling events in various cities. Transport and accommodation costs for the team will be discussed in the initial proposal.",
  },
];
</script>
