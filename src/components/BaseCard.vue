<template>
  <article
    :class="[
      'rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 cursor-pointer',
      wrapperClass,
    ]"
    @click="$emit('click')"
  >
    <div v-if="image" class="w-full h-48 md:h-56 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <div class="p-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-semibold text-base md:text-lg text-gray-800">
          {{ title }}
        </h3>
        <span
          v-if="badge"
          class="inline-flex items-center rounded-full bg-slate-100 text-[10px] px-2 py-1 font-medium text-slate-600"
        >
          {{ badge }}
        </span>
      </div>

      <p v-if="subtitle" class="text-xs text-gray-500 mb-1">
        {{ subtitle }}
      </p>

      <p v-if="description" class="text-sm text-gray-600">
        {{ description }}
      </p>

      <div v-if="tags && tags.length" class="mt-3 flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-0.5 rounded-full bg-slate-50 text-[10px] font-medium text-slate-500"
        >
          {{ tag }}
        </span>
      </div>

      <slot />
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  badge: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
  wrapperClass: { type: String, default: "" },
});
</script>


