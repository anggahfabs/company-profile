<template>
  <div>
    <Navbar />

    <section
      class="py-32 mt-18 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden"
    >
      <!-- Enhanced abstract background -->
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div
          class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-sky-100 to-transparent blur-3xl animate-float"
        ></div>
        <div
          class="absolute top-48 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 to-transparent blur-3xl animate-float-delayed"
        ></div>
        <div
          class="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-purple-100 to-transparent blur-2xl animate-float-slow"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative">
        <!-- Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <p class="text-xs uppercase tracking-[0.25em] text-sky-700 font-medium">
              Portfolio Page
            </p>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">
            Portfolio 
            <span class="bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">Acara</span>
          </h1>
          <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Proyek-proyek terbaru kami — klik untuk melihat detail.
          </p>
        </div>

        <!-- Filters -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative w-full sm:w-auto">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              v-model="q"
              type="search"
              placeholder="Cari proyek..."
              class="w-full sm:w-64 pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>

          <select
            v-model="filterType"
            class="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <option value="">Semua Tipe</option>
            <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
          </select>

          <!-- <select
            v-model="filterDivision"
            class="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <option value="">Semua Divisi</option>
            <option v-for="d in divisions" :key="d" :value="d">{{ d }}</option>
          </select> -->
        </div>

        <!-- GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filtered"
            :key="project.id"
            class="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-slate-100 hover:border-sky-300"
            @click="open(project)"
            data-aos="zoom-in"
            :data-aos-delay="index * 50"
          >
            <div class="h-64 w-full overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                :src="project.image"
                class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                :alt="project.title"
              />
              <div class="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div class="flex items-center gap-2 text-white">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span class="text-sm font-semibold">Lihat Detail</span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-bold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <div class="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{{ project.address }}</span>
              </div>
              
              <div class="flex items-center justify-between gap-3">
                <span class="inline-flex items-center px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wide">
                  {{ project.eventType }}
                </span>
                <span class="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  {{ project.division }}
                </span>
              </div>
            </div>

            <!-- Bottom gradient line -->
            <div class="h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        <!-- Empty state -->
        <div
          v-if="filtered.length === 0"
          class="text-center py-20"
          data-aos="fade-up"
        >
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-4">
            <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 mb-2">Tidak ada proyek ditemukan</h3>
          <p class="text-slate-600">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      </div>
    </section>

    <!-- MODAL / DETAIL -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="close"
      >
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="show"
            class="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl transform"
          >
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img :src="selected.image" class="w-full h-96 object-cover" />
              
              <button
                class="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
                @click="close"
              >
                <svg class="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div class="flex items-center gap-3 mb-3">
                  <span class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                    {{ selected.eventType }}
                  </span>
                  <span class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30">
                    {{ selected.division }}
                  </span>
                </div>
              </div>
            </div>

            <div class="p-8">
              <h2 class="text-3xl font-bold text-slate-900 mb-3">{{ selected.title }}</h2>
              
              <div class="flex items-center gap-2 text-slate-600 mb-6">
                <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-base">{{ selected.address }}</span>
              </div>

              <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 class="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Deskripsi Proyek
                </h3>
                <p class="text-slate-700 leading-relaxed">{{ selected.description }}</p>
              </div>

              <div class="mt-6 flex justify-end">
                <button
                  @click="close"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Tutup</span>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <Footer />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import API from "@/services/api";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Navbar, Footer },
  setup() {
    const projects = ref([]);
    const q = ref("");
    const filterType = ref("");
    const filterDivision = ref("");
    const show = ref(false);
    const selected = ref(null);

    // Fetch projects from API
    const fetchProjects = async () => {
      try {
        const response = await API.get("/admin/projects");
        // Map database fields to frontend format
        projects.value = response.data.map(project => ({
          id: project.id,
          title: project.title,
          image: `http://localhost:5000${project.image}`, // Add base URL
          address: project.address || "Location ID",
          eventType: project.category || "Event",
          division: "Production", // Default division since not in database
          description: project.description || "No description available"
        }));
      } catch (err) {
        console.error("Error fetching projects:", err);
        // Fallback to empty array if API fails
        projects.value = [];
      }
    };

    // Computed properties
    const types = computed(() => {
      const s = new Set(projects.value.map((p) => p.eventType));
      return Array.from(s);
    });

    const divisions = computed(() => {
      const s = new Set(projects.value.map((p) => p.division));
      return Array.from(s);
    });

    const filtered = computed(() => {
      return projects.value.filter((p) => {
        const matchesQ = q.value
          ? [p.title, p.address, p.eventType, p.division]
              .join(" ")
              .toLowerCase()
              .includes(q.value.toLowerCase())
          : true;
        const matchesType = filterType.value
          ? p.eventType === filterType.value
          : true;
        const matchesDivision = filterDivision.value
          ? p.division === filterDivision.value
          : true;
        return matchesQ && matchesType && matchesDivision;
      });
    });

    // Methods
    const open = (project) => {
      selected.value = project;
      show.value = true;
    };

    const close = () => {
      show.value = false;
      setTimeout(() => {
        selected.value = null;
      }, 200);
    };

    const goToProject = (id) => {
      const p = projects.value.find((x) => x.id === id);
      if (p) open(p);
    };

    // Fetch on mount
    onMounted(() => {
      fetchProjects();
    });

    return {
      projects,
      q,
      filterType,
      filterDivision,
      show,
      selected,
      types,
      divisions,
      filtered,
      open,
      close,
      goToProject
    };
  }
};
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -20px) scale(1.05);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 20px) scale(1.1);
  }
}

@keyframes float-slow {
  0%, 100% {
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