<template>
  <section id="partners" class="py-8 sm:py-4 md:py-6 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl text-primary mb-6 sm:mb-8 font-[Poppins,sans-serif]">
          Nos {{ activeTab === 'clients' ? 'clients' : 'partenaires' }}
        </h2>
        <div class="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
          <button @click="activeTab = 'clients'" :class="[
            'px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300',
            activeTab === 'clients' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
          ]">
            Clients
          </button>
          <button @click="activeTab = 'partners'" :class="[
            'px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300',
            activeTab === 'partners' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
          ]">
            Partenaires
          </button>
        </div>
      </div>

      <!-- Carrousel -->
      <div class="relative overflow-hidden pb-12 sm:pb-14 md:pb-16">
        <div
          class="absolute left-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-slate-100 via-slate-100/80 to-transparent z-10 pointer-events-none">
        </div>
        <div
          class="absolute right-0 top-0 w-8 sm:w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-slate-100 via-slate-100/80 to-transparent z-10 pointer-events-none">
        </div>

        <div ref="carousel" class="flex" @mouseenter="pauseScroll" @mouseleave="resumeScroll"
          :style="{ transform: `translateX(${translateX}px)` }">
          <template v-for="(item, index) in duplicatedData" :key="index">
            <div class="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 group cursor-pointer relative"
              @mouseenter="hoveredItem = index" @mouseleave="hoveredItem = null">
              <div
                class="relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto flex items-center p-3 sm:p-4 md:p-6 lg:p-8 justify-center rounded-2xl sm:rounded-3xl transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-50/50">
                <img :src="item.logo" :alt="item.name" :class="[
                  'max-w-full max-h-full object-contain transition-all duration-300',
                  hoveredItem === index ? 'filter-none' : 'filter grayscale'
                ]" />
              </div>

              <!-- Tooltip -->
              <div :class="[
                'absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 z-50',
                hoveredItem === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
              ]">
                {{ item.name }}
                <!-- Flèche du tooltip -->
                <div
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900">
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Partner {
  name: string
  logo: string
}

const activeTab = ref<'clients' | 'partners'>('clients')
const hoveredItem = ref<number | null>(null)
const isHovered = ref(false)
const translateX = ref(0)
const carousel = ref<HTMLElement | null>(null)
let animationId: number | null = null
const SCROLL_SPEED = ref(1.0)

// Vitesse
const updateScrollSpeed = () => {
  const width = window.innerWidth
  if (width < 640) {
    SCROLL_SPEED.value = 0.6 // Plus sur mobile
  } else if (width < 768) {
    SCROLL_SPEED.value = 0.8 // Vitesse sur tablette
  } else {
    SCROLL_SPEED.value = 1.0 // Vitesse normale pour desktop
  }
}

const clients: Partner[] = [
  { logo: '/img/client/Sodec.png', name: 'SODEC' },
  { logo: '/img/client/BC.png', name: 'Bénin Contrôle' },
  { logo: '/img/client/MCAB.png', name: 'Millenium Chellenge Account Benin' },
  { logo: '/img/client/PAC.png', name: 'Port Autonome de Cotonou' }
]

const partners: Partner[] = [
  { logo: '/img/partner/Zebra.png', name: 'Zebra' },
  { logo: '/img/partner/JNP.png', name: 'JNP' },
  { logo: '/img/partner/devea.png', name: 'devea' },
  { logo: '/img/partner/Jarltech.png', name: 'JARLETECH' },
  { logo: '/img/partner/inmac.png', name: 'inmac' }
]

const currentData = computed(() => activeTab.value === 'clients' ? clients : partners)
const duplicatedData = computed(() => [...currentData.value, ...currentData.value, ...currentData.value])

const startScrolling = () => {
  if (!carousel.value) return

  const carouselWidth = carousel.value.scrollWidth / 3
  const animate = () => {
    if (!isHovered.value) {
      translateX.value -= SCROLL_SPEED.value
      if (Math.abs(translateX.value) >= carouselWidth) {
        translateX.value = 0
      }
    }
    animationId = requestAnimationFrame(animate)
  }

  if (animationId) cancelAnimationFrame(animationId)
  animationId = requestAnimationFrame(animate)
}

const pauseScroll = () => {
  isHovered.value = true
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

const resumeScroll = () => {
  isHovered.value = false
  hoveredItem.value = null
  setTimeout(() => {
    if (!isHovered.value) startScrolling()
  }, 100)
}

onMounted(() => {
  updateScrollSpeed()
  startScrolling()
  window.addEventListener('resize', updateScrollSpeed)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', updateScrollSpeed)
})

watch(activeTab, () => {
  translateX.value = 0
  if (!isHovered.value) startScrolling()
})
</script>

<style scoped>
.filter {
  filter: grayscale(100%);
}

.filter-none {
  filter: none;
}

.group:hover img {
  transition: filter 0.3s ease;
}

@media (max-width: 480px) {
  .group {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.bg-gradient-to-r,
.bg-gradient-to-l {
  backdrop-filter: blur(1px);
}
</style>