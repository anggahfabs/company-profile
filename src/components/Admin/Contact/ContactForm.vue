<template>
  <div class="bg-white p-6 shadow-lg rounded-lg border border-slate-200">
    <h2 class="text-2xl font-semibold mb-6 text-slate-800">
      {{ isEdit ? "Edit Contact Info" : "Tambah Contact Info" }}
    </h2>

    <form @submit.prevent="submit" class="space-y-5">

      <!-- ADDRESS -->
      <div>
        <label class="block font-medium text-slate-700 mb-2">Alamat Lengkap</label>
        <textarea
          class="border border-gray-300 bg-gray-50 p-3 w-full rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
          v-model="form.address"
          rows="3"
          placeholder="Jl. Contoh No.1, Jakarta, Indonesia"
          required
        ></textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- PHONE -->
        <div>
          <label class="block font-medium text-slate-700 mb-2">Telepon</label>
          <input
            type="tel"
            class="border border-gray-300 bg-gray-50 p-3 w-full rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
            v-model="form.phone"
            placeholder="+62 21-1234-5678"
            required
          />
        </div>

        <!-- WHATSAPP -->
        <div>
          <label class="block font-medium text-slate-700 mb-2">WhatsApp</label>
          <input
            type="tel"
            class="border border-gray-300 bg-gray-50 p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            v-model="form.whatsapp"
            placeholder="+62 812-3456-7890"
            required
          />
          <p class="text-xs text-slate-500 mt-1">Untuk link WhatsApp di website</p>
        </div>
      </div>

      <!-- EMAIL -->
      <div>
        <label class="block font-medium text-slate-700 mb-2">Email</label>
        <input
          type="email"
          class="border border-gray-300 bg-gray-50 p-3 w-full rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
          v-model="form.email"
          placeholder="info@company.com"
          required
        />
      </div>

      <!-- WORKING HOURS -->
      <div class="p-4 bg-amber-50 rounded-lg border border-amber-200">
        <h3 class="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Jam Operasional
        </h3>
        
        <div class="space-y-3">
          <!-- Weekday -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Senin - Jumat</label>
            <input
              type="text"
              class="border border-gray-300 bg-white p-2.5 w-full rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
              v-model="form.weekday_hours"
              placeholder="09.00 - 18.00"
            />
          </div>

          <!-- Saturday -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Sabtu</label>
            <input
              type="text"
              class="border border-gray-300 bg-white p-2.5 w-full rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
              v-model="form.saturday_hours"
              placeholder="10.00 - 16.00"
            />
          </div>

          <!-- Sunday -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Minggu / Libur</label>
            <input
              type="text"
              class="border border-gray-300 bg-white p-2.5 w-full rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
              v-model="form.sunday_hours"
              placeholder="Tutup / By Appointment"
            />
          </div>
        </div>
      </div>

      <div class="flex gap-3 pt-2">
        <button 
          type="submit" 
          class="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {{ isEdit ? "Update Contact Info" : "Simpan Contact Info" }}
        </button>

        <button
          v-if="isEdit"
          type="button"
          @click="$emit('cancel')"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
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
      address: "",
      phone: "",
      whatsapp: "",
      email: "",
      weekday_hours: "",
      saturday_hours: "",
      sunday_hours: ""
    })

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) {
          form.value = {
            address: newVal.address || "",
            phone: newVal.phone || "",
            whatsapp: newVal.whatsapp || "",
            email: newVal.email || "",
            weekday_hours: newVal.weekday_hours || "",
            saturday_hours: newVal.saturday_hours || "",
            sunday_hours: newVal.sunday_hours || ""
          }
        } else {
          form.value = { 
            address: "", 
            phone: "", 
            whatsapp: "",
            email: "", 
            weekday_hours: "",
            saturday_hours: "",
            sunday_hours: ""
          }
        }
      },
      { immediate: true }
    )

    const submit = () => {
      emit("save", { ...form.value })
    }

    return { form, submit }
  }
}
</script>