import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginAstro from 'eslint-plugin-astro'

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  { files: ['*.astro'], processor: 'astro/client-side-ts' }
])
