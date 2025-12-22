<template>
  <div v-if="modelValue" class="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4">
    <div class="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden" role="dialog" aria-modal="true">
      <header class="px-6 pt-5 pb-3 border-b flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold text-slate-900">
            <slot name="title">{{ title }}</slot>
          </h3>
          <p v-if="subtitle" class="text-xs text-slate-500 mt-0.5">
            <slot name="subtitle">{{ subtitle }}</slot>
          </p>
        </div>
        <button type="button"
          class="ml-3 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          @click="close" aria-label="Close dialog">
          ✕
        </button>
      </header>

      <section class="px-6 py-4 text-sm text-slate-700">
        <slot />
      </section>

      <footer v-if="$slots.footer" class="px-6 py-4 border-t bg-slate-50 flex items-center justify-end gap-2">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

function close() {
  emit("update:modelValue", false);
}
</script>
