<template>
  <main class="min-h-screen flex flex-col">
    <!-- En-tête -->
    <TheHeader />

    <!-- Section Maintenance -->
    <section class="flex-1 flex items-center justify-center py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
          <!-- Texte -->
          <div class="p-8 md:p-12 text-center md:text-left md:w-1/2">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Page en construction</h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8">
              Nous travaillons activement sur cette page. Elle sera bientôt disponible !
            </p>
            <NuxtLink
              to="/"
              class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white hover:text-black rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              <IconHome class="w-5 h-5 mr-2" />
              <span>Retour à l'accueil</span>
            </NuxtLink>
          </div>

          <!-- Image -->
          <div class="md:w-1/2 flex justify-center p-8 md:p-0">
            <img
              src="/img/maintenance.png"
              alt="Page en construction"
              class="w-full max-w-md md:max-w-none h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { IconHome } from '@tabler/icons-vue';

useHead({
  title: 'Termes et Références',
  meta: [{ name: 'description', content: 'En savoir plus sur les termes et références utilisés à Mirobex.' }]
})
</script>