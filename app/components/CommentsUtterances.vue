<!-- app/components/CommentsUtterances.vue -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  repo: string
  theme?: string
  issueTerm?: string
}>(), {
  theme: 'preferred-color-scheme',
  issueTerm: 'pathname'
})

const container = ref<HTMLElement | null>(null)
const route = useRoute()

// Con 'pathname' se usa la ruta del artículo (sin la barra final, para que
// /blog/x y /blog/x/ compartan el mismo hilo de comentarios en el hosting).
function termino() {
  if (props.issueTerm !== 'pathname') return props.issueTerm
  return route.path.replace(/^\/+|\/+$/g, '') || 'index'
}

function loadComments() {
  if (!container.value) return
  container.value.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', props.repo)
  script.setAttribute('issue-term', termino())
  script.setAttribute('label', 'comments')
  script.setAttribute('theme', props.theme)
  container.value.appendChild(script)
}

onMounted(loadComments)
watch(() => route.path, loadComments)
</script>

<template>
  <div ref="container" class="comments" />
</template>
