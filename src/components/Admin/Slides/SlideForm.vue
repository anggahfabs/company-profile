<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow w-[500px] max-h-[90vh] overflow-y-auto">
      <h3 class="text-xl font-semibold mb-4">
        {{ isEdit ? "Edit Slide" : "Add Slide" }}
      </h3>

      <div class="space-y-3">

        <div>
          <label class="font-semibold">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="border border-gray-300 bg-gray-50 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label class="font-semibold">Subtitle</label>
          <input
            v-model="form.subtitle"
            type="text"
            class="border border-gray-300 bg-gray-50 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div>
          <label class="font-semibold">Image</label>
          <input
            type="file"
            @change="handleFileChange"
            accept="image/*"
            class="border border-gray-300 bg-gray-50 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <p class="text-xs text-gray-500 mt-1">Max 5MB (jpeg, jpg, png, gif, webp)</p>
          
          <!-- Preview gambar -->
          <div v-if="imagePreview" class="mt-3">
            <img :src="imagePreview" alt="Preview" class="max-w-full h-40 object-cover rounded border" />
          </div>
          
          <!-- Gambar existing saat edit -->
          <div v-else-if="isEdit && form.image" class="mt-3">
            <img :src="form.image" alt="Current" class="max-w-full h-40 object-cover rounded border" />
            <p class="text-xs text-gray-500 mt-1">Gambar saat ini (upload baru untuk mengganti)</p>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-end space-x-3">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>

        <button
          @click="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";

const props = defineProps({
  modelValue: Object,
  isEdit: Boolean,
});

const emit = defineEmits(["close", "save"]);

const form = reactive({
  title: "",
  subtitle: "",
  image: "",
});

const selectedFile = ref(null);
const imagePreview = ref(null);

// Handle file selection
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

// isi form saat edit
watch(
  () => props.modelValue,
  (v) => {
    if (v) {
      form.title = v.title;
      form.subtitle = v.subtitle;
      form.image = v.image;
    }
    // Reset preview saat buka form baru
    if (!v) {
      imagePreview.value = null;
      selectedFile.value = null;
    }
  },
  { immediate: true }
);

const submit = () => {
  // Buat FormData untuk kirim file
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("subtitle", form.subtitle || "");
  
  if (selectedFile.value) {
    formData.append("image", selectedFile.value);
  } else if (isEdit && form.image) {
    // Jika edit dan tidak upload gambar baru, kirim path gambar lama
    formData.append("image", form.image);
  }
  
  emit("save", formData);
};
</script>
