<template>
  <div>
    <Navbar />

    <!-- HERO -->
    <section
      class="pt-32 pb-16 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden"
    >
      <!-- Decorative elements -->
      <div class="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div
          class="absolute -top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-sky-100 to-transparent blur-3xl"
        ></div>
        <div
          class="absolute top-40 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 to-transparent blur-3xl"
        ></div>
        <div
          class="absolute bottom-20 right-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-purple-100 to-transparent blur-2xl"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative text-center">
  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6 mx-auto">
    <div class="w-4 h-4 rounded-full bg-sky-600 animate-pulse"></div>
    <p class="text-xs uppercase tracking-[0.25em] text-sky-700 font-medium">
      Tentang Kami
    </p>
  </div>

  <h1
    class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 leading-tight max-w-4xl mx-auto"
  >
    Agency event yang fokus pada
    <span
      class="bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent"
    >
      eksekusi rapi
    </span>
    dan pengalaman berkesan.
  </h1>

  <p
    class="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mx-auto"
  >
    Kami membantu brand dan organisasi mewujudkan acara yang tidak hanya
    indah secara visual, tapi juga kuat secara pesan dan terukur dampaknya.
  </p>
</div>

    </section>

    <!-- VISI MISI & VALUES -->
    <section
      class="py-20 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-white"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Visi Misi -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900">Visi & Misi</h2>
            </div>
            
            <div class="space-y-5">
              <div class="pl-4 border-l-4 border-sky-500">
                <p class="text-xs uppercase tracking-wider text-sky-600 font-semibold mb-2">Visi</p>
                <p class="text-sm md:text-base text-slate-700 leading-relaxed">
                  Menjadi partner event terpercaya yang mampu menerjemahkan tujuan bisnis klien menjadi
                  pengalaman offline maupun online yang relevan.
                </p>
              </div>
              
              <div class="pl-4 border-l-4 border-amber-500">
                <p class="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-2">Misi</p>
                <p class="text-sm md:text-base text-slate-700 leading-relaxed">
                  Menghadirkan proses kerja yang transparan, koordinasi lintas tim yang solid, dan eksekusi
                  teknis yang aman untuk setiap skala acara.
                </p>
              </div>
            </div>
          </div>

          <!-- Values -->
          <div class="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900">Nilai Kami</h2>
            </div>
            
            <ul class="space-y-5">
              <li class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mt-1">
                  <span class="text-amber-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 mb-1">Detail-oriented</p>
                  <p class="text-sm text-slate-600">
                    Setiap rundown, layout, dan cue dipersiapkan dengan teliti.
                  </p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mt-1">
                  <span class="text-amber-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 mb-1">Transparent</p>
                  <p class="text-sm text-slate-600">
                    Klien tahu apa yang terjadi di setiap tahap produksi.
                  </p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mt-1">
                  <span class="text-amber-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p class="font-semibold text-slate-900 mb-1">Collaborative</p>
                  <p class="text-sm text-slate-600">
                    Bekerja erat dengan tim internal klien dan vendor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US / KEUNGGULAN -->
    <section class="py-20 w-full bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
            <svg class="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-xs uppercase tracking-wider text-slate-700 font-semibold">Keunggulan</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Kenapa brand memilih bekerja dengan kami
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            Bukan hanya soal dekor yang bagus, tapi juga soal proses kerja dan
            rasa aman di hari-H.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-3xl font-bold text-white">01</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              Perencanaan terstruktur
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Brief diterjemahkan jadi timeline, checklist, dan rundown yang
              jelas untuk semua pihak.
            </p>
          </div>

          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-3xl font-bold text-white">02</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              Produksi yang bisa diandalkan
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Tim teknis berpengalaman di sound, lighting, dan stage sehingga
              acara berjalan stabil.
            </p>
          </div>

          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span class="text-3xl font-bold text-white">03</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              Komunikasi transparan
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Satu PIC utama yang selalu mengabarkan progress dan siap merespons
              perubahan.
            </p>
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
import Testimonials from "../components/Testimonials.vue";

export default {
  components: {
    Navbar,
    Footer,
    Testimonials,
  },
  data() {
    return {
      timeline: [
        {
          year: "2018",
          title: "Mulai sebagai tim kecil",
          description:
            "Menangani event-event private dan intimate wedding dengan skala 100–200 tamu.",
        },
        {
          year: "2020",
          title: "Masuk ke corporate & activation",
          description:
            "Mendukung brand lokal meluncurkan produk baru dan membuat activation di mall.",
        },
        {
          year: "2022",
          title: "Produksi event skala besar",
          description:
            "Mengelola konser amal dan konferensi dengan ribuan peserta.",
        },
        {
          year: "2024",
          title: "Hybrid & experience-driven events",
          description:
            "Menggabungkan offline event dengan elemen digital dan interaksi sosial media.",
        },
      ],
    };
  },
};
</script>