<template>
  <section class="py-24 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 relative">
      <!-- Header -->
      <div class="text-center mb-16">
        <div data-aos="fade-up"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-xs uppercase tracking-wider text-slate-700 font-semibold">Portfolio</span>
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100"
          class="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          Portfolio Acara
        </h2>

        <p data-aos="fade-up" data-aos-delay="200"
          class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Beberapa proyek terbaru yang telah kami kerjakan dengan penuh dedikasi
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(p, i) in projects" :key="p.id" :data-aos="'zoom-in'" :data-aos-delay="i * 100"
          class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-slate-900 cursor-pointer border border-slate-700 hover:border-sky-500">
          <div class="relative w-full h-56 md:h-64 lg:h-80 overflow-hidden">
            <!-- Image with zoom effect -->
            <img :src="p.image" :alt="p.title"
              class="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />

            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500">
            </div>

            <!-- Floating view button on hover -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
              <div
                class="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="text-white font-semibold text-sm">Lihat Detail</span>
              </div>
            </div>

            <!-- Caption overlay at bottom -->
            <div
              class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white transform transition-all duration-500 group-hover:translate-y-0">
              <h3 class="font-bold text-xl mb-2 group-hover:text-sky-400 transition-colors duration-300">
                {{ p.title }}
              </h3>

              <div class="flex items-center gap-2 text-sm text-white/90 mb-3">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ p.address }}</span>
              </div>

              <div class="flex items-center justify-between gap-3 mt-3">
                <span
                  class="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wide">
                  {{ p.eventType }}
                </span>
                <span
                  class="inline-flex items-center px-3 py-1.5 rounded-lg bg-sky-500/80 backdrop-blur-sm text-white text-xs font-medium">
                  {{ p.division }}
                </span>
              </div>
            </div>

            <!-- Top corner accent -->
            <div
              class="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-amber-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500">
            </div>
          </div>

          <!-- Bottom gradient accent line -->
          <div
            class="h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center" data-aos="fade-up" :data-aos-delay="projects.length * 100">
        <router-link to="/projects"
          class="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-base">
          <span>Lihat Semua Portfolio</span>
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>

        <!-- Stats row below button -->
        <!-- <div class="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto" data-aos="fade-up"
          :data-aos-delay="projects.length * 100 + 200">
          <div class="text-center">
            <div
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div class="text-sm text-slate-600">Event Selesai</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div class="text-sm text-slate-600">Klien Puas</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div class="text-sm text-slate-600">Tahun Pengalaman</div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import API from "@/services/api";

const projects = ref([]);
const loading = ref(true);

// Fetch projects dari API
const fetchProjects = async () => {
  try {
    const response = await API.get("/admin/projects");
    // Ambil 6 project terbaru untuk ditampilkan di homepage
    projects.value = response.data
      .slice(0, 6)
      .map(project => ({
        id: project.id,
        title: project.title,
        image: project.image?.startsWith('http')
          ? project.image
          : `http://localhost:5000${project.image}`,
        address: project.category || "Event Location",
        eventType: project.category || "Event",
        division: "Production & AV",
      }));
    loading.value = false;
  } catch (err) {
    console.error("Error fetching projects:", err);
    // Fallback ke data default jika API gagal
    projects.value = [
      {
        id: 1,
        title: "Gala Dinner 2025",
        image: "/images/1.jpg",
        address: "Hotel Merdeka, Jakarta",
        eventType: "Gala Dinner",
        division: "Production & AV",
      },
      {
        id: 2,
        title: "Product Launch - XPhone",
        image: "/images/2.jpg",
        address: "Plaza Senayan, Jakarta",
        eventType: "Product Launch",
        division: "Stage & Lighting",
      },
      {
        id: 3,
        title: "Wedding: Aris & Maya",
        image: "/images/3.jpg",
        address: "Villa Anggrek, Bandung",
        eventType: "Wedding",
        division: "Venue & Styling",
      },
    ];
    loading.value = false;
  }
};

onMounted(() => {
  fetchProjects();
});
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(20px, -20px) scale(1.05);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-30px, 20px) scale(1.1);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(15px, 15px) scale(0.95);
  }
}

.animate-float {
  animation: float 8s infinite ease-in-out;
}

.animate-float-delayed {
  animation: float-delayed 10s infinite ease-in-out;
}

.animate-float-slow {
  animation: float-slow 12s infinite ease-in-out;
}
</style>