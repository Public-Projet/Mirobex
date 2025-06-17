<template>
  <section class="relative text-white py-20 px-4 md:px-8 rounded-3xl overflow-hidden shadow-xl mx-4 md:mx-16 mb-16">
    <!-- Fond avec image et dégradé -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/img/HeroVector.png" 
        alt="Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-pmrDark/70 via-pmrDark/90 to-pmrDark/40"></div>
    </div>

    <!-- Contenu -->
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Intégrez une équipe au service de votre marque
      </h2>
      <p class="text-xm mb-10 opacity-90">
        Vous avez le sens du détail, du relationnel et une vraie culture de marque ? Faites la différence avec nous.
      </p>
      <NuxtLink 
        to="/contact" 
        class="inline-block bg-white text-pmrDark font-bold py-3 px-8 md:py-4 md:px-10 rounded-md text-lg md:text-xl shadow-md hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-secondary"
      >
        Rejoignez-nous
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
/* Ajustements pour les petits écrans */
@media (max-width: 640px) {
  section {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .rounded-3xl {
    border-radius: 1.5rem;
  }
}
</style>