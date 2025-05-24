<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="/img/logo.png" alt="Logo Mirobex" />
        </NuxtLink>

        <!-- Navigation desktop -->
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <NuxtLink to="/#services" class="nav-link">Nos activités</NuxtLink>
          <NuxtLink to="/#client" class="nav-link">Notre clientèle</NuxtLink>
          <NuxtLink to="/#partners" class="nav-link">Nos partenaires</NuxtLink>
          <NuxtLink to="/terms" class="nav-link">Termes et Références</NuxtLink>
        </div>

        <!-- Bouton contact -->
        <div class="flex items-center space-x-4">
          <button 
            @click="openContactModal"
            class="hidden sm:block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors text-base"
          >
            Nous contacter
          </button>
          
          <!-- Bouton Mamburger -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="sm:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Menu"
          > 
            <IconMenu class="w-auto h-[1em] scale-[1.5] text-primary" :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }" />
            
            <IconX class="w-auto h-[1em] scale-[1.5] text-primary" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" />
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div 
        class="sm:hidden transition-all duration-300 ease-in-out"
        :class="{ 'max-h-screen opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen }"
      >
        <div class="py-3 space-y-1">
          <NuxtLink 
            v-for="(link, index) in mobileLinks" 
            :key="index"
            :to="link.to"
            class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
          <button 
            @click="openContactModal"
            class="sm:block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors text-base"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div v-if="showContactModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Choisir une option de contact</h2>
          <button @click="closeContactModal" class="text-gray-500 hover:text-red-600">
            <IconX class="w-auto h-[1em] scale-[1.5]" />
          </button>
        </div>
        <div class="space-y-4">
          <p class="text-gray-600 mb-4">Comment souhaitez-vous nous contacter ?</p>
          <div class="space-y-3">
            <a href="tel:+2290147797912" class="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconPhone class="w-auto h-[1em] scale-[1.5] text-primary" />
              <span>+229 01 47797912</span>
            </a>
            <a href="tel:+2290168543878" class="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconPhone class="w-auto h-[1em] scale-[1.5] text-primary" />
              <span>+229 01 68543878</span>
            </a>
            <a href="mailto:contact@mirobex.bj" class="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconMail class="w-auto h-[1em] scale-[1.5] text-primary" />
              <span>contact@mirobex.bj</span>
            </a>
            <NuxtLink to="/contact" class="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors" @click="closeContactModal">
              <IconFileText class="w-auto h-[1em] scale-[1.5] text-primary" />
              <span>Formulaire de contact</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconMenu, IconX, IconPhone, IconMail, IconFileText } from '@tabler/icons-vue'

const showContactModal = ref(false)
const isMenuOpen = ref(false)

const mobileLinks = [
  { to: '/#services', text: 'Nos activités' },
  { to: '/#client', text: 'Notre clientèle' },
  { to: '/#partners', text: 'Nos partenaires' },
  { to: '/terms', text: 'Termes et Références' }
]

const openContactModal = () => {
  showContactModal.value = true
  isMenuOpen.value = false
}

const closeContactModal = () => {
  showContactModal.value = false
}
</script>

<style scoped>
.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors;
}

.nav-link.router-link-active {
  @apply border-primary text-primary;
}
</style>