<template>
  <div>
    <Navbar />

    <!-- HERO / HEADER -->
    <section
      class="pt-32 pb-16 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden"
    >
      <!-- Enhanced abstract background -->
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div
          class="absolute -top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-sky-100 to-transparent blur-3xl animate-float"
        ></div>
        <div
          class="absolute top-48 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 to-transparent blur-3xl animate-float-delayed"
        ></div>
        <div
          class="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-purple-100 to-transparent blur-2xl animate-float-slow"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative">
        <div class="max-w-3xl" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            <p class="text-xs uppercase tracking-[0.25em] text-sky-700 font-medium">
              Contact
            </p>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
            Mari diskusikan acara yang ingin 
            <span class="bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">Anda wujudkan</span>
          </h1>
          <p class="text-base md:text-lg text-slate-600 leading-relaxed">
            Kirimkan detail singkat mengenai kebutuhan event Anda, dan tim kami
            akan menghubungi Anda dengan proposal dan estimasi terbaik.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTENT: INFO + FORM -->
    <section
      class="py-20 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-white overflow-hidden"
    >
      <!-- Subtle background shapes -->
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

      <div
        class="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-[1fr_1.2fr] relative"
      >
        <!-- INFO -->
        <div data-aos="fade-right" class="space-y-8">
          <!-- Contact Info Card -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900">Kantor & Kontak</h2>
            </div>
            
            <p class="text-base text-slate-600 mb-6 font-medium">
              {{ contactInfo.address }}
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3 group">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500 mb-1">Email</p>
                  <a :href="`mailto:${contactInfo.email}`" class="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500 mb-1">Phone</p>
                  <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`" class="text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors">
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500 mb-1">WhatsApp</p>
                  <a :href="`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" class="text-sm font-medium text-slate-900 hover:text-green-600 transition-colors">
                    {{ contactInfo.whatsapp }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Working Hours -->
          <div class="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900">Working Hours</h3>
            </div>
            
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 rounded-xl bg-white border border-amber-100">
                <span class="text-sm font-medium text-slate-700">Senin – Jumat</span>
                <span class="text-sm font-semibold text-slate-900">{{ contactInfo.weekday_hours }}</span>
              </div>
              <div class="flex justify-between items-center p-3 rounded-xl bg-white border border-amber-100">
                <span class="text-sm font-medium text-slate-700">Sabtu</span>
                <span class="text-sm font-semibold text-slate-900">{{ contactInfo.saturday_hours }}</span>
              </div>
              <div class="flex justify-between items-center p-3 rounded-xl bg-white border border-amber-100">
                <span class="text-sm font-medium text-slate-700">Minggu / Libur</span>
                <span class="text-sm font-semibold text-amber-600">{{ contactInfo.sunday_hours }}</span>
              </div>
            </div>
          </div>

          <!-- Event Types -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 class="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Jenis Acara
            </h3>
            <p class="text-sm text-slate-600 mb-4">
              Kami berpengalaman menangani berbagai jenis event:
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Corporate Event
              </span>
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Gala Dinner
              </span>
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Product Launch
              </span>
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Wedding
              </span>
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Concert
              </span>
              <span class="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors cursor-default">
                Activation
              </span>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          data-aos="fade-left"
          class="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 sticky top-24"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900">
                Kirim Pesan
              </h2>
              <p class="text-xs text-slate-500">
                Isi form berikut dan kami akan merespons dalam 1–2 hari kerja
              </p>
            </div>
          </div>

          <form class="space-y-5">
            <div class="grid gap-5 md:grid-cols-2">
              <div class="group">
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                  placeholder="Nama Anda"
                />
              </div>

              <div class="group">
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                  placeholder="email@company.com"
                />
              </div>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div class="group">
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  No. Telepon / WhatsApp
                </label>
                <input
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                  placeholder="+62 ..."
                />
              </div>

              <div class="group">
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Perusahaan <span class="text-slate-400 font-normal">(opsional)</span>
                </label>
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                  placeholder="Nama perusahaan"
                />
              </div>
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Jenis Acara
              </label>
              <select
                class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 cursor-pointer"
              >
                <option value="">Pilih jenis acara</option>
                <option>Corporate Event</option>
                <option>Gala Dinner</option>
                <option>Product Launch</option>
                <option>Wedding</option>
                <option>Concert</option>
                <option>Activation / Pop-up</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Perkiraan Tanggal & Lokasi
              </label>
              <input
                type="text"
                class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                placeholder="Misal: Mei 2025 · Jakarta"
              />
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Detail Kebutuhan
              </label>
              <textarea
                rows="4"
                class="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 resize-none"
                placeholder="Ceritakan secara singkat konsep acara, jumlah tamu, dan kebutuhan khusus lainnya."
              ></textarea>
            </div>

            <button
              type="button"
              class="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>Kirim Pesan</span>
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>

            <p class="text-xs text-slate-500 leading-relaxed text-center">
              Dengan mengirim form ini, Anda menyetujui kami untuk
              menghubungi melalui email atau WhatsApp terkait kebutuhan event
              Anda.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- MAPS + FAQ SECTION -->
    <section
      class="pb-20 left-1/2 right-1/2 w-screen -translate-x-1/2 relative bg-slate-50"
    >
      <div class="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div data-aos="fade-up" class="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.089948463968!2d112.730836!3d-7.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOffice!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="450"
            style="border:0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <FAQ />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import API from "@/services/api";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import FAQ from "../components/FAQ.vue";

export default {
  components: {
    Navbar,
    Footer,
    FAQ,
  },
  setup() {
    const contactInfo = ref({
      address: "Jl. Contoh No.1, Jakarta, Indonesia",
      phone: "+62 21-1234-5678",
      whatsapp: "+62 812-3456-7890",
      email: "info@eventify.co",
      weekday_hours: "09.00 – 18.00",
      saturday_hours: "10.00 – 16.00",
      sunday_hours: "By Appointment"
    });

    const fetchContactInfo = async () => {
      try {
        const response = await API.get("/admin/contact");
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          contactInfo.value = {
            address: data.address || contactInfo.value.address,
            phone: data.phone || contactInfo.value.phone,
            whatsapp: data.whatsapp || contactInfo.value.whatsapp,
            email: data.email || contactInfo.value.email,
            weekday_hours: data.weekday_hours || contactInfo.value.weekday_hours,
            saturday_hours: data.saturday_hours || contactInfo.value.saturday_hours,
            sunday_hours: data.sunday_hours || contactInfo.value.sunday_hours
          };
        }
      } catch (err) {
        console.error("Error fetching contact info:", err);
        // Use default values if API fails
      }
    };

    onMounted(() => {
      fetchContactInfo();
    });

    return {
      contactInfo
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