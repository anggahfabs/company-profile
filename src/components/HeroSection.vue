<template>
  <section
    class="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-screen overflow-hidden flex items-center justify-center"
  >
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
      :style="{
        backgroundImage: `url(${slide.image})`,
        opacity: currentIndex === index ? 1 : 0,
        transform: currentIndex === index ? 'scale(1)' : 'scale(1.1)',
      }"
    >
      <!-- Enhanced gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      <!-- Animated particles overlay -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float-delayed"></div>
        <div class="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-float-slow"></div>
        <div class="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float"></div>
      </div>

      <div
        class="relative w-full h-full flex flex-col items-center justify-center text-white px-6 text-center z-10"
      >
        <!-- Animated badge -->
        <div
          class="transition-all duration-700 delay-100 mb-6"
          :class="{
            'opacity-100 translate-y-0': currentIndex === index && showContent,
            'opacity-0 -translate-y-4': currentIndex !== index || !showContent,
          }"
        >
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <div class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
            <span class="text-xs uppercase tracking-[0.2em] font-semibold">Event Excellence</span>
          </div>
        </div>

        <!-- Title with enhanced animation -->
        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-200 max-w-5xl leading-tight"
          :class="{
            'opacity-100 translate-y-0 scale-100': currentIndex === index && showContent,
            'opacity-0 translate-y-8 scale-95': currentIndex !== index || !showContent,
          }"
        >
          <span class="inline-block bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent animate-shimmer">
            {{ slide.title }}
          </span>
        </h1>

        <!-- Subtitle with staggered animation -->
        <p
          class="max-w-3xl text-xl md:text-2xl transition-all duration-700 delay-300 text-white/90 leading-relaxed"
          :class="{
            'opacity-100 translate-y-0': currentIndex === index && showContent,
            'opacity-0 translate-y-8': currentIndex !== index || !showContent,
          }"
        >
          {{ slide.subtitle }}
        </p>

        <!-- CTA Buttons -->
<div
  class="flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 delay-400"
  :class="{
    'opacity-100 translate-y-0': currentIndex === index && showContent,
    'opacity-0 translate-y-8': currentIndex !== index || !showContent,
  }"
>

  <!-- Lihat Portfolio -->
  <router-link
    to="/projects"
    class="group px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    <span>Lihat Portfolio</span>
    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
  </router-link>

  <!-- Hubungi Kami -->
  <router-link
    to="/contact"
    class="group px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
    <span>Hubungi Kami</span>
  </router-link>

</div>


        <!-- Scroll indicator -->
        <div
          class="absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500"
          :class="{
            'opacity-100 translate-y-0': currentIndex === index && showContent,
            'opacity-0 translate-y-4': currentIndex !== index || !showContent,
          }"
        >
          <div class="flex flex-col items-center gap-2 text-white/70 animate-bounce-slow">
            <span class="text-xs uppercase tracking-widest">Scroll Down</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

     <!-- Enhanced Prev / Next buttons - Hidden on mobile -->
    <button
      @click="prevSlide"
      class="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full w-14 h-14 items-center justify-center z-20 transition-all duration-300 hover:scale-110 group shadow-xl"
      aria-label="Previous slide"
    >
      <svg class="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    
    <button
      @click="nextSlide"
      class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full w-14 h-14 items-center justify-center z-20 transition-all duration-300 hover:scale-110 group shadow-xl"
      aria-label="Next slide"
    >
      <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>

    <!-- Enhanced Navigation dots with progress -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="group relative transition-all duration-300"
        :class="currentIndex === index ? 'w-12' : 'w-3'"
        @click="goTo(index)"
        aria-label="`Go to slide ${index + 1}`"
      >
        <!-- Background dot -->
        <div 
          class="h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index 
            ? 'bg-gradient-to-r from-sky-400 to-sky-600 shadow-lg shadow-sky-500/50' 
            : 'bg-white/30 hover:bg-white/50 group-hover:scale-110'"
        ></div>
        
        <!-- Progress bar for active slide -->
        <div 
          v-if="currentIndex === index"
          class="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-white to-sky-200"
          :style="{ width: progress + '%' }"
        ></div>
      </button>
    </div>

    <!-- Slide counter -->
    <div class="absolute top-8 right-8 z-20">
      <div class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm">
        <span class="text-lg">{{ currentIndex + 1 }}</span>
        <span class="text-white/60 mx-1">/</span>
        <span class="text-white/80">{{ slides.length }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import API from "@/services/api";

const slides = ref([]);
const currentIndex = ref(0);
const showContent = ref(true);
const progress = ref(0);
const loading = ref(true);

const intervalId = ref(null);
const progressIntervalId = ref(null);

// Fetch slides dari API
const fetchSlides = async () => {
  try {
    const response = await API.get("/admin/slides");
    // Filter hanya slides yang aktif
    slides.value = response.data
      .filter(slide => slide.is_active)
      .sort((a, b) => a.order_position - b.order_position)
      .map(slide => ({
        ...slide,
        // Tambahkan base URL untuk gambar
        image: slide.image?.startsWith('http') 
          ? slide.image 
          : `http://localhost:5000${slide.image}`
      }));
    
    loading.value = false;
    
    // Start slideshow setelah data loaded
    if (slides.value.length > 0) {
      startInterval();
    }
  } catch (err) {
    console.error("Error fetching slides:", err);
    // Fallback ke data default jika API gagal
    slides.value = [
      {
        id: 1,
        title: "Kreasi Acara yang Berkesan",
        subtitle: "Event planning & production untuk konser, korporat, dan private event.",
        image: "/images/event-hero1.jpg",
      }
    ];
    loading.value = false;
  }
};

const startProgress = () => {
  progress.value = 0;
  if (progressIntervalId.value) clearInterval(progressIntervalId.value);
  
  progressIntervalId.value = setInterval(() => {
    progress.value += 2;
    if (progress.value >= 100) {
      clearInterval(progressIntervalId.value);
    }
  }, 100);
};

const startInterval = () => {
  if (intervalId.value) clearInterval(intervalId.value);
  startProgress();
  intervalId.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
  if (progressIntervalId.value) {
    clearInterval(progressIntervalId.value);
    progressIntervalId.value = null;
  }
};

const nextSlide = () => {
  showContent.value = false;

  setTimeout(() => {
    currentIndex.value =
      currentIndex.value === slides.value.length - 1 ? 0 : currentIndex.value + 1;
    showContent.value = true;
    startProgress();
  }, 300);
};

const prevSlide = () => {
  showContent.value = false;
  setTimeout(() => {
    currentIndex.value =
      currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1;
    showContent.value = true;
  }, 300);
  startInterval();
};

onMounted(() => {
  fetchSlides();
});

onBeforeUnmount(() => {
  stopInterval();
});

const goTo = (index) => {
  showContent.value = false;
  setTimeout(() => {
    currentIndex.value = index;
    showContent.value = true;
  }, 300);
  startInterval();
};
</script>

<style scoped>
/* Smooth image scaling and Ken Burns effect */
.bg-cover {
  transition: transform 6s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-30px) translateX(-15px);
    opacity: 0.7;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) translateX(20px);
    opacity: 0.5;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s infinite ease-in-out;
}

.animate-float-delayed {
  animation: float-delayed 5s infinite ease-in-out;
}

.animate-float-slow {
  animation: float-slow 6s infinite ease-in-out;
}

.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite ease-in-out;
}
</style>