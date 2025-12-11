<template>
  <div
    class="min-h-screen flex items-center justify-center 
           bg-gradient-to-br from-blue-50 to-gray-100 
           dark:from-gray-900 dark:to-gray-800
           transition-colors duration-500"
  >

    <div
      class="w-full max-w-sm bg-white dark:bg-gray-900 
             p-8 rounded-2xl shadow-xl border border-gray-200 
             dark:border-gray-700 fade-in"
    >
      <!-- Logo -->
      <div class="flex justify-center mb-4">
        <img
          src=/images/rm.png
          alt="Logo"
          class="w-20 h-20 object-contain drop-shadow-md"
        />
      </div>

      <!-- Title -->
      <h2
        class="text-3xl font-extrabold mb-6 text-center 
               text-gray-800 dark:text-gray-100 tracking-wide"
      >
        Admin Login
      </h2>

      <form @submit.prevent="login" class="space-y-5">
        
        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan Email"
            class="w-full border border-gray-300 dark:border-gray-700 
                   px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 
                   text-gray-900 dark:text-gray-100
                   focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                   outline-none transition"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>

          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Masukkan Password"
              class="w-full border border-gray-300 dark:border-gray-700 
                     px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                     outline-none transition"
              required
            />

            <!-- Toggle Eye -->
            <button
              type="button"
              @click="togglePassword"
              class="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
            >
              <span v-if="showPassword">🙈</span>
              <span v-else>👁️</span>
            </button>
          </div>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold 
                 tracking-wide hover:bg-blue-700 shadow-md hover:shadow-lg 
                 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? "Loading..." : "Login" }}
        </button>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-center font-medium mt-2">
          {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import API from "@/services/api"

export default {
  setup() {
    const email = ref("")
    const password = ref("")
    const error = ref("")
    const showPassword = ref(false)
    const loading = ref(false)

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    const login = async () => {
      error.value = ""
      loading.value = true

      try {
        const response = await API.post("/auth/login", {
          email: email.value,
          password: password.value
        })

        // Simpan token dan username ke localStorage
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("admin_auth", "true")
        localStorage.setItem("username", response.data.username)

        // Redirect ke halaman admin
        window.location.href = "/admin/slides"
      } catch (err) {
        if (err.response && err.response.data) {
          error.value = err.response.data.msg || "Login gagal!"
        } else {
          error.value = "Tidak dapat terhubung ke server. Pastikan backend berjalan!"
        }
      } finally {
        loading.value = false
      }
    }

    return { email, password, error, login, showPassword, togglePassword, loading }
  }
}
</script>

<style>
/* Fade-in animation */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
