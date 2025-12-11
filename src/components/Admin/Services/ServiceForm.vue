<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-[520px] border border-gray-100">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">
        {{ isEdit ? 'Edit Service' : 'Tambah Service' }}
      </h2>

      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <label class="block font-semibold mb-2 text-gray-700 text-sm">Title</label>
          <input 
            v-model="form.title" 
            type="text" 
            class="border-2 border-gray-200 rounded-lg p-3 w-full bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400" 
            required 
            placeholder="e.g. Event Planning"
          />
        </div>

        <div class="mb-5">
          <label class="block font-semibold mb-2 text-gray-700 text-sm">Description</label>
          <textarea 
            v-model="form.description" 
            class="border-2 border-gray-200 rounded-lg p-3 w-full bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none" 
            rows="4"
            required
            placeholder="Deskripsi lengkap tentang layanan ini..."
          ></textarea>
        </div>

        <div class="mb-6">
          <label class="block font-semibold mb-2 text-gray-700 text-sm">Icon (Emoji)</label>
          <input 
            v-model="form.icon" 
            type="text" 
            class="border-2 border-gray-200 rounded-lg p-3 w-full text-4xl text-center bg-gradient-to-br from-yellow-50 to-white focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200" 
            placeholder="🎉"
            maxlength="2"
          />
          <p class="text-xs text-gray-500 mt-2 text-center bg-gray-50 rounded-lg py-2 px-3">
            💡 Gunakan emoji: 🎉 🎤 🏛️ 🚚 👥 ✨ 🎭 🎨 📸
          </p>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button 
            type="button"
            @click="$emit('close')"
            class="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    modelValue: Object,
    isEdit: Boolean
  },
  emits: ['save', 'close'],
  setup(props, { emit }) {
    const form = ref({
      title: '',
      description: '',
      icon: '',
    })

    // Watch untuk populate form saat edit
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          form.value = {
            title: val.title || '',
            description: val.description || val.desc || '',
            icon: val.icon || '',
          }
        } else {
          form.value = { title: '', description: '', icon: '' }
        }
      },
      { immediate: true }
    )

    const submitForm = () => {
      emit('save', { ...form.value })
    }

    return { form, submitForm }
  }
}
</script>