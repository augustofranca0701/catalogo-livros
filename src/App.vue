<template>
  <div class="p-6">
    <nav class="flex gap-4 mb-8">
      <RouterLink
        to="/"
        class="px-6 py-2 border border-white rounded-full no-underline transition"
        :class="route.path === '/' ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'"
      >
        CRUD Livros
      </RouterLink>
      <RouterLink
        to="/api"
        class="px-6 py-2 border border-white rounded-full no-underline transition"
        :class="route.path === '/api' ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'"
      >
        Buscar na API
      </RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
