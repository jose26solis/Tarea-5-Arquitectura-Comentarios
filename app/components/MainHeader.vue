<!-- app/components/TheHeader.vue -->
<script setup>
const counter = useCounter()
</script>

<template>
  <p>Header Section - visitas: {{ counter }}
    <button @click="counter++">+1</button>
  </p>
</template>
