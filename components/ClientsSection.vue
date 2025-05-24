<template>
  <section id="client" class="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
    <div class="bg-pmrDark text-white py-12 sm:py-20 px-4 sm:px-8 md:px-16 rounded-2xl">
      <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12">

        <!-- Détails -->
        <div class="w-full md:w-3/5">
          <h2 class="text-3xl sm:text-4xl mb-8 sm:mb-10 font-[Poppins,sans-serif] text-secondary text-center md:text-left">
            Notre clientèle
          </h2>

          <div v-for="(client, index) in clients" :key="index" class="border-b border-white/60 py-4 cursor-pointer"
            @click="toggleClient(index)">
            <div class="flex justify-between items-center">
              <h3 class="text-xl sm:text-2xl font-light">{{ client.title }}</h3>
              <component :is="activeClients.includes(index) ? IconMinus : IconPlus"
                class="w-5 h-5 sm:w-6 sm:h-6 text-secondary transition-transform duration-300" />
            </div>

            <transition name="fade-slide">
              <p v-show="activeClients.includes(index)" class="mt-2 text-base sm:text-xl text-gray-300">
                {{ client.description }}
              </p>
            </transition>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-2/5">
          <div class="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <img src="/img/ClientsImg.png" alt="Nos services" class="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconPlus, IconMinus } from '@tabler/icons-vue';

const activeClients = ref<number[]>([]);

const toggleClient = (index: number) => {
  const currentIndex = activeClients.value.indexOf(index);
  if (currentIndex > -1) {
    activeClients.value.splice(currentIndex, 1);
  } else {
    activeClients.value.push(index);
  }
};

const clients = [
  {
    title: "Entreprises internationales",
    description: "Succursale, Mandat de gestion ou Représentation, Joint-venture"
  },
  {
    title: "Commerçants et boutiques locales",
    description: "Etablissements, PME recherchant des solutions pour optimiser leurs activités"
  },
  {
    title: "Entreprises de taille moyenne",
    description: "nécessitant des services externalisés ou des formations spécifiques"
  },
  {
    title: "Gouvernements et ONG",
    description: "pour des projets nécessitant des audits, des équipements de traçabilité ou une expertise spécifique"
  },
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
