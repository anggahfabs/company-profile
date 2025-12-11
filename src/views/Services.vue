<template>
  <div>
    <Navbar />

    <!-- HEADER -->
    <section
      class="pt-32 pb-16 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden"
    >
      <!-- Abstract decorative elements -->
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div
          class="absolute -top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-sky-100 to-transparent blur-3xl"
        ></div>
        <div
          class="absolute top-40 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 to-transparent blur-3xl"
        ></div>
        <div
          class="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-100 to-transparent blur-2xl"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
          <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <p class="text-xs uppercase tracking-[0.25em] text-sky-700 font-medium">
            Services Page
          </p>
        </div>
        
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 leading-tight max-w-4xl mx-auto"
        >
          Layanan 
          <span class="bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">end-to-end</span> 
          untuk setiap jenis acara.
        </h1>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Dari perencanaan hingga eksekusi di hari-H, kami menangani seluruh
          detail teknis dan kreatif sehingga Anda dapat fokus pada tamu dan
          tujuan acara.
        </p>
      </div>
    </section>

    <!-- SERVICES GRID REUSE -->
    <section
      class="py-16 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-white overflow-hidden"
    >
      <!-- Subtle abstract background -->
      <div
        class="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div
          class="absolute -bottom-32 -left-20 w-96 h-96 rounded-full border-2 border-slate-100"
        ></div>
        <div
          class="absolute -top-32 right-0 w-80 h-80 rounded-[4rem] border-2 border-sky-100"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative">
        <ServicesSection />

        <!-- PROSES KERJA & COCOK UNTUK -->
        <div class="mt-24 grid gap-12 lg:grid-cols-2 items-start">
          <!-- Cara Kami Bekerja -->
          <div 
            data-aos="fade-right"
            class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900">
                Cara Kami Bekerja
              </h2>
            </div>
            
            <p class="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
              Setiap proyek dimulai dari pemahaman tujuan bisnis dan experience
              yang ingin diciptakan. Tim kami akan menyusun konsep, budget, dan
              timeline yang realistis untuk Anda.
            </p>
            
            <div class="space-y-4">
              <div class="flex gap-4 items-start group">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-300">
                  <span class="text-sm font-bold text-sky-600 group-hover:text-white transition-colors duration-300">1</span>
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-sm md:text-base text-slate-700 font-medium">Konsultasi kebutuhan acara</p>
                </div>
              </div>
              
              <div class="flex gap-4 items-start group">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-300">
                  <span class="text-sm font-bold text-sky-600 group-hover:text-white transition-colors duration-300">2</span>
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-sm md:text-base text-slate-700 font-medium">Penyusunan konsep & estimasi budget</p>
                </div>
              </div>
              
              <div class="flex gap-4 items-start group">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-300">
                  <span class="text-sm font-bold text-sky-600 group-hover:text-white transition-colors duration-300">3</span>
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-sm md:text-base text-slate-700 font-medium">Detailing teknis & koordinasi vendor</p>
                </div>
              </div>
              
              <div class="flex gap-4 items-start group">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-300">
                  <span class="text-sm font-bold text-sky-600 group-hover:text-white transition-colors duration-300">4</span>
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-sm md:text-base text-slate-700 font-medium">Pre-event rehearsal (jika dibutuhkan)</p>
                </div>
              </div>
              
              <div class="flex gap-4 items-start group">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-300">
                  <span class="text-sm font-bold text-sky-600 group-hover:text-white transition-colors duration-300">5</span>
                </div>
                <div class="flex-1 pt-2">
                  <p class="text-sm md:text-base text-slate-700 font-medium">Eksekusi hari-H & post-event report</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Cocok Untuk -->
          <div
            data-aos="fade-left"
            class="bg-gradient-to-br from-amber-50 via-white to-white rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900">
                Cocok Untuk
              </h3>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span class="text-lg">🏢</span>
                  </div>
                  <p class="font-semibold text-slate-900">Corporate</p>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Townhall, conference, product launch, roadshow, gala dinner.
                </p>
              </div>
              
              <div class="space-y-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span class="text-lg">🎯</span>
                  </div>
                  <p class="font-semibold text-slate-900">Brand & Marketing</p>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Activation, pop-up booth, brand experience, promo event.
                </p>
              </div>
              
              <div class="space-y-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span class="text-lg">🎊</span>
                  </div>
                  <p class="font-semibold text-slate-900">Social Events</p>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Wedding, birthday, private celebration, charity event.
                </p>
              </div>
              
              <div class="space-y-2 p-4 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-colors duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span class="text-lg">🎵</span>
                  </div>
                  <p class="font-semibold text-slate-900">Music & Entertainment</p>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Concert, showcase, festival, community gathering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div
          data-aos="fade-up"
          class="mt-20 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
        >
          <!-- Decorative element -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100 to-transparent rounded-full blur-3xl opacity-50"></div>
          
          <div class="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-4">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>Event Mendatang</span>
              </div>
              
              <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Punya event dalam 1–2 bulan ke depan?
              </h3>
              <p class="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
                Kirimkan brief singkat kepada kami. Tim konsultan akan membantu
                menyusun konsep dan estimasi tanpa biaya awal.
              </p>
            </div>
            
            <router-link
              to="/contact"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-sm md:text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <span>Diskusikan Proyek Anda</span>
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ServicesSection from "../components/Services.vue";

export default {
  components: {
    Navbar,
    Footer,
    ServicesSection,
  },
};
</script>