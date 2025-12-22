<template>
  <section class="py-24 left-1/2 right-1/2 w-screen -translate-x-1/2 relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 relative">
      <!-- Section Header -->
      <div v-if="withHeader" class="text-center mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
          <svg class="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clip-rule="evenodd" />
          </svg>
          <span class="text-xs uppercase tracking-wider text-slate-700 font-semibold">Services</span>
        </div>

        <h2
          class="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p class="text-base text-slate-600 max-w-2xl mx-auto">
          Complete solutions for every event need, from planning to execution
        </p>
      </div>

      <!-- GRID LAYANAN -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <BaseCard v-for="(service, index) in services" :key="service.id" :title="service.title"
          :description="service.short" :badge="service.badge || ''"
          :wrapper-class="'group cursor-pointer hover:-translate-y-3 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition-all duration-500 ease-out hover:scale-105 bg-white/80 backdrop-blur-sm border-slate-200 hover:border-sky-300'"
          :data-aos="'fade-up'" :data-aos-delay="index * 100" :data-aos-duration="'800'" @click="handleClick(service)">
          <template #default>
            <div class="mt-4 flex items-center justify-between">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100">
                </div>
                <span
                  class="relative text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-500 inline-block group-hover:rotate-12">
                  {{ service.icon }}
                </span>
              </div>

              <div class="flex items-center gap-2 text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                <span class="text-[11px] font-semibold tracking-wide">
                  View details
                </span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <!-- Hover indicator line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl">
            </div>
          </template>
        </BaseCard>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
        <div
          class="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl border border-slate-700">
          <div class="flex-1 text-left">
            <h3 class="text-2xl font-bold text-white mb-2">
              Didn't find what you're looking for?
            </h3>
            <p class="text-slate-300 text-sm">
              Contact us for custom solutions tailored to your event needs
            </p>
          </div>
          <router-link to="/contact"
            class="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <span>Free Consultation</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <!-- MODAL DETAIL LAYANAN (hanya aktif di halaman /services) -->
    <BaseModal v-if="activeService" v-model="showModal" :title="activeService.title" :subtitle="activeService.tagline">
      <div class="space-y-4">
        <div class="flex items-start gap-4 p-4 bg-sky-50 rounded-xl border border-sky-100">
          <span class="text-4xl flex-shrink-0">{{ activeService.icon }}</span>
          <div>
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-2">
              {{ activeService.badge }}
            </div>
            <p class="text-sm text-slate-700 leading-relaxed">
              {{ activeService.long }}
            </p>
          </div>
        </div>

        <div v-if="activeService.points?.length" class="bg-white rounded-xl p-5 border border-slate-200">
          <h4 class="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What We Provide
          </h4>
          <ul class="space-y-3">
            <li v-for="(point, idx) in activeService.points" :key="point"
              class="flex items-start gap-3 text-sm text-slate-700">
              <span
                class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {{ idx + 1 }}
              </span>
              <span class="flex-1">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>

      <template #footer>
        <router-link to="/contact"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span>Consult with Team</span>
        </router-link>
      </template>
    </BaseModal>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import API from "@/services/api";
import BaseCard from "./BaseCard.vue";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  withHeader: {
    type: Boolean,
    default: true
  }
});

const route = useRoute();
const router = useRouter();

const services = ref([]);
const loading = ref(true);
const showModal = ref(false);
const activeService = ref(null);

// Fetch services dari API
const fetchServices = async () => {
  try {
    const response = await API.get("/admin/services");
    services.value = response.data.map(service => ({
      id: service.id,
      icon: service.icon || "🎯",
      title: service.title,
      short: service.description || service.desc || "",
      tagline: service.description || "",
      badge: "Service",
      long: service.description || "",
      points: []
    }));
    loading.value = false;
  } catch (err) {
    console.error("Error fetching services:", err);
    // Fallback ke data default jika API gagal
    services.value = [
      {
        id: "event-planning",
        icon: "🎉",
        title: "Event Planning",
        short: "Concept, timeline, and event management from start to finish.",
        tagline: "From brief to final rundown, everything is structured neatly.",
        badge: "Planning",
        long: "We help you determine event goals, creative concepts, budget, down to detailed rundowns.",
        points: [
          "Event concept and narrative creation",
          "Timeline & master rundown creation",
          "Coordination with vendors and internal team",
        ],
      },
      {
        id: "production-av",
        icon: "🎤",
        title: "Production & AV",
        short: "Professional sound, lighting, and staging for all event scales.",
        tagline: "Stable and safe technical production throughout the event.",
        badge: "Production",
        long: "We provide and manage technical needs such as sound systems, lighting, and LED screens.",
        points: [
          "Sound system & mixing",
          "Lighting design",
          "LED screen dan multimedia",
        ],
      },
    ];
    loading.value = false;
  }
};

function openModalById(id) {
  const found = services.value.find((s) => s.id === id);
  if (found) {
    activeService.value = found;
    showModal.value = true;
  }
}

function closeModal() {
  showModal.value = false;
  activeService.value = null;
}

function handleClick(service) {
  if (route.path === "/") {
    // dari home: arahkan ke halaman services tanpa langsung buka modal
    router.push({ path: "/services" });
  } else if (route.path === "/services") {
    // di halaman services: buka modal detail
    activeService.value = service;
    showModal.value = true;
  }
}

onMounted(() => {
  fetchServices();
});
</script>

<style scoped>
@keyframes blob {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>