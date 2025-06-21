<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Buscar Livros na API</h1>

    <div class="flex gap-4 mb-6">
      <input
        v-model="busca"
        @keyup.enter="buscarLivros"
        type="text"
        placeholder="Digite o nome do livro..."
        class="border rounded px-4 py-2 w-full"
      />
      <button
        @click="buscarLivros"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buscar
      </button>
    </div>

    <div v-if="livros.length === 0">
      <p>Nenhum livro encontrado.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="livro in livros"
        :key="livro.id"
        class="border rounded p-4 shadow hover:shadow-lg transition"
      >
        <img
          :src="livro.volumeInfo.imageLinks?.thumbnail"
          alt="Capa do livro"
          class="w-full h-60 object-cover mb-4"
        />
        <h2 class="text-xl font-semibold">
          {{ livro.volumeInfo.title }}
        </h2>
        <p class="text-sm text-gray-500 mb-2">
          {{ livro.volumeInfo.authors?.join(', ') }}
        </p>
        <p class="text-sm line-clamp-3">
          {{ livro.volumeInfo.description || 'Sem descrição disponível.' }}
        </p>
        <a
          :href="livro.volumeInfo.previewLink"
          target="_blank"
          class="text-blue-600 underline mt-2 block"
        >
          Ver mais
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const busca = ref('')
const livros = ref([])

const buscarLivros = async () => {
  if (!busca.value) return

  const resposta = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(busca.value)}`
  )
  const dados = await resposta.json()
  livros.value = dados.items || []
}
</script>
