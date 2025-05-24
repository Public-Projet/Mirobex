<template>
  <section id="services" class="py-16">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Section Détails -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold text-center">Nos activités</h2>
        <p class="m-4 text-center">Ils s'articulent autour de plusieurs axes principaux.</p>
        <NuxtLink to="/terms" class="border-2 border-primary mt-4 p-2 rounded-3xl hover:bg-primary hover:text-white hover:border-secondary">
          En savoir plus
        </NuxtLink>
      </div>

      <!-- Section Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        <div v-for="(service, index) in services" :key="index" class="flex flex-col items-start">
          <div 
            class="service bg-white shadow-lg p-6 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300" 
            :class="{ 'active': activeService === index }" 
            @click="setActiveService(index)">
            
            <div class="text-2xl font-semibold text-primary text-left flex items-center gap-5 hover:text-white" :class="{ 'text-white': activeService === index }">
              <component :is="service.icon" class="w-auto h-[1.5em] scale-[1.2]" />
              <h3>{{ service.title }}</h3>
            </div>
            <p class="mt-2">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconUserScreen, IconAward, IconScanEye, IconUserPlus, IconStairsUp, IconUsers, IconEdit, IconDeviceDesktopStar, IconMapPin } from '@tabler/icons-vue';

const activeService = ref(0);
const setActiveService = (index: number) => {
  activeService.value = index;
};

const services = [
  { title: "Représentation commerciale",
  description: "Faciliter l'implantation et la croissance au Bénin.",
  icon: IconUserScreen},

  { title: "Formation et coaching",
  description: "Former les équipes locales pour une gestion efficace et adaptée.",
  icon: IconAward },

  { title: "Externalisation de services",
  description: "Gérer les fonctions annexes des entreprises pour leur permettre de se consentrer sur le coeur de métier.",
  icon: IconScanEye },

  { title: "Placement de personnel intérimaire",
  description: "Fournir des ressources humaines qualifiées pour des besoins ponctuels ou continus.",
  icon: IconUserPlus },

  { title: "Expertise et supervision sociale",
  description: "Assister dans les démarches administratives et sociales.",
  icon: IconStairsUp },

  { title: "Audit RH et management",
  description: "Proposer des solutions innovantes pour optimiser les ressources humaines.",
  icon: IconUsers },

  { title: "Reporting social et publication",
  description: "Offrir des services d'analyse et de communication pour un meilleur suivi des performaces.",
  icon: IconEdit },

  { title: "Vente et réprésentation de logiciel",
  description: "Distribution et licence de solutions innovantes telle que Perfecto.",
  icon: IconDeviceDesktopStar },

  { title: "Produit de traçabilité",
  description: "Distribution d'équipements spécialisés comme les produits Zebra.",
  icon: IconMapPin },
];
</script>

<style scoped>
.service {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service:hover, .service.active {
  @apply shadow-xl bg-primary text-white border-2 border-secondary transition;
  transition: ease-in-out 0.3s;
  transform: rotate(-2deg);
}
</style>
