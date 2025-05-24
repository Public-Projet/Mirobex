<template>  
  <section id="client" class="bg-primary text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <!-- Image -->
      <div class="w-full md:w-2/5">
        <div class="aspect-w-16 aspect-h-9 overflow-hidden">
          <img src="/img/OLD/ClientsImg.png" alt="Nos services" class="object-contain"/>
        </div>
      </div>

      <!-- Details -->
      <div class="w-full md:w-3/5">
        <h2 class="text-4xl font-light mb-10">Notre clientèle</h2>

        <div v-for="(client, index) in clients" :key="index" class="border-b border-white/60 py-4 cursor-pointer" @click="toggleClient(index)">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-light">{{ client.title }}</h3>
            <component :is="activeClient === index ? IconMinus : IconPlus" class="w-6 h-6 text-secondary transition-transform duration-300" />
          </div>
          
          <transition name="fade-slide">
            <p v-show="activeClient === index" class="mt-2 text-sm text-stone-100">
              {{ client.description }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconPlus, IconMinus } from '@tabler/icons-vue';

const activeClient = ref<number | null>(null);

const toggleClient = (index: number) => {
  activeClient.value = activeClient.value === index ? null : index;
};

const clients = [
  { title: "Entreprises internationales",
  description: "Succursale, Mandat de gestion ou Représentation, Joint-venture." },

  { title: "Commerçants et boutiques locales",
  description: "Récherchant des solutions pour optimiser leurs activités." },

  { title: "Entreprises de taille moyenne",
  description: "Nécessitant des services externalisés ou des formations spécifiques." },

  { title: "Gouvernements et ONG",
  description: "Pour des projets nécessitant des audits, des équipements de traçabilité ou une expertise spécifique." },
];
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
