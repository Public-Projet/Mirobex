<template>
  <main class="py-16">
    <TheHeader />

    <!-- Hero section -->
    <section class="relative py-24 bg-cover bg-center" style="background-image: url('/img/HeroImg.jpg');">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Centre de contact</h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Vous avez besoin d'aide, n'hésitez pas à nous contacter pour plus d'assistance.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulaire de contact -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Prénoms et Nom</label>
              <input type="text" id="name" v-model="form.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-8"
                placeholder="ex: Marcias LALEYE" required />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
              <input type="email" id="email" v-model="form.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-8"
                placeholder="Votre adresse email valide" required />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Sujet</label>
              <select id="subject" v-model="form.subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-8"
                required>
                <option value="" disabled>-- Sélectionnez un sujet --</option>
                <option value="rdv">Demande de rendez-vous</option>
                <option value="devis">Demande de devis</option>
                <option value="support">Support technique</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" v-model="form.message" rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Comment pouvons-nous vous aider ?" required></textarea>
            </div>
            <button type="submit"
              class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
              Envoyer
            </button>
          </form>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <IconMapPin class="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 class="font-semibold mb-1">Adresse</h3>
                  <p class="text-gray-600">Cotonou<br />République du Bénin</p>
                </div>
              </div>
              <div class="flex items-start">
                <IconMail class="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 class="font-semibold mb-1">Adresse email</h3>
                  <a href="mailto:contact@mirobex.bj" class="text-primary hover:text-secondary">
                    contact@mirobex.bj
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <IconPhone class="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 class="font-semibold mb-1">Téléphones</h3>
                  <a href="tel:+2290147797912" class="text-primary hover:text-secondary">
                    +229 01 47797912
                  </a>
                  <br />
                  <a href="tel:+2290168543878" class="text-primary hover:text-secondary">
                    +229 01 68543878
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6">Horaires d'ouverture</h2>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>8h00 - 17h30</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Samedi - Dimanche</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { IconMapPin, IconMail, IconPhone } from '@tabler/icons-vue'
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>