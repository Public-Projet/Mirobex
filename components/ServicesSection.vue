<template>
  <div id="services" class="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 relative font-[Poppins,sans-serif]">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="group relative bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200 transition-all duration-500 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] overflow-hidden border-4 hover:border-secondary hover:shadow-xl hover:min-h-[500px]">
          <!-- Contenu principal -->
          <div
            class="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 h-auto flex flex-col">
            <img :src="service.icon" :alt="service.title"
              class="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-105" />
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800">{{ service.title }}</h3>
          </div>

          <!-- Détails au survol -->
          <div
            class="absolute inset-0 p-6 sm:p-8 md:p-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/95 backdrop-blur-sm flex flex-col z-20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-primary/3 before:to-transparent overflow-y-auto custom-scrollbar">

            <!-- Dégradé corrigé pour mobile -->
            <div
              class="absolute inset-x-0 top-0 h-[300px] sm:h-[400px] md:h-[500px] -z-10 transform-gpu overflow-hidden blur-3xl"
              aria-hidden="true">
              <div
                class="relative left-[calc(50%-10rem)] sm:left-[calc(0%-11rem)] md:left-[calc(0%-30rem)] aspect-[1155/678] w-[24rem] sm:w-[36.125rem] md:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-15 sm:opacity-20 md:opacity-25">
              </div>
            </div>

            <div class="relative z-30 mb-4 sm:mb-6">
              <img :src="service.icon" :alt="service.title"
                class="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 transition-transform duration-500 scale-90 group-hover:scale-105" />
              <h3 class="text-xl sm:text-2xl font-bold text-gray-800">{{ service.title }}</h3>
            </div>

            <div class="flex-grow">
              <div v-for="(detail, detailIndex) in service.details" :key="detailIndex"
                class="flex items-start gap-2 sm:gap-3 text-gray-700 group/detail mb-3 sm:mb-4 last:mb-0">
                <IconChevronRight
                  class="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0 transition-transform duration-300 group-hover/detail:translate-x-1 group-hover/detail:scale-125" />
                <span class="text-sm sm:text-base leading-relaxed">{{ detail }}</span>
              </div>
            </div>
          </div>

          <div class="absolute bg-white border border-b-primary bottom-4 right-4 px-3 py-1 sm:px-4 sm:py-2 rounded transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
            <IconArrowNarrowRight class="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconChevronRight, IconArrowNarrowRight } from '@tabler/icons-vue'

interface Service {
  icon: string
  title: string
  details: string[]
}

const services: Service[] = [
  {
    icon: '/img/icon/rc.png',
    title: 'Représentation commerciale',
    details: [
      "Facilitation de l'implantation et croissance des entreprises au Bénin",
      'Vente de produits physiques, digitaux et équipements spécialisés',
      "Distribution d'équipements spécialisés en traçabilité",
      "Service supplémentaire pour tester le débordement",
      "Autre élément optionnel pour voir le scroll"
    ]
  },
  {
    icon: '/img/icon/ce.png',
    title: 'Conseil en entreprises',
    details: [
      'Formation et coaching (management, relation client, techniques de vente)',
      'Expertise administrative et sociale',
      'Stratégie de développement et expansion durable'
    ]
  },
  {
    icon: '/img/icon/es.png',
    title: 'Externalisation des services',
    details: [
      'Placement de personnel intérimaire',
      'Recrutement et management RH',
      'Gestion des fonctions annexes'
    ]
  }
]
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
}
</style>