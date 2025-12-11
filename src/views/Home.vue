<template>
  <div>
    <Navbar />
    <HeroSection />
    <Services />
    <ProjectsSection />
    <Team />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import Services from "../components/Services.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import Team from "../components/Team.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    HeroSection,
    Services,
    ProjectsSection,
    Team,
    Footer,
  },
};
</script>
