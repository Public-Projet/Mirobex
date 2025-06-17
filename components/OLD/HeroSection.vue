<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 relative isolate">
    <!-- Dégradé -->
    <div class="absolute inset-x-0 top-0 h-[400px] sm:h-[600px] md:h-[800px] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div
        class="relative left-[calc(50%-8rem)] sm:left-[calc(50%-11rem)] md:left-[calc(50%-30rem)] aspect-[1155/678] w-[24rem] sm:w-[36.125rem] md:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:opacity-25 md:opacity-30">
      </div>
    </div>

    <!-- Container principal -->
    <div class="container mx-auto p-4 sm:p-6 md:px-12 flex flex-col lg:flex-row items-center rounded-xl sm:rounded-2xl relative overflow-hidden bg-gray-100 border-gradient">
      <!-- Vecteurs -->
      <div class="absolute inset-0 top-0 right-0 w-full h-full z-0 overflow-hidden opacity-60 sm:opacity-80 md:opacity-100">
        <img src="/img/HeroVector.png" alt="Vecteur logo" class="w-full h-full object-cover" />
      </div>

      <!-- Contenu texte -->
      <div class="w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6 md:p-10 z-10 font-[Poppins,sans-serif]">
        <img src="/img/logo.png" alt="Logo Mirobex" class="w-[50%] sm:w-[40%] md:w-[25%] lg:w-[15%] h-auto pb-3 sm:pb-4 mx-auto lg:mx-0" />

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
          Accélérez votre entrée sur <span class="text-gray-400 block md:inline">le marché béninois</span>
        </h1>

        <p class="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed font-bold">
          Notre mission est de vous aider à entrer sur le marché béninois et à développer vos activités via des franchises ou des gérances
        </p>

        <button @click="openContactModal"
          class="mt-4 sm:mt-6 text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl font-semibold bg-primary border-secondary border-2 hover:bg-secondary hover:text-primary hover:border-primary transition-all duration-300 text-sm sm:text-base">
          Discutons-en
        </button>
      </div>

      <!-- Image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
        <div class="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden z-10 lg:absolute lg:top-[60%] lg:right-0 lg:translate-y-[-35%]">
          <img src="/img/HeroImg.jpg" alt="Hero image" class="w-full h-full object-cover border border-primary" />
        </div>
      </div>
    </div>

    <!-- Modal de contact -->
    <div v-if="showContactModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div class="bg-white rounded-lg max-w-md w-full p-6 mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl sm:text-2xl font-bold">Choisir une option de contact</h2>
          <button @click="closeContactModal" class="text-gray-500 hover:text-red-600 transition-colors p-1">
            <IconX class="w-6 h-6" />
          </button>
        </div>
        <div class="space-y-4">
          <p class="text-gray-600 mb-4 text-sm sm:text-base">Comment souhaitez-vous nous contacter ?</p>
          <div class="space-y-3">
            <a href="tel:+2290147797912"
              class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconPhone class="w-5 h-5 text-primary flex-shrink-0" />
              <span class="text-sm sm:text-base">+229 0147797912</span>
            </a>
            <a href="tel:+2290168543878"
              class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconPhone class="w-5 h-5 text-primary flex-shrink-0" />
              <span class="text-sm sm:text-base">+229 01685438782</span>
            </a>
            <a href="mailto:contact@mirobex.bj"
              class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <IconMail class="w-5 h-5 text-primary flex-shrink-0" />
              <span class="text-sm sm:text-base">contact@mirobex.bj</span>
            </a>
            <NuxtLink to="/contact"
              class="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              @click="closeContactModal">
              <IconFileText class="w-5 h-5 text-primary flex-shrink-0" />
              <span class="text-sm sm:text-base">Formulaire de contact</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconX, IconPhone, IconMail, IconFileText } from '@tabler/icons-vue'
import { ref } from 'vue'

const showContactModal = ref(false)

const openContactModal = () => {
  showContactModal.value = true
}

const closeContactModal = () => {
  showContactModal.value = false
}
</script>

<style scoped>
/* Bordure */
.border-gradient {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to left, var(--color-primary, #3b82f6), white) border-box;
}

.border-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(to left, var(--color-primary, #3b82f6), white);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: exclude;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

/* Amélioration du backdrop-filter */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Responsive pour très petits écrans */
@media (max-width: 375px) {
  .container {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

/* Optimisation pour tablettes */
@media (min-width: 768px) and (max-width: 1023px) {
  .lg\:absolute {
    position: static;
  }
  
  .lg\:top-\[60\%\] {
    top: auto;
  }
  
  .lg\:translate-y-\[-35\%\] {
    transform: none;
  }
}

/* Animation pour les transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
</style>