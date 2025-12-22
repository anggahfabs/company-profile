<template>
  <!-- Full-bleed footer -->
  <footer class="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#0A1D56] text-white overflow-hidden">

    <div class="max-w-7xl mx-auto px-4 relative">
      <!-- GRID UTAMA -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12 items-start mb-8 pt-12">
        <!-- MAPS -->
        <div data-aos="fade-up" class="group">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3
              class="font-bold text-lg tracking-wide uppercase bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Our Location
            </h3>
          </div>

          <p class="text-sm text-white/80 mb-4 leading-relaxed">
            {{ contactInfo.address }}
          </p>

          <div
            class="w-full h-44 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10 hover:ring-sky-400/50 transition-all duration-300 transform hover:scale-[1.02] group-hover:shadow-sky-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.089948463968!2d112.730836!3d-7.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOffice!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%" height="100%" style="border: 0" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <!-- DIVISI / SERVICES -->
        <div data-aos="fade-up" data-aos-delay="100" class="group">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3
              class="font-bold text-lg tracking-wide uppercase bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Our Services
            </h3>
          </div>

          <ul class="space-y-3 text-sm text-white/80">
            <li v-for="service in services" :key="service.id"
              class="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 cursor-default group/item">
              <svg class="w-4 h-4 text-sky-400 opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>{{ service.title }}</span>
            </li>
          </ul>
        </div>

        <!-- CONTACT + WORKING HOURS -->
        <div data-aos="fade-up" data-aos-delay="150" class="group">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3
              class="font-bold text-lg tracking-wide uppercase bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Contact
            </h3>
          </div>

          <div class="space-y-3 text-sm text-white/80 mb-6">
            <a :href="`mailto:${contactInfo.email}`"
              class="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 group/link">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="group-hover/link:underline">{{ contactInfo.email }}</span>
            </a>
            <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
              class="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 group/link">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="group-hover/link:underline">{{ contactInfo.phone }}</span>
            </a>
          </div>

          <div
            class="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:border-sky-400/30 transition-colors duration-300">
            <div class="flex items-center gap-2 mb-3">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="font-semibold text-sm tracking-wide text-white/90">Working Hours</p>
            </div>
            <div class="space-y-2 text-xs text-white/70">
              <p class="flex justify-between">
                <span>Monday – Friday</span>
                <span class="font-semibold text-white/90">{{ contactInfo.weekday_hours }}</span>
              </p>
              <p class="flex justify-between">
                <span>Saturday</span>
                <span class="font-semibold text-white/90">{{ contactInfo.saturday_hours }}</span>
              </p>
              <p class="flex justify-between">
                <span>Sunday / Holidays</span>
                <span class="font-semibold text-sky-400">{{ contactInfo.sunday_hours }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- SOSMED + LEGAL -->
        <div data-aos="fade-up" data-aos-delay="200" class="group">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3
              class="font-bold text-lg tracking-wide uppercase bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Social Media
            </h3>
          </div>

          <div class="flex items-center gap-3 mb-6 flex-wrap">
            <a v-for="social in socialMedia" :key="social.id" :href="social.url" target="_blank"
              rel="noopener noreferrer" :class="getSocialClass(social.platform)" :aria-label="social.platform">
              <component :is="getSocialIcon(social.platform)" />
            </a>
          </div>

          <div class="flex flex-wrap gap-3 text-xs text-white/70">
            <a href="#"
              class="hover:text-sky-400 hover:underline transition-colors duration-300 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Terms</span>
            </a>
            <span class="text-white/30">•</span>
            <a href="#"
              class="hover:text-sky-400 hover:underline transition-colors duration-300 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Privacy</span>
            </a>
            <span class="text-white/30">•</span>
            <a href="#"
              class="hover:text-sky-400 hover:underline transition-colors duration-300 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT BAR -->
      <div class="border-t border-white/10 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-xs text-white/60 text-center md:text-left" data-aos="fade-up">
          &copy; 2025 Eventify. All rights reserved. Made with
          <span class="inline-block text-red-400 animate-pulse">♥</span>
          in Jakarta
        </div>

        <div class="flex items-center gap-4" data-aos="fade-up" data-aos-delay="100">
          <div class="flex items-center gap-2 text-xs text-white/60">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, h } from "vue";
import API from "@/services/api";

export default {
  setup() {
    const services = ref([]);
    const contactInfo = ref({
      address: "Jl. Contoh No.1, Jakarta, Indonesia",
      phone: "+62 21-1234-5678",
      email: "info@eventify.co",
      weekday_hours: "09.00 – 18.00",
      saturday_hours: "10.00 – 16.00",
      sunday_hours: "By Appointment"
    });
    const socialMedia = ref([]);

    // Fetch services
    const fetchServices = async () => {
      try {
        const response = await API.get("/admin/services");
        services.value = response.data.slice(0, 6); // Max 6 services di footer
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };

    // Fetch contact info
    const fetchContactInfo = async () => {
      try {
        const response = await API.get("/admin/contact");
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          contactInfo.value = {
            address: data.address || contactInfo.value.address,
            phone: data.phone || contactInfo.value.phone,
            email: data.email || contactInfo.value.email,
            weekday_hours: data.weekday_hours || contactInfo.value.weekday_hours,
            saturday_hours: data.saturday_hours || contactInfo.value.saturday_hours,
            sunday_hours: data.sunday_hours || contactInfo.value.sunday_hours
          };
        }
      } catch (err) {
        console.error("Error fetching contact info:", err);
      }
    };

    // Fetch social media
    const fetchSocialMedia = async () => {
      try {
        const response = await API.get("/admin/social-media");
        socialMedia.value = response.data;
      } catch (err) {
        console.error("Error fetching social media:", err);
      }
    };

    // Get social media icon component
    const getSocialIcon = (platform) => {
      const platformLower = platform.toLowerCase();

      if (platformLower.includes('instagram')) {
        return () => h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: "w-5 h-5 text-white transition-transform duration-300 group-hover/social:scale-110",
          fill: "none",
          stroke: "currentColor",
          'stroke-width': "1.6"
        }, [
          h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "5", ry: "5" }),
          h('circle', { cx: "12", cy: "12", r: "4" }),
          h('circle', { cx: "17", cy: "7", r: "1.1", fill: "currentColor" })
        ]);
      } else if (platformLower.includes('facebook')) {
        return () => h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: "w-5 h-5 text-white transition-transform duration-300 group-hover/social:scale-110",
          fill: "currentColor"
        }, [
          h('path', { d: "M13.5 21v-7h2.25a.75.75 0 0 0 .74-.63l.38-2.5a.75.75 0 0 0-.74-.87H13.5V8.25c0-.72.58-1.31 1.3-1.31h1.5a.75.75 0 0 0 .75-.75V4.1a.75.75 0 0 0-.64-.74A15.6 15.6 0 0 0 14.9 3C12.67 3 11 4.58 11 7.06V10H9a.75.75 0 0 0-.75.75v2.5c0 .41.34.75.75.75h2v7h2.5Z" })
        ]);
      } else if (platformLower.includes('youtube')) {
        return () => h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: "w-5 h-5 text-white transition-transform duration-300 group-hover/social:scale-110",
          fill: "currentColor"
        }, [
          h('path', { d: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.1 5 12 5 12 5s-6.1 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.9 19 12 19 12 19s6.1 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.58.4-3.19.4-4.8 0-1.61-.13-3.22-.4-4.8ZM10.5 15.25v-6.5L15.5 12l-5 3.25Z" })
        ]);
      } else if (platformLower.includes('linkedin')) {
        return () => h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: "w-5 h-5 text-white transition-transform duration-300 group-hover/social:scale-110",
          fill: "currentColor"
        }, [
          h('path', { d: "M6.06 6.5A2.06 2.06 0 1 1 6.05 2.4 2.06 2.06 0 0 1 6.06 6.5ZM4.25 8.25h3.6V21h-3.6V8.25Zm6.02 0h3.45v1.7h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.53V21h-3.6v-6.14c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.6-2.37 3.25V21h-3.6V8.25Z" })
        ]);
      } else {
        // Default icon
        return () => h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: "w-5 h-5 text-white transition-transform duration-300 group-hover/social:scale-110",
          fill: "none",
          stroke: "currentColor",
          'stroke-width': "2"
        }, [
          h('path', { 'stroke-linecap': "round", 'stroke-linejoin': "round", d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" })
        ]);
      }
    };

    // Get social media class
    const getSocialClass = (platform) => {
      const platformLower = platform.toLowerCase();
      const baseClass = "group/social w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg";

      if (platformLower.includes('instagram')) {
        return `${baseClass} hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:shadow-pink-500/50`;
      } else if (platformLower.includes('facebook')) {
        return `${baseClass} hover:bg-blue-600 hover:shadow-blue-500/50`;
      } else if (platformLower.includes('youtube')) {
        return `${baseClass} hover:bg-red-600 hover:shadow-red-500/50`;
      } else if (platformLower.includes('linkedin')) {
        return `${baseClass} hover:bg-blue-700 hover:shadow-blue-700/50`;
      } else {
        return `${baseClass} hover:bg-sky-600 hover:shadow-sky-500/50`;
      }
    };

    onMounted(() => {
      fetchServices();
      fetchContactInfo();
      fetchSocialMedia();
    });

    return {
      services,
      contactInfo,
      socialMedia,
      getSocialIcon,
      getSocialClass
    };
  }
};
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

.animate-float {
  animation: float 8s infinite ease-in-out;
}

.animate-float-delayed {
  animation: float-delayed 10s infinite ease-in-out;
}
</style>
