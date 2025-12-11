<template>
  <nav
    :class="[
      // di home: transparan di atas, putih saat discroll
      // di halaman lain: selalu putih
      isHome
        ? isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        : 'bg-white/95 backdrop-blur-md shadow-lg',
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300"
         :class="isScrolled ? 'h-16' : 'h-20'">
      <!-- LOGO -->
      <router-link
        to="/"
        class="group relative text-2xl font-bold transition-all duration-300 flex items-center gap-3"
        :class="[
          navIsLight ? 'text-slate-900' : 'text-white',
          isScrolled ? 'scale-90' : 'scale-100'
        ]"
      >
        <!-- Logo Icon/Badge -->
        <div class="relative">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          <div class="absolute inset-0 rounded-xl bg-sky-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        
        <span class="relative">
          Eventify
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
        </span>
      </router-link>

      <!-- MENU -->
      <div
        :class="[
          'hidden md:flex items-center gap-2',
          navIsLight ? 'text-slate-700' : 'text-white',
        ]"
      >
        <router-link
          to="/"
          class="relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group"
          :class="$route.path === '/' 
            ? 'text-sky-600 bg-sky-50' 
            : 'hover:bg-white/10'"
        >
          <span class="relative z-10">Home</span>
          <span v-if="$route.path === '/'" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-600"></span>
        </router-link>

        <router-link
          to="/about"
          class="relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group"
          :class="$route.path === '/about' 
            ? 'text-sky-600 bg-sky-50' 
            : 'hover:bg-white/10'"
        >
          <span class="relative z-10">About</span>
          <span v-if="$route.path === '/about'" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-600"></span>
        </router-link>

        <router-link
          to="/services"
          class="relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group"
          :class="$route.path === '/services' 
            ? 'text-sky-600 bg-sky-50' 
            : 'hover:bg-white/10'"
        >
          <span class="relative z-10">Services</span>
          <span v-if="$route.path === '/services'" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-600"></span>
        </router-link>

        <router-link
          to="/projects"
          class="relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group"
          :class="$route.path === '/projects' 
            ? 'text-sky-600 bg-sky-50' 
            : 'hover:bg-white/10'"
        >
          <span class="relative z-10">Portfolio</span>
          <span v-if="$route.path === '/projects'" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-600"></span>
        </router-link>

        <router-link
          to="/contact"
          class="relative ml-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group overflow-hidden"
          :class="$route.path === '/contact' 
            ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/30' 
            : navIsLight 
              ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:shadow-lg hover:shadow-sky-500/30' 
              : 'border-2 border-white/30 hover:bg-white/20'"
        >
          <span class="relative z-10 flex items-center gap-2">
            <span>Contact</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </router-link>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button 
        class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-300 group" 
        @click="open = !open"
        :aria-label="open ? 'Close menu' : 'Open menu'"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span 
            :class="[
              'block h-0.5 w-full rounded-full transition-all duration-300',
              navIsLight ? 'bg-slate-700' : 'bg-white',
              open ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
            ]"
          ></span>
          <span 
            :class="[
              'block h-0.5 w-full rounded-full transition-all duration-300',
              navIsLight ? 'bg-slate-700' : 'bg-white',
              open ? 'opacity-0' : 'opacity-100'
            ]"
          ></span>
          <span 
            :class="[
              'block h-0.5 w-full rounded-full transition-all duration-300',
              navIsLight ? 'bg-slate-700' : 'bg-white',
              open ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
            ]"
          ></span>
        </div>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="open" class="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-2">
          <router-link
            to="/"
            @click="open = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 group"
            :class="$route.path === '/' ? 'bg-sky-50 text-sky-600 font-semibold' : ''"
          >
            <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Home</span>
          </router-link>

          <router-link
            to="/about"
            @click="open = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 group"
            :class="$route.path === '/about' ? 'bg-sky-50 text-sky-600 font-semibold' : ''"
          >
            <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>About</span>
          </router-link>

          <router-link
            to="/services"
            @click="open = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 group"
            :class="$route.path === '/services' ? 'bg-sky-50 text-sky-600 font-semibold' : ''"
          >
            <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Services</span>
          </router-link>

          <router-link
            to="/projects"
            @click="open = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 group"
            :class="$route.path === '/projects' ? 'bg-sky-50 text-sky-600 font-semibold' : ''"
          >
            <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span>Portfolio</span>
          </router-link>

          <router-link
            to="/contact"
            @click="open = false"
            class="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
              <span>Contact</span>
            </div>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return { open: false, isScrolled: false };
  },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
    navIsLight() {
      // navbar dengan teks gelap saat background putih
      return !this.isHome || this.isScrolled;
    },
  },
  mounted() {
    this.onScroll(); // set initial state
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  watch: {
    '$route'() {
      // Close mobile menu on route change
      this.open = false;
    }
  }
};
</script>