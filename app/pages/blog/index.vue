<!-- app/pages/blog/index.vue -->
<template>
  <div class="container">
    <h1>Blog de noticias</h1>
    <AppSearchInput />
    <ul>
      <li><NuxtLink to="/blog/sucesos">Sucesos</NuxtLink></li>
      <li><NuxtLink to="/blog/deportes">Deportes</NuxtLink></li>
      <li><NuxtLink to="/blog/espectaculos">Espectáculos</NuxtLink></li>
    </ul>
  </div>
</template>
