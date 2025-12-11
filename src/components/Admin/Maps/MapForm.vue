<template>
  <div class="p-4 border rounded-md bg-gray-50">
    <h2 class="text-xl font-semibold mb-4">
      {{ editData ? 'Edit Maps' : 'Add Maps' }}
    </h2>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="font-semibold">Title</label>
        <input
          v-model="form.title"
          type="text"
          class="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div class="mb-3">
        <label class="font-semibold">Embed Code (Google Maps)</label>
        <textarea
          v-model="form.embed"
          class="w-full border px-3 py-2 rounded h-32"
          placeholder="Paste Google Maps iframe here"
          required
        ></textarea>
      </div>

      <div class="flex gap-4 mt-4">
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          @click="$emit('close')"
          class="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue"

export default {
  props: ["editData"],
  setup(props, { emit }) {
    const form = ref({
      id: null,
      title: "",
      embed: ""
    })

    watch(
      () => props.editData,
      (val) => {
        if (val) form.value = { ...val }
      },
      { immediate: true }
    )

    const submitForm = () => {
      emit("save", { ...form.value })
    }

    return { form, submitForm }
  }
}
</script>
