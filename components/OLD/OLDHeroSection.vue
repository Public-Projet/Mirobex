<template>
  <section class="bg-primary py-16 relative">
    <!-- Vecteurs -->
    <div class="absolute inset-0">
      <img src="/img/OLD/HeroVector.png" alt="Vecteur logo" class="w-[50%] h-auto object-cover" />
      <div class="absolute"></div>
    </div>

    <div class="container mx-auto p-6 md:px-12 flex flex-col md:flex-row items-center bg-slate-100 rounded-2xl relative overflow-visible">
      <!-- Hero Textes -->
      <div class="w-full md:w-1/2 text-center md:text-left p-6 md:p-10 z-10">
        <img src="/img/OLD/logo.png" alt="Logo Mirobex" class="w-[40%] md:w-[30%] h-auto pb-4 mx-auto md:mx-0" />

        <h1 class="text-2xl md:text-4xl font-bold">
          Accompagner votre entreprise à pénétrer le marché béninois
        </h1>

        <p class="mt-3 text-sm md:text-base leading-relaxed">
          Notre mission, vous accompagnez à pénétrer le marché béninois, et apporter une solution à vos besoins de développer vos activités à travers des franchises ou des gérances locales.
        </p>

        <button @click="openContactModal" class="mt-6 text-white px-6 py-3 rounded-lg font-semibold bg-primary border-secondary border-2 hover:bg-secondary hover:text-primary hover:border-primary transition">
          Discutons-en
        </button>  
      </div>

      <!-- Hero image -->
      <div class="hidden md:block md:w-1/2 flex justify-center md:justify-end relative">
        <div class="absolute top-1/2 right-0 translate-y-[-50%] w-[380px] md:w-[420px] aspect-[3/4] bg-white rounded-2xl shadow-xl overflow-hidden z-10">
          <img src="/img/HeroImg.jpg" alt="Hero image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

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
              <span>+229 01 685438782</span>
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
  </section>
</template>

<script setup>
import { IconX, IconPhone, IconMail, IconFileText } from '@tabler/icons-vue'
import { ref } from 'vue';

const showContactModal = ref(false);

const openContactModal = () => {
  showContactModal.value = true;
};

const closeContactModal = () => {
  showContactModal.value = false;
};
</script>

<style scoped>
.bg-opacity-50 {
  backdrop-filter: blur(5px);
}
</style>
