// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [600, 700]
    }
  },

  app: {
    head: {
      title: 'Mirobex - Accompagner votre entreprise à pénétrer le marché béninois',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Accompagner votre entreprise à pénétrer le marché béninois' },
        { name: 'author', content: 'Mirobex' },
        { name: 'theme-color', content: '#0400f0' },
        { name: 'keywords', content: 'Mirobex, marché béninois, entreprises, expansion, Afrique' },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'Mirobex - Développez votre entreprise au Bénin' },
        { property: 'og:description', content: 'Nous aidons les entreprises à entrer efficacement sur le marché béninois.' },
        { property: 'og:image', content: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/seo.jpg' },
        { property: 'og:url', content: 'https://mirobex.bj' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mirobex - Développez votre entreprise au Bénin' },
        { name: 'twitter:description', content: 'Nous aidons les entreprises à entrer efficacement sur le marché béninois.' },
        { name: 'twitter:image', content: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/seo.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mirobex.bj' }
      ]
    }
  },

  sitemap: {
    siteUrl: process.env.FRONTEND_URL || 'https://www.mirobex.bj',
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.FRONTEND_URL || 'https://www.mirobex.bj'}/sitemap.xml`
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpFrom: process.env.SMTP_FROM,
    smtpReply: process.env.SMTP_REPLY,

    public: {
      frontendUrl: process.env.FRONTEND_URL
    }
  }
})