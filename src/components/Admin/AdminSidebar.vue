<template>
  <aside
    :class="[
      'h-screen bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300 overflow-hidden sticky top-0',
      collapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- HEADER -->
    <div class="flex items-center justify-between p-4">
      <div v-if="!collapsed" class="text-xl font-bold tracking-wide">
        Admin Panel
      </div>

      <!-- Toggle Button -->
      <button
        @click="toggleCollapse"
        class="p-2 rounded hover:bg-gray-100 transition"
      >
        <ChevronDoubleLeftIcon
          v-if="!collapsed"
          class="w-5 h-5 text-gray-700"
        />
        <ChevronDoubleRightIcon v-else class="w-5 h-5 text-gray-700" />
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto px-2 space-y-1">
      <!-- ACCORDION: CONTENT -->
      <div>
        <button
          @click="toggleAccordion('content')"
          class="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 transition"
        >
          <FolderIcon class="w-6 h-6 text-blue-600" />
          <span v-if="!collapsed" class="ml-3 font-semibold text-gray-700"
            >Content</span
          >
          <ChevronDownIcon
            v-if="!collapsed"
            :class="[
              'w-5 h-5 ml-auto transition-transform',
              accordion.content ? 'rotate-180' : '',
            ]"
          />
        </button>

        <transition name="slide">
          <div v-if="accordion.content" class="ml-8 space-y-1">
            <RouterLink
              to="/admin/slides"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <PhotoIcon class="w-5 h-5" />
              <span v-if="!collapsed">Slides</span>
            </RouterLink>

            <RouterLink
              to="/admin/services"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <WrenchScrewdriverIcon class="w-5 h-5" />
              <span v-if="!collapsed">Services</span>
            </RouterLink>

            <RouterLink
              to="/admin/projects"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <CubeIcon class="w-5 h-5" />
              <span v-if="!collapsed">Projects</span>
            </RouterLink>

            <RouterLink
              to="/admin/team"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <UserGroupIcon class="w-5 h-5" />
              <span v-if="!collapsed">Team</span>
            </RouterLink>
          </div>
        </transition>
      </div>

      <!-- ACCORDION: SETTINGS -->
      <div>
        <button
          @click="toggleAccordion('settings')"
          class="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 transition"
        >
          <Cog6ToothIcon class="w-6 h-6 text-green-600" />
          <span v-if="!collapsed" class="ml-3 font-semibold text-gray-700"
            >Settings</span
          >
          <ChevronDownIcon
            v-if="!collapsed"
            :class="[
              'w-5 h-5 ml-auto transition-transform',
              accordion.settings ? 'rotate-180' : '',
            ]"
          />
        </button>

        <transition name="slide">
          <div v-if="accordion.settings" class="ml-8 space-y-1">
            <RouterLink
              to="/admin/contact"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <PhoneIcon class="w-5 h-5" />
              <span v-if="!collapsed">Contact</span>
            </RouterLink>

            <RouterLink
              to="/admin/messages"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
              <span v-if="!collapsed">Pesan Pengunjung</span>
              <!-- BADGE JUMLAH PESAN -->
  <span
    v-if="!collapsed"
    class="ml-auto text-xs bg-red-500 text-white px-2 py-0.5 rounded-full"
  >
    3
  </span>
            </RouterLink>
            <!-- <RouterLink
              to="/admin/footer-services"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <BookmarkIcon class="w-5 h-5" /> <span v-if="!collapsed">Footer Services</span>
            </RouterLink> -->

            <RouterLink
              to="/admin/sosmed"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <GlobeAltIcon class="w-5 h-5" />
              <span v-if="!collapsed">Sosial Media</span>
            </RouterLink>

            <!-- <RouterLink
              to="/admin/maps"
              class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <MapIcon class="w-5 h-5" /> <span v-if="!collapsed">Maps</span>
            </RouterLink> -->
          </div>
        </transition>
      </div>
    </nav>

    <!-- FOOTER -->
    <div class="p-4 border-t border-gray-200 text-center">
      <p v-if="!collapsed" class="text-xs text-gray-500">© 2025 Dashboard</p>
      <CogIcon v-else class="w-6 h-6 mx-auto text-gray-500" />
    </div>
  </aside>
</template>

<script>
import {
  FolderIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  UserGroupIcon,
  PhoneIcon,
  BookmarkIcon,
  GlobeAltIcon,
  MapIcon,
  CogIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/vue/24/outline";

import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    FolderIcon,
    PhotoIcon,
    WrenchScrewdriverIcon,
    CubeIcon,
    UserGroupIcon,
    PhoneIcon,
    BookmarkIcon,
    GlobeAltIcon,
    MapIcon,
    CogIcon,
    Cog6ToothIcon,
    ChevronDownIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChatBubbleLeftRightIcon,
  },

  setup() {
    const collapsed = ref(false);
    const accordion = ref({ content: false, settings: false });

    const route = useRoute();

    const updateAccordionByRoute = () => {
      const path = route.path;
      if (
        path.startsWith("/admin/slides") ||
        path.startsWith("/admin/services") ||
        path.startsWith("/admin/projects") ||
        path.startsWith("/admin/team")
      ) {
        accordion.value.content = true;
        accordion.value.settings = false;
      } else if (
        path.startsWith("/admin/contact") ||
        path.startsWith("/admin/messages") ||
        path.startsWith("/admin/footer-services") ||
        path.startsWith("/admin/sosmed") ||
        path.startsWith("/admin/maps")
      ) {
        accordion.value.content = false;
        accordion.value.settings = true;
      } else {
        accordion.value.content = false;
        accordion.value.settings = false;
      }
    };

    watch(
      () => route.path,
      () => updateAccordionByRoute(),
      { immediate: true }
    );

    onMounted(() => {
      const saved = localStorage.getItem("sidebar_collapsed");
      if (saved !== null) collapsed.value = JSON.parse(saved);
    });

    const toggleCollapse = () => {
      collapsed.value = !collapsed.value;
      localStorage.setItem("sidebar_collapsed", collapsed.value);
    };

    const toggleAccordion = (section) => {
      // Hanya toggle tab yang diklik
      accordion.value[section] = !accordion.value[section];
    };

    return { collapsed, accordion, toggleCollapse, toggleAccordion };
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
