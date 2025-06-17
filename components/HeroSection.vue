<template>
  <section class="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 relative isolate">
    <!-- Dégradé -->
    <div
      class="absolute inset-x-0 top-0 h-[400px] sm:h-[600px] md:h-[800px] -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true">
      <div
        class="relative left-[calc(50%-8rem)] sm:left-[calc(50%-11rem)] md:left-[calc(50%-30rem)] aspect-[1155/678] w-[24rem] sm:w-[36.125rem] md:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:opacity-25 md:opacity-30">
      </div>
    </div>

    <!-- Container principal -->
    <div
      class="container mx-auto p-4 sm:p-6 md:px-12 flex flex-col lg:flex-row items-center rounded-xl sm:rounded-2xl relative overflow-hidden bg-gray-100 border-gradient">
      <!-- Vecteurs -->
      <div
        class="absolute inset-0 top-0 right-0 w-full h-full z-0 overflow-hidden opacity-60 sm:opacity-80 md:opacity-100">
        <img src="/img/HeroVector.png" alt="Vecteur logo" class="w-full h-full object-cover" />
      </div>

      <!-- Contenu texte -->
      <div class="w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6 md:p-10 z-10 font-[Poppins,sans-serif]">
        <img src="/img/logo.png" alt="Logo Mirobex"
          class="w-[50%] sm:w-[40%] md:w-[25%] lg:w-[15%] h-auto pb-3 sm:pb-4 mx-auto lg:mx-0" />

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
          Accélérez votre entrée sur <span class="text-gray-400 block md:inline">le marché béninois</span>
        </h1>

        <p class="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed font-bold">
          Notre mission est de vous aider à entrer sur le marché béninois et à développer vos activités via des
          franchises ou des gérances
        </p>

        <NuxtLink to="/#services"
          class="discover-button inline-flex items-center gap-2 mt-4 sm:mt-6 text-primary px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-md sm:rounded-lg font-semibold hover:bg-primary hover:text-white border-transparent border-2 hover:border-b-secondary transition-all duration-300 text-sm sm:text-base relative overflow-hidden">
          <span class="button-content inline-flex items-center gap-2 transition-all duration-500">
            <span class="block">Découvrez nos services</span>
            <IconArrowDown class="inline-block ml-2" />
          </span>
          <span class="button-content absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full opacity-0">
            <span class="block">Découvrez nos services</span>
            <IconArrowDown class="inline-block ml-2" />
          </span>
        </NuxtLink>
      </div>

      <!-- Image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
        <div
          class="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden z-10 lg:absolute lg:top-[60%] lg:right-0 lg:translate-y-[-35%]">
          <img src="/img/HeroImg.jpg" alt="Hero image" class="w-full h-full object-cover border border-primary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconArrowDown } from '@tabler/icons-vue'
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

/* Animation du bouton */
.discover-button:hover .button-content:first-child {
  transform: translateY(-100%);
  opacity: 0;
}

.discover-button:hover .button-content:last-child {
  transform: translateY(0);
  opacity: 1;
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
</style>