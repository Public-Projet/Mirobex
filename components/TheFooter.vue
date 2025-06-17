<template>
  <footer class="bg-gray-100 py-16 px-0 md:px-16">
    <div class="container mx-auto px-6 md:px-12">
      <!-- HAUT -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left mb-6 md:mb-0">
          <div class="flex flex-col items-center md:items-end">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-16 w-auto" src="/img/logoLong.png" alt="Logo Mirobex" />
            </div>
            <p class="mt-2 text-sm md:text-base text-primary">Le miroir de votre marque</p>
          </div>

          <div class="mt-4 md:mt-6 font-medium">
            <p>
              <a href="mailto:contact@mirobex.bj" class="hover:underline">contact@mirobex.bj</a>
            </p>
            <p>
              <a href="tel:2290147797912" class="hover:underline">(229) 0147797912 / 0168543878</a>
            </p>
          </div>
        </div>

        <!-- Services -->
        <div class="flex flex-col space-y-4 md:space-y-2 w-full md:w-auto">
          <h3 class="text-lg font-semibold mb-2 text-center md:text-left">Services</h3>
          <ul class="space-y-1 text-center md:text-left">
            <li>Représentation commerciale</li>
            <li>Conseil en entreprises</li>
            <li>Externalisation des services</li>
          </ul>
        </div>
      </div>

      <!-- BAS -->
      <div
        class="text-sm mt-6 pt-2 border-t border-black flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
  @apply hover:text-primary transition-colors duration-200;
}
</style>
