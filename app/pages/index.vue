<!-- app/pages/index.vue -->
<script setup>
useHead({
  title: 'Inicio',
  meta: [
    { name: 'description', content: 'Página de información del sitio' }
  ]
})
</script>


<template>
  <main>
    <MainHeader />
    <h1>Inicio</h1>
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><a href="https://nuxt.com">Nuxt.com</a></li>
    </ul>
    <MainFooter />
  </main>
</template>
