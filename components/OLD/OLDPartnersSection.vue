<template>
  <section id="partners" class="py-12 md:py-20 relative">
    <h2 class="text-base font-thin text-center mb-8">Ils nous font confiance</h2>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative w-full max-w-5xl mx-auto flex items-center">
        <!-- Bouton précédent -->
        <button @click="prevPartenaire" class="arrowStyle mr-4 md:mr-12">
          <IconSquareRoundedArrowLeft class="w-auto h-[2em] scale-[2]" />
        </button>

        <transition name="fade-slide" mode="out-in">
          <div :key="currentIndex" class="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
            <!-- Nom du partenaire -->
            <h3 class="text-2xl md:text-5xl font-black text-center md:text-left flex-[40%]">
              {{ partenaires[currentIndex].name }}
            </h3>

            <!-- Description et logo -->
            <div class="flex-[60%] w-full md:w-auto">
              <p class="text-lg md:text-3xl font-semibold text-primary mb-4 md:mb-6 text-center md:text-left">
                {{ partenaires[currentIndex].description }}
              </p>
              <img
                v-if="partenaires[currentIndex].logo"
                :src="partenaires[currentIndex].logo"
                :alt="partenaires[currentIndex].name"
                class="w-[50%] md:w-[40%] h-auto object-cover mx-auto md:mx-0"
              />
            </div>
          </div>
        </transition>

        <!-- Bouton suivant -->
        <button @click="nextPartenaire" class="arrowStyle ml-4 md:ml-12">
          <IconSquareRoundedArrowRight class="w-auto h-[2em] scale-[2]" />
        </button>
      </div>

      <!-- Pagination -->
      <div class="text-center mt-6 text-lg font-medium text-gray-600">
        • {{ formatPagination() }} •
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { IconSquareRoundedArrowLeft, IconSquareRoundedArrowRight } from '@tabler/icons-vue';

const partenaires = [
  { name: "Zebra",
  description: "Leader mondial des produits de traçabilité",
  logo: "/img/OLD/LogoZebra.png" },

  { name: "Perfecto",
  description: "Logiciel de gestion et d’optimisation des opérations commerciales",
  logo: "/img/OLD/LogoPerfecto.png" },

  { name: "Constructeurs informatiques",
  description: "Représentation de grandes marques pour le marché béninois" },

  { name: "Pétrolier",
  description: "Représentation d’un Groupe Pétrolier" },
];

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

// Navigation
const prevPartenaire = () => {
  currentIndex.value = (currentIndex.value - 1 + partenaires.length) % partenaires.length;
};

const nextPartenaire = () => {
  currentIndex.value = (currentIndex.value + 1) % partenaires.length;
};

// Formatage de la pagination
const formatPagination = () => {
  return `${(currentIndex.value + 1).toString().padStart(2, '0')}/${partenaires.length.toString().padStart(2, '0')}`;
};

// Défilement automatique
const startAutoScroll = () => {
  interval = setInterval(() => {
    nextPartenaire();
  }, 5000);
};

const stopAutoScroll = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});
</script>

<style scoped>
.arrowStyle {
  @apply text-slate-400 hover:text-primary transition-transform duration-300;
}

/* Animation de transition */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>