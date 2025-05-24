<template>
  <main class="py-8 sm:py-16">
    <TheHeader />
    <!-- Hero section -->
    <section class="relative py-16 sm:py-24 bg-cover bg-center" style="background-image: url('/img/HeroImg.jpg');">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">Centre de contact</h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Vous avez besoin d'aide, n'hésitez pas à nous contacter pour plus d'assistance.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10">
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12">
        <!-- Formulaire de contact -->
         <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
          <div class="pb-4">
            <h2 class="text-2xl font-bold">Envoyez-nous un message</h2>
            <p class="text-sm">Nous visons à répondre à toutes les demandes dans un délai de 2 à 4 jours ouvrables.</p>
          </div>

          <!-- Message de statut -->
          <div v-if="submitStatus.message" :class="{
            'bg-green-100 text-green-700': submitStatus.success,
            'bg-red-100 text-red-700': !submitStatus.success
          }" class="p-4 rounded-md mb-4">
            <div class="flex justify-between items-start">
              <div>
                {{ submitStatus.message }}
                <div v-if="submitStatus.success && submitStatus.ticketNumber" class="mt-2 flex items-center gap-2">
                  <strong>Numéro de ticket :</strong> {{ submitStatus.ticketNumber }}
                </div>
              </div>
              <button v-if="submitStatus.success && submitStatus.ticketNumber"
                @click="copyToClipboard(submitStatus.ticketNumber)"
                class="p-1 rounded hover:bg-green-200 transition-colors" title="Copier le numéro de ticket">
                <IconCopy class="h-5 w-5" />
              </button>
            </div>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="relative">
              <IconUser
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 peer-focus:text-primary transition-colors" />
              <input v-model="form.name" type="text" id="name" placeholder=" " required
                class="text-gray-700 block px-10 pb-2 pt-3 w-full text-sm bg-white rounded-lg border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" />
              <label for="name" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2
                peer-focus:px-2 peer-focus:text-primary
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2
                peer-focus:top-3
                peer-focus:scale-75 peer-focus:-translate-y-4 left-8">
                Prénoms et Nom
              </label>
            </div>

            <div class="relative">
              <IconMail
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 peer-focus:text-primary transition-colors" />
              <input v-model="form.email" type="email" id="email" placeholder=" " required
                class="text-gray-700 block px-10 pb-2 pt-3 w-full text-sm bg-white rounded-lg border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" />
              <label for="email" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-2
                peer-focus:px-2 peer-focus:text-primary
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2
                peer-focus:top-3
                peer-focus:scale-75 peer-focus:-translate-y-4 left-8">
                Adresse email
              </label>
            </div>

            <div>
              <label for="subject" class="block text-sm text-gray-700">Sujet</label>
              <select id="subject" v-model="form.subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-8"
                required>
                <option value="" disabled>-- Sélectionnez un sujet --</option>
                <option value="Demande de rendez-vous">Demande de rendez-vous</option>
                <option value="Demande de devis">Demande de devis</option>
                <option value="Support technique">Support technique</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div class="relative">
              <textarea id="message" v-model="form.message" rows="4" placeholder=" "
                class="block px-3 pb-2 pt-3 w-full text-sm bg-white rounded-lg border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                required></textarea>
              <label for="message" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white 
                px-2 peer-focus:px-2 peer-focus:text-primary
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/4
                peer-focus:top-3 peer-focus:scale-75
                peer-focus:-translate-y-4 left-1">
                Votre message
              </label>
            </div>

            <!-- Bouton -->
            <button type="submit"
               class="w-full bg-primary text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-secondary hover:text-black transition-colors disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
              :disabled="isSubmitting">
              <div class="flex items-center justify-center gap-2">
                <template v-if="!isSubmitting">
                  Envoyer
                  <IconSend class="w-5 h-5" />
                </template>
                <template v-else>
                  Envoi en cours...
                  <IconLoader class="w-5 h-5 animate-spin" />
                </template>
              </div>
            </button>
          </form>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-6 sm:space-y-8">
          <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
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
                  <a href="mailto:contact@mirobex.bj" class="text-primary hover:underline">
                    contact@mirobex.bj
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <IconPhone class="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 class="font-semibold mb-1">Téléphones</h3>
                  <a href="tel:+2290147797912" class="text-primary hover:underline">
                    +229 0147797912
                  </a>
                  <br />
                  <a href="tel:+2290168543878" class="text-primary hover:underline">
                    +229 0168543878
                  </a>
                </div>
              </div>
            </div>
          </div>

           <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
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

<script setup lang="ts">
import { IconMapPin, IconMail, IconPhone, IconUser, IconSend, IconLoader, IconCopy } from '@tabler/icons-vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref({
  success: false,
  message: '',
  ticketNumber: '' as any
})

let timeoutId: NodeJS.Timeout | null = null

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = {
    success: false,
    message: '',
    ticketNumber: ''
  }

  if (timeoutId) clearTimeout(timeoutId)

  try {
    const response = await $fetch('/api/send-contact', {
      method: 'POST',
      body: form.value
    })

    submitStatus.value = {
      success: true,
      message: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
      ticketNumber: response.ticketNumber
    }

    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer plus tard.",
      ticketNumber: ''
    }
    console.error('Erreur:', error)
  } finally {
    isSubmitting.value = false

    timeoutId = setTimeout(() => {
      submitStatus.value.message = ''
      submitStatus.value.ticketNumber = ''
    }, 10000)
  }
}

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    submitStatus.value.message = 'Numéro de ticket copié !'
    setTimeout(() => {
      submitStatus.value.message = 'Message envoyé avec succès ! Nous vous répondrons bientôt.'
    }, 2000)
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
  }
}

useHead({
  title: 'Contactez-nous',
  meta: [{ name: 'description', content: 'Contacter Mirobex pour d\'éventuelles préoccupations.' }]
})
</script>