<template>
  <div class="bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg rounded-2xl mb-6 border border-gray-100">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Edit Team Member</h2>

    <form @submit.prevent="submit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- Nama -->
        <div class="mb-3">
          <label class="font-semibold text-gray-700 mb-2 block text-sm">Nama</label>
          <input 
            v-model="form.name" 
            class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400" 
            required 
          />
        </div>

        <!-- Jabatan -->
        <div class="mb-3">
          <label class="font-semibold text-gray-700 mb-2 block text-sm">Jabatan</label>
          <input 
            v-model="form.position" 
            class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400" 
            required 
          />
        </div>
      </div>

      <!-- Bio -->
      <div class="mb-5">
        <label class="font-semibold text-gray-700 mb-2 block text-sm">Bio</label>
        <textarea 
          v-model="form.bio" 
          class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none" 
          rows="3" 
          placeholder="Deskripsi singkat tentang team member..."
        ></textarea>
      </div>

      <!-- Foto -->
      <div class="mb-5">
        <label class="font-semibold text-gray-700 mb-2 block text-sm">Foto</label>
        
        <!-- Current photo -->
        <div v-if="currentPhoto && !photoPreview" class="mb-3">
          <p class="text-sm text-gray-600 mb-2 font-medium">Foto saat ini:</p>
          <div class="inline-block relative group">
            <img 
              :src="currentPhoto" 
              alt="Current" 
              class="w-32 h-32 object-cover rounded-xl border-2 border-gray-200 shadow-md group-hover:shadow-lg transition-shadow duration-200" 
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-200"></div>
          </div>
        </div>
        
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-blue-50 to-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-medium file:cursor-pointer hover:file:bg-blue-700"
        />
        <p class="text-xs text-gray-500 mt-2 bg-gray-50 rounded-lg py-2 px-3">
          📷 Upload foto baru (opsional). Max 5MB
        </p>
        
        <!-- Preview foto baru -->
        <div v-if="photoPreview" class="mt-4">
          <p class="text-sm text-gray-600 mb-2 font-medium">Preview foto baru:</p>
          <div class="inline-block relative group">
            <img 
              :src="photoPreview" 
              alt="Preview" 
              class="w-32 h-32 object-cover rounded-xl border-2 border-blue-300 shadow-md group-hover:shadow-lg transition-shadow duration-200" 
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-200"></div>
          </div>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="mb-6 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-base">
          <span class="text-2xl">🔗</span>
          Social Media Links
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Instagram -->
          <div>
            <label class="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
              <svg class="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </label>
            <input 
              v-model="form.instagram" 
              type="url" 
              class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-pink-50 to-white focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200 text-gray-800 placeholder-gray-400" 
              placeholder="https://instagram.com/username"
            />
          </div>

          <!-- TikTok -->
          <div>
            <label class="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
              <svg class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              TikTok
            </label>
            <input 
              v-model="form.tiktok" 
              type="url" 
              class="border-2 border-gray-200 p-3 w-full rounded-lg bg-gradient-to-br from-gray-100 to-white focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 text-gray-800 placeholder-gray-400" 
              placeholder="https://tiktok.com/@username"
            />
          </div>
        </div>
      </div>

      <div class="flex gap-3 pt-4 border-t border-gray-100">
        <button 
          type="submit"
          class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          Update Team Member
        </button>
        <button 
          type="button"
          @click="$emit('cancel')"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow"
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
  props: {
    team: Object
  },
  emits: ["save", "cancel"],
  setup(props, { emit }) {
    const form = ref({
      name: "",
      position: "",
      bio: "",
      instagram: "",
      tiktok: "",
    })

    const selectedFile = ref(null)
    const photoPreview = ref(null)
    const currentPhoto = ref(null)

    // Watch for team prop changes
    watch(
      () => props.team,
      (newTeam) => {
        if (newTeam) {
          form.value = {
            name: newTeam.name || "",
            position: newTeam.position || "",
            bio: newTeam.bio || "",
            instagram: newTeam.instagram || "",
            tiktok: newTeam.tiktok || "",
          }
          
          // Set current photo URL
          if (newTeam.photo) {
            const baseURL = 'http://localhost:5000';
            currentPhoto.value = newTeam.photo.startsWith('http') 
              ? newTeam.photo 
              : `${baseURL}${newTeam.photo}`;
          }
        }
      },
      { immediate: true }
    )

    const handleFileChange = (event) => {
      const file = event.target.files[0]
      if (file) {
        selectedFile.value = file
        
        // Create preview
        const reader = new FileReader()
        reader.onload = (e) => {
          photoPreview.value = e.target.result
        }
        reader.readAsDataURL(file)
      }
    }

    const submit = () => {
      const formData = new FormData()
      formData.append("name", form.value.name)
      formData.append("position", form.value.position)
      formData.append("bio", form.value.bio || "")
      formData.append("instagram", form.value.instagram || "")
      formData.append("tiktok", form.value.tiktok || "")
      
      // Only append photo if new file selected
      if (selectedFile.value) {
        formData.append("photo", selectedFile.value)
      } else if (props.team?.photo) {
        // Keep existing photo
        formData.append("photo", props.team.photo)
      }
      
      emit("save", formData)
    }

    return { form, currentPhoto, handleFileChange, photoPreview, submit }
  },
}
</script>