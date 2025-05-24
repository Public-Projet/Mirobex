<template>
  <footer class="bg-primary text-white py-10">
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

        <!-- Icône flèche -->
        <div class="hidden md:block bg-white rounded-full hover:scale-110 transition-transform">
          <NuxtLink to="#" class="nav-hover">
            <IconArrowUpRight class="h-20 w-20 text-primary" />
          </NuxtLink>
        </div>
      </div>

      <!-- BAS -->
      <div class="text-sm mt-6 pt-2 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div class="order-1 md:order-none">
          <p>Mirobex &copy; {{ new Date().getFullYear() }}</p>
        </div>

        <!-- Liens de navigation -->
        <div class="order-2 md:order-none space-x-4">
          <NuxtLink to="/terms" class="nav-hover">Termes et Références</NuxtLink>
          <NuxtLink to="/contact" class="nav-hover">Contactez-nous</NuxtLink>
        </div>

        <!-- Réseaux sociaux -->
        <div class="order-3 md:order-none flex space-x-4">
          <a v-for="item in socialLinks" :key="item.name" :href="item.href" target="_blank" rel="noopener noreferrer" class="nav-hover">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
          </a>
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
    href: 'https://facebook.com/SteveAsterAfovo.1',
    icon: IconBrandFacebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/SteveAsterAfovo',
    icon: IconBrandX,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/SteveAsterAfovo',
    icon: IconBrandLinkedin,
  },
];
</script>

<style scoped>
.nav-hover {
  @apply hover:text-secondary transition-colors duration-200;
}
</style>