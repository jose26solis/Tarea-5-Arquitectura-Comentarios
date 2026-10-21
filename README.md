# Tarea 5 - Jose Alexis Solís Carvajal

**Sitio publicado (Netlify):** https://fabulous-gumption-05ddb2.netlify.app/blog

Ejemplo de noticia con comentarios: https://fabulous-gumption-05ddb2.netlify.app/blog/deportes/jose-giacone

**Repositorio de comentarios (Utterances):** https://github.com/jose26solis/comentarios-blog-noticias

## Descripción

Se agregaron comentarios de lectores al blog de noticias usando Utterances, que guarda cada comentario como un issue en un repositorio público de GitHub (sin base de datos propia ni publicidad).

1. Se creó el repositorio público `comentarios-blog-noticias` y se le instaló la app de Utterances.
2. Se creó el componente `app/components/CommentsUtterances.vue`. Agrega el script de Utterances en el navegador (`onMounted`) y lo recarga con un `watch` sobre la ruta, para que al pasar de una noticia a otra con los botones anterior/siguiente se cargue el hilo correcto.
3. Cada página se asocia a un issue mediante su ruta (`issue-term` = pathname), así cada noticia tiene su propio hilo.
4. El componente se incluyó en `app/pages/blog/[...slug].vue`, la página que despliega todas las noticias. Usa el tema `preferred-color-scheme`, que se adapta al modo claro/oscuro del sistema.

## Cómo ejecutar

```bash
npm install
npm run dev
npm run generate   # sitio estático en .output/public (lo que se sube a Netlify)
```
