<template>
  <div class="bg-white p-8 shadow-xl rounded-2xl border border-slate-200 mb-6 transition-all">
    <h2 class="text-3xl font-bold mb-8 text-slate-800 tracking-tight">
      {{ isEdit ? "Edit Social Media" : "Tambah Social Media" }}
    </h2>

    <form @submit.prevent="submit" class="space-y-6">

      <!-- Platform -->
      <div class="space-y-2">
        <label class="block font-semibold text-slate-700 text-sm">Platform</label>
        <input 
          v-model="form.platform" 
          class="border border-slate-300 bg-white p-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
          placeholder="Instagram, Facebook, YouTube, LinkedIn, TikTok, Twitter"
          required
        />
        <p class="text-xs text-slate-500">Nama platform menentukan icon yang ditampilkan</p>
      </div>

      <!-- URL -->
      <div class="space-y-2">
        <label class="block font-semibold text-slate-700 text-sm">URL Link</label>
        <input 
          v-model="form.url" 
          type="url"
          class="border border-slate-300 bg-white p-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
          placeholder="https://instagram.com/username"
          required
        />
        <p class="text-xs text-slate-500">Masukkan link lengkap profil social media</p>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4 pt-4">
        <button 
          type="submit"
          class="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 
                 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl 
                 transition-all duration-300 transform hover:scale-[1.03]"
        >
          {{ isEdit ? "Update Social Media" : "Simpan Social Media" }}
        </button>

        <button
          v-if="isEdit"
          @click="$emit('cancel')"
          type="button"
          class="bg-slate-200 hover:bg-slate-300 text-slate-700 px-7 py-3 rounded-xl 
                 font-semibold shadow-sm transition-all duration-300"
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
  props: ["modelValue", "isEdit"],
  emits: ["save", "cancel"],

  setup(props, { emit }) {
    const form = ref({
      platform: "",
      url: ""
    })

    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          form.value = {
            platform: val.platform || "",
            url: val.url || ""
          }
        } else {
          form.value = { platform: "", url: "" }
        }
      },
      { immediate: true }
    )

    const submit = () => {
      emit("save", { ...form.value })
      form.value = { platform: "", url: "" }
    }

    return { form, submit }
  }
}
</script>
