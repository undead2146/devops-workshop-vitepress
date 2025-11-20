import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'DevOps Workshop',
    description: 'Interactive CI/CD Workshop with GitHub Actions',
    base: '/devops-workshop-vitepress/',

    ignoreDeadLinks: true,

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#2563eb' }]
    ],

    themeConfig: {
      logo: '/logo.png',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Setup', link: '/setup' },
        {
          text: 'DevOps Theorie',
          items: [
            { text: 'CI/CD Overzicht', link: '/theory/cicd' },
            { text: 'Code Fase Theorie', link: '/theory/code' },
            { text: 'Build Fase Theorie', link: '/theory/build' },
            { text: 'Test Fase Theorie', link: '/theory/test' },
            { text: 'Release Fase Theorie', link: '/theory/release' },
            { text: 'Deploy Fase Theorie', link: '/theory/deploy' }
          ]
        },
        {
          text: 'Workshop Fasen',
          items: [
            { text: '1. Code Fase', link: '/phases/01-code' },
            { text: '2. Build Fase', link: '/phases/02-build' },
            { text: '3. Test Fase', link: '/phases/03-test' },
            { text: '4. Release Fase', link: '/phases/04-release' },
            { text: '5. Deploy Fase', link: '/phases/05-deploy' }
          ]
        },
        {
          text: 'Bronnen',
          items: [
            { text: 'Probleemoplossing', link: '/resources/troubleshooting' },
            { text: 'Uitbreidingen', link: '/resources/extensions' },
            { text: 'Feedback', link: '/resources/feedback' }
          ]
        }
      ],

      sidebar: {
        '/': [
          {
            text: 'Aan de Slag',
            items: [
              { text: 'Welkom', link: '/' },
              { text: 'Setup & Vereisten', link: '/setup' },
              { text: 'Workshop Schema', link: '/schedule' },
              { text: 'Jouw Voortgang', link: '/progress' }
            ]
          },
          {
            text: 'DevOps Theorie',
            items: [
              { text: 'CI/CD Overzicht', link: '/theory/cicd' },
              { text: 'Code Fase Theorie', link: '/theory/code' },
              { text: 'Build Fase Theorie', link: '/theory/build' },
              { text: 'Test Fase Theorie', link: '/theory/test' },
              { text: 'Release Fase Theorie', link: '/theory/release' },
              { text: 'Deploy Fase Theorie', link: '/theory/deploy' }
            ]
          },
          {
            text: 'Workshop Fasen',
            items: [
              { text: '1. Code Fase', link: '/phases/01-code' },
              { text: '2. Build Fase', link: '/phases/02-build' },
              { text: '3. Test Fase', link: '/phases/03-test' },
              { text: '4. Release Fase', link: '/phases/04-release' },
              { text: '5. Deploy Fase', link: '/phases/05-deploy' }
            ]
          },
          {
            text: 'Bronnen',
            items: [
              { text: 'Probleemoplossing', link: '/resources/troubleshooting' },
              { text: 'Uitbreidingen', link: '/resources/extensions' },
              { text: 'Feedback', link: '/resources/feedback' }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/undead2146/devops-workshop-vitepress' }
      ],

      footer: {
        message: 'DevOps Workshop - Leren door te Doen',
        copyright: '© 2025 GeneralsHub'
      },

      search: {
        provider: 'local'
      }
    },

    markdown: {
      lineNumbers: true,
      container: {
        tipLabel: '💡 Tip',
        warningLabel: '⚠️ Waarschuwing',
        dangerLabel: '🚨 Belangrijk',
        infoLabel: 'ℹ️ Info',
        detailsLabel: 'Details'
      }
    }
  }),

  // Mermaid configuration
  {
    theme: 'default'
  }
)
