<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
    <div class="bg-white p-6 w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">

      <h2 class="text-2xl font-bold mb-6 text-slate-800">
        {{ isEdit ? 'Edit Project' : 'Add Project' }}
      </h2>

      <form @submit.prevent="submit" class="space-y-4">

        <div>
          <label class="block mb-2 font-semibold text-slate-700">Title</label>
          <input 
            v-model="form.title" 
            class="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" 
            required 
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-slate-700">Description</label>
          <textarea 
            v-model="form.description" 
            class="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" 
            rows="3" 
            required 
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-slate-700">Category</label>
          <input 
            v-model="form.category" 
            class="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" 
            placeholder="e.g. Music Event, Corporate" 
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-slate-700">Image</label>
          <input
            type="file"
            @change="handleFileChange"
            accept="image/*"
            class="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p class="text-xs text-slate-500 mt-2">Max 5MB (jpeg, jpg, png, gif, webp)</p>
          
          <!-- Preview gambar -->
          <div v-if="imagePreview" class="mt-4">
            <div class="relative rounded-lg overflow-hidden border-2 border-blue-200 bg-slate-50 p-2">
              <img :src="imagePreview" alt="Preview" class="w-full h-40 object-cover rounded" />
              <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">Preview</span>
            </div>
          </div>
          
          <!-- Gambar existing saat edit -->
          <div v-else-if="isEdit && form.image" class="mt-4">
            <div class="relative rounded-lg overflow-hidden border-2 border-slate-200 bg-slate-50 p-2">
              <img :src="form.image" alt="Current" class="w-full h-40 object-cover rounded" />
              <span class="absolute top-3 left-3 bg-slate-600 text-white text-xs font-semibold px-2 py-1 rounded">Current Image</span>
            </div>
            <p class="text-xs text-slate-500 mt-2">Gambar saat ini (upload baru untuk mengganti)</p>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-4">
          <button 
            type="button" 
            @click="$emit('close')" 
            class="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Save
          </button>
        </div>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";

const props = defineProps({
  modelValue: Object,
  isEdit: Boolean
});

const emit = defineEmits(["close", "save"]);

const form = reactive({
  title: "",
  description: "",
  category: "",
  image: ""
});

const selectedFile = ref(null);
const imagePreview = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      Object.assign(form, val);
    } else {
      Object.assign(form, { title: "", description: "", category: "", image: "" });
      imagePreview.value = null;
      selectedFile.value = null;
    }
  },
  { immediate: true }
);

const submit = () => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("description", form.description);
  formData.append("category", form.category || "");
  
  if (selectedFile.value) {
    formData.append("image", selectedFile.value);
  } else if (props.isEdit && form.image) {
    formData.append("image", form.image);
  }
  
  emit("save", formData);
};
</script>