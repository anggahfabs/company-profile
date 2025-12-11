import { createRouter, createWebHistory } from 'vue-router'

// import halaman
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
// ADMIN
import Login from '@/views/Auth/Login.vue'

import SlidesAdmin from '@/views/Admin/SlidesAdmin.vue'
import ServicesAdmin from '@/views/Admin/ServicesAdmin.vue'
import ProjectsAdmin from '@/views/Admin/ProjectsAdmin.vue'
import TeamAdmin from '@/views/Admin/TeamAdmin.vue'
import ContactAdmin from '@/views/Admin/ContactAdmin.vue'
import SosmedAdmin from '@/views/Admin/SosmedAdmin.vue'
import MapsAdmin from '@/views/Admin/MapsAdmin.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  { path: '/services', name: 'Services', component: Services },
  // admin
  { path: '/admin', redirect: '/admin/login' },

  { path: '/admin/login', component: Login },
  { path: '/admin/slides', component: SlidesAdmin },
  { path: '/admin/services', component: ServicesAdmin },
  { path: '/admin/projects', component: ProjectsAdmin },
  { path: '/admin/team', component: TeamAdmin },
  { path: '/admin/contact', component: ContactAdmin },
  { path: '/admin/sosmed', component: SosmedAdmin },
  { path: '/admin/maps', component: MapsAdmin },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("admin_auth") === "true"

  // Jika buka halaman admin
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    if (!isAuth) {
      return next('/admin/login')
    }
  }

  next()
})

export default router
