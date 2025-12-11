import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

// AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

// Inisialisasi AOS setelah app dimount
AOS.init({
  duration: 800,
  once: true,
});

// Refresh AOS setiap kali route berubah agar elemen baru juga dianimasikan
router.afterEach(() => {
  AOS.refresh();
});
