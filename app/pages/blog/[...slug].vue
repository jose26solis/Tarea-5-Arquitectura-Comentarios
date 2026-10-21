<!-- app/pages/blog/[...slug].vue -->
<script setup>
const route = useRoute()
const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .where('category', '=', article.value?.category)
    .order('date', 'DESC')
})
</script>

<template>
  <article class="container">
    <ContentRenderer :value="article" />
    <Author :author="article.author" />
    <PrevNext :prev="surround?.[0]" :next="surround?.[1]" />
    <section class="comentarios">
      <h3>Comentarios de los lectores</h3>
      <p>Inicie sesión con su cuenta de GitHub para dejar un comentario sobre esta noticia.</p>
      <CommentsUtterances repo="jose26solis/comentarios-blog-noticias" />
    </section>
  </article>
</template>
