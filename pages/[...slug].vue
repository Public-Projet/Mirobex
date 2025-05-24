<template>
  <main class="min-h-screen flex flex-col ">
    <section class="flex-grow flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <!-- Contenu -->
        <div class="text-center">
          <img src="/img/404.png" alt="Page non trouvée" class="w-[40%] h-auto mx-auto" />
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">Oups ! Page introuvable</h1>
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            La page que vous recherchez a peut-être été déplacée, supprimée ou n'existe pas.
          </p>

          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="/"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black bg-primary hover:bg-secondary transition-colors duration-300">
              <IconHome class="w-5 h-5 mr-2" />
              Retour à l'accueil
            </NuxtLink>
            <NuxtLink to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-300">
              <IconMessage class="w-5 h-5 mr-2" />
              Nous contacter
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { IconHome, IconMessage } from '@tabler/icons-vue'

useHead({
  title: 'Page non trouvée - 404',
  meta: [
    { name: 'description', content: 'La page que vous recherchez est introuvable. Retournez à l\'accueil ou contactez-nous.' }
  ]
})

definePageMeta({
  layout: false
});
</script>

<style scoped>
img {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>