<!-- app/components/Author.vue -->
<script setup>
defineProps({
  author: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="author">
    <img :src="author.image" :alt="author.name" />
    <div>
      <h4>Autor</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>
