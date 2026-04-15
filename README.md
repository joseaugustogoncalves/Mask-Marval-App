# marvel-mask-ar

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# Instalar TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar Face-api.js
npm install face-api.js

# Instalar PWA plugin
npm install -D vite-plugin-pwa


# Instalar Pinia
npm install pinia

# Instalar Vue Router
npm install vue-router

# Instalar TailwindCSS
npm install -D tailwindcss postcss autoprefixer

# Instalar Face-api.js
npm install face-api.js

# Instalar PWA plugin
npm install -D vite-plugin-pwa

Como publicar Vue no GitHub Pages
1️⃣ No projeto Vue/Vite
npm run build

Vai gerar:

dist/
2️⃣ Criar branch gh-pages

Instala helper:

npm install gh-pages --save-dev
3️⃣ No package.json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
4️⃣ Deploy
npm run deploy

Vai publicar automaticamente no GitHub Pages.