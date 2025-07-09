import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.bluealpha.ai',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'BlueAlpha Sans',
        cssVariable: '--font-sans',
        variants: [{ style: 'normal', src: ['src/assets/fonts/sans.woff2'] }]
      },
      {
        provider: 'local',
        name: 'BlueAlpha Mono',
        cssVariable: '--font-mono',
        variants: [{ style: 'normal', src: ['src/assets/fonts/mono.woff2'] }]
      }
    ]
  }
})
