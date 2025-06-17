<template>
  <footer class="bg-pmrDark text-white py-16 px-0 md:px-16">
    <div class="container mx-auto px-6 md:px-12">
      <!-- HAUT -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Rejoignez-nous -->
        <div class="text-center md:text-left mb-6 md:mb-0">
          <div>
            <h2 class="text-3xl md:text-5xl font-semibold">Rejoignez-nous</h2>
            <p class="mt-2 text-sm md:text-base">En savoir plus sur nos services et dispositions</p>
          </div>

          <div class="mt-4 md:mt-6 font-medium text-secondary">
            <p>
              <a href="mailto:contact@mirobex.bj" class="hover:underline hover:font-bold">contact@mirobex.bj</a>
            </p>
            <p>
              <a href="tel:2290147797912" class="hover:underline hover:font-bold">(229) 0147797912 / 0168543878</a>
            </p>
          </div>
        </div>

        <!-- Flèche -->
        <div
          class="group hidden md:block group p-1 rounded-full bg-white transition-all duration-300 border-2 border-transparent hover:bg-gradient-to-tr from-secondary/80 via-pmrDark/80 to-pmrDark hover:border-4 hover:border-secondadry hover:bg-clip-padding hover:p-[2px]">
          <NuxtLink to="#"
            class="block rounded-full h-20 w-20 flex items-center justify-center transition-all duration-300 overflow-hidden relative">
            <IconArrowUpRight
              class="h-10 w-10 text-pmrDark transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
          </NuxtLink>
        </div>
      </div>

      <!-- BAS -->
      <div 
        class="text-sm mt-6 pt-2 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> 
        <!-- Liens de navigation --> 
        <div class="order-1 md:order-2 space-x-4"> 
          <NuxtLink to="/terms" class="nav-hover">Termes et Références</NuxtLink> 
          <NuxtLink to="/contact" class="nav-hover">Contactez-nous</NuxtLink> 
        </div> 
 
        <!-- Réseaux sociaux --> 
        <div class="order-2 md:order-3 flex space-x-4"> 
          <a v-for="item in socialLinks" :key="item.name" :href="item.href" target="_blank" rel="noopener noreferrer" 
            class="nav-hover"> 
            <span class="sr-only">{{ item.name }}</span> 
            <component :is="item.icon" class="h-5 w-5" aria-hidden="true" /> 
          </a> 
        </div> 

        <!-- Copyright --> 
        <div class="order-3 md:order-1"> 
          <p>Mirobex &copy; {{ new Date().getFullYear() }}</p> 
        </div> 
      </div> 
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconArrowUpRight, IconBrandFacebook, IconBrandX, IconBrandLinkedin } from '@tabler/icons-vue';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/#',
    icon: IconBrandFacebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/#',
    icon: IconBrandX,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/#',
    icon: IconBrandLinkedin,
  },
];
</script>

<style scoped>
.nav-hover {
  @apply hover:text-secondary transition-colors duration-200;
}
</style>
