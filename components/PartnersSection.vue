<template>
  <section id="partners" class="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
    <div
      class="mx-auto flex flex-col md:flex-row py-12 sm:py-20 px-4 sm:px-8 md:px-16 items-center gap-8 md:gap-12 lg:gap-16 bg-gradient-to-br from-primary/0 to-primary/20 rounded-2xl">

    <!-- Contenu texte -->
      <Transition name="fade" mode="out-in">
        <div :key="currentSlide.id" class="text-content w-full md:w-3/5 min-w-[300px] text-center md:text-left">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight font-[Poppins,sans-serif]">
            {{ currentSlide.title }}
          </h2>

          <p class="text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            {{ currentSlide.description }}
          </p>

          <!-- Boutons de navigation -->
          <div class="navigation-buttons flex gap-3 justify-center md:justify-start">
            <button
              @click="prevSlide"
              aria-label="Previous slide"
              class="bg-white border border-primary/10 rounded-full w-16 h-16 flex items-center justify-center shadow-sm hover:bg-primary/10 hover:border-primary transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <IconArrowUp class="w-7 h-7 text-primary" />
            </button>

            <button
              @click="nextSlide"
              aria-label="Next slide"
              class="bg-white border border-primary/10 rounded-full w-16 h-16 flex items-center justify-center shadow-sm hover:bg-primary/10 hover:border-primary transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <IconArrowDown class="w-7 h-7 text-primary" />
            </button>
          </div>
        </div>
      </Transition>

      <!-- Conteneur d'images -->
      <div class="image-grid-container w-full md:w-2/5 flex justify-center items-center min-h-[300px] relative">
        <Transition name="fade" mode="out-in">
          <!-- Grille avec logos -->
          <div
            :key="currentSlide.id"
            class="image-grid p-4 md:p-6 rounded-xl backdrop-blur-sm w-full max-w-md mx-auto"
            :class="gridClasses"
          >
            <!-- Boucle sur les logos du slide -->
            <div
              v-for="(logo, index) in currentSlide.logos"
              :key="currentSlide.id + '-' + index"
              class="logo-item bg-white rounded-lg p-3 md:p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              :class="logoGridPlacement(logo, index)"
            >
              <img :src="logo.src" :alt="logo.alt" class="max-h-24 md:max-h-32 object-contain" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-vue';

// Définition
const slides = ref([
  {
    id: 1,
    title: 'Partenaires de marques ambitieuses',
    description: 'Notre savoir-faire s\'exprime aux côtés d\'acteurs qui exigent le meilleur pour leur identité.',
    logos: [
      { src: '/img/partner/Zebra.png', alt: 'Zebra' },
      { src: '/img/partner/JNP.png', alt: 'JNP' },
      { src: '/img/partner/devea.png', alt: 'devea' },
      { src: '/img/partner/Jarltech.png', alt: 'JARLTECH', tall: true },
      { src: '/img/partner/inmac.png', alt: 'inmac' }
    ]
  },
  {
    id: 2,
    title: 'Des marques reconnues nous choisissent',
    description: 'La qualité de nos partenariats témoigne de notre capacité à incarner et valoriser les marques les plus exigeantes.',
    logos: [
      { src: '/img/client/Sodec.png', alt: 'SODEC' },
      { src: '/img/client/BC.png', alt: 'Bénin Contrôle' },
      { src: '/img/client/MCAB.png', alt: 'Millenium Challenge Account Benin II' },
      { src: '/img/client/PAC.png', alt: 'Port Autonome de Cotonou' }
    ]
  }
]);

const currentSlideIndex = ref(0);
let intervalId = null;
const slideDuration = 20000;

const currentSlide = computed(() => slides.value[currentSlideIndex.value]);

const gridClasses = computed(() => {
  let baseClasses = 'grid grid-cols-2 gap-4 md:gap-6';

  if (currentSlide.value.id === 1) {
    baseClasses += ' md:grid-cols-3';
  } else if (currentSlide.value.id === 2) {
    baseClasses += ' md:grid-cols-2';
  }
  return baseClasses;
});

const logoGridPlacement = (logo, index) => {
  const classes = [];
  if (currentSlide.value.id === 1) {
    if (logo.tall) {
      classes.push('md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-1');
    } else {
      if (index === 0) classes.push('md:col-start-1 md:row-start-1'); 
      if (index === 1) classes.push('md:col-start-3 md:row-start-1'); 
      if (index === 2) classes.push('md:col-start-1 md:row-start-2'); 
      if (index === 4) classes.push('md:col-start-3 md:row-start-2'); 
    }
  } else if (currentSlide.value.id === 2) {
  }
  return classes.join(' ');
};

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
  resetAutoSlide();
};

const prevSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
  resetAutoSlide();
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, slideDuration);
};

const resetAutoSlide = () => {
  clearInterval(intervalId); 
  startAutoSlide(); 
};

onMounted(() => {
  startAutoSlide();

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      prevSlide();
    } else if (e.key === 'ArrowDown') {
      nextSlide();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId); 
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .logo-item.md\:row-span-2 {
    grid-row: span 1;
  }
}
</style>