<template>
  <section class="py-24 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
      <div class="absolute top-20 -right-32 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute -bottom-20 -left-32 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 text-center mb-16 relative">
      <div data-aos="fade-up" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
        <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span class="text-xs uppercase tracking-wider text-slate-700 font-semibold">Tim Kami</span>
      </div>

      <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
        Our Team
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
      >
        Tim profesional kami siap mewujudkan acara Anda — dari perencanaan
        sampai eksekusi di lapangan.
      </p>
    </div>

    <!-- Full-bleed carousel -->
    <div class="relative">
      <div
        ref="viewport"
        class="overflow-hidden"
        @mouseenter="pause"
        @mouseleave="play"
      >
        <div
          ref="track"
          class="flex transition-transform duration-700 ease-out"
          :style="{ transform: `translateX(-${translateX}px)` }"
        >
          <div
            v-for="(member, idx) in team"
            :key="member.id"
            :data-aos-delay="idx * 60"
            class="flex-shrink-0 px-4"
            :style="{ width: itemWidth + 'px' }"
          >
            <div
              class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden mx-auto cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-slate-100 hover:border-sky-300 relative"
              :style="{ maxWidth: itemWidth + 'px' }"
              @click="onMemberClick(member)"
            >
              <!-- Image container with overlay -->
              <div class="relative w-full overflow-hidden" :style="{ height: imageHeight + 'px' }">
                <!-- Gradient overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                <img
                  :src="member.photo"
                  :alt="member.name"
                  class="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  @error="onImgError"
                />

                 <!-- Social media icons - always visible on mobile, hover on desktop -->
                <div class="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-x-0 md:translate-x-4 md:group-hover:translate-x-0 transition-all duration-500">
                  <!-- Instagram -->
                  <a
                    v-if="member.instagram && member.instagram !== '#'"
                    :href="member.instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group/ig"
                    @click.stop
                  >
                    <svg class="w-5 h-5 text-slate-700 group-hover/ig:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  <!-- TikTok -->
                  <a
                    v-if="member.tiktok && member.tiktok !== '#'"
                    :href="member.tiktok"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-black flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group/tt"
                    @click.stop
                  >
                    <svg class="w-5 h-5 text-slate-700 group-hover/tt:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>

                <!-- Role badge at bottom - visible on hover -->
                <div class="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                    <span class="text-white text-xs font-semibold">{{ member.role }}</span>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 text-center relative">
                <h3 class="font-bold text-xl text-slate-900 mb-1 group-hover:text-sky-600 transition-colors duration-300">
                  {{ member.name }}
                </h3>
                <p class="text-sm text-slate-500 mb-3">{{ member.role }}</p>
                
                <!-- Bio text if available -->
                <p v-if="member.bio" class="text-xs text-slate-600 leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {{ member.bio }}
                </p>

                <!-- View profile indicator -->
                <div class="flex items-center justify-center gap-2 mt-3 text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-xs font-semibold">Lihat Profil</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </div>

              <!-- Bottom accent line -->
              <div class="h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prev"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-slate-700 rounded-full w-12 h-12 flex items-center justify-center z-30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-200"
        aria-label="Previous"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        @click="next"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm text-slate-700 rounded-full w-12 h-12 flex items-center justify-center z-30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-200"
        aria-label="Next"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Page indicators -->
      <div class="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-2 z-30">
        <button
          v-for="i in pages"
          :key="'page-' + i"
          @click="goToPage(i - 1)"
          :class="[
            'transition-all duration-300',
            pageIndex === i - 1 
              ? 'w-8 h-3 rounded-full bg-gradient-to-r from-sky-500 to-amber-500' 
              : 'w-3 h-3 rounded-full bg-white/60 hover:bg-white/80',
          ]"
          aria-label="Go to page"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import API from "@/services/api";

// Team data dengan social media links
const team = ref([]);
const loading = ref(true);

// Fetch team dari API
const fetchTeam = async () => {
  try {
    const response = await API.get("/admin/team");
    team.value = response.data.map(member => ({
      id: member.id,
      name: member.name,
      role: member.position,
      photo: member.photo?.startsWith('http') 
        ? member.photo 
        : `http://localhost:5000${member.photo}`,
      bio: member.bio || "",
      instagram: member.instagram || "#",
      tiktok: member.tiktok || "#",
    }));
    loading.value = false;
  } catch (err) {
    console.error("Error fetching team:", err);
    // Fallback ke data default jika API gagal
    team.value = [
      {
        id: 1,
        name: "Deyandera",
        role: "Founder & Creative Director",
        photo: "/images/deyan.jpg",
        bio: "Memimpin konsep kreatif dan experience design untuk event besar.",
        instagram: "https://instagram.com/deyanderaa_",
        tiktok: "https://tiktok.com/@goioioo_",
      },
      {
        id: 2,
        name: "Angga Reksa",
        role: "Head of Production",
        photo: "/images/angga.jpg",
        bio: "Bertanggung jawab untuk semua aspek technical production dan AV.",
        instagram: "https://instagram.com/anggareksa10",
        tiktok: "https://tiktok.com/@dssrtgang",
      },
    ];
    loading.value = false;
  }
};

function onMemberClick(member) {
  // untuk saat ini cukup klik-able + efek hover;
  // nanti bisa dikembangkan jadi modal detail atau link ke halaman profil
  console.log("Clicked member", member);
}

// Inline SVG placeholder
const placeholder =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23979aa5" font-family="Arial,Helvetica,sans-serif" font-size="24">No Image</text></svg>';

function onImgError(e) {
  e.target.onerror = null;
  e.target.src = placeholder;
}

// Slider state
const current = ref(0);
const viewport = ref(null);
const track = ref(null);
const viewportWidth = ref(0);
const itemWidth = ref(0);
const itemsPerView = ref(4);
const imageHeight = ref(360);

function updateLayout() {
  const w = window.innerWidth;
  if (w < 640) itemsPerView.value = 1;
  else if (w < 768) itemsPerView.value = 2;
  else if (w < 1024) itemsPerView.value = 3;
  else itemsPerView.value = 4;

  viewportWidth.value = viewport.value ? viewport.value.clientWidth : 0;
  itemWidth.value = viewportWidth.value
    ? Math.floor(viewportWidth.value / itemsPerView.value)
    : 0;

  if (itemsPerView.value >= 4) imageHeight.value = 400;
  else if (itemsPerView.value === 3) imageHeight.value = 380;
  else if (itemsPerView.value === 2) imageHeight.value = 360;
  else imageHeight.value = 320;
}

const translateX = computed(() => {
  return Math.round(current.value * itemWidth.value);
});

const pages = computed(() =>
  Math.max(team.value.length - itemsPerView.value + 1, 1)
);

const pageIndex = computed(() => {
  return Math.min(Math.max(0, current.value), pages.value - 1);
});

let timer = null;
const AUTOPLAY = 4000;

function play() {
  stop();
  timer = setInterval(() => {
    if (team.value.length === 0) return;
    current.value = (current.value + 1) % team.value.length;
    if (current.value > team.value.length - itemsPerView.value) {
      current.value = 0;
    }
  }, AUTOPLAY);
}

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function pause() {
  stop();
}

function prev() {
  if (team.value.length === 0) return;
  let idx = current.value - 1;
  if (idx < 0) {
    idx = Math.max(0, team.value.length - itemsPerView.value);
  }
  current.value = idx;
  play();
}

function next() {
  if (team.value.length === 0) return;
  let idx = current.value + 1;
  if (idx > team.value.length - itemsPerView.value) {
    idx = 0;
  }
  current.value = idx;
  play();
}

function goToPage(p) {
  const idx = Math.min(Math.max(0, p), team.value.length - itemsPerView.value);
  current.value = idx;
  play();
}

function onResize() {
  updateLayout();
}

onMounted(() => {
  fetchTeam();
  updateLayout();
  window.addEventListener("resize", onResize);
  play();
});

onBeforeUnmount(() => {
  stop();
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
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
</style>