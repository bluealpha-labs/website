import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from './src/plugins/rehype-external-links'

export default defineConfig({
  site: 'https://bluealpha.ai',
  integrations: [
    react(),
    sitemap(),
    mdx({ rehypePlugins: [rehypeExternalLinks as any] })
  ],
  markdown: {
    rehypePlugins: [rehypeExternalLinks as any]
  },
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
