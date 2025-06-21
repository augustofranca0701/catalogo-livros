<template>
  <div class="mb-8 bg-stone-900 p-6 rounded-lg">
    <form @submit.prevent="salvar">
      <div class="mb-4">
        <input
          v-model="livro.titulo"
          type="text"
          placeholder="Título"
          class="border border-white p-2 w-full rounded-md bg-transparent text-white"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="livro.autor"
          type="text"
          placeholder="Autor"
          class="border border-white p-2 w-full rounded-md bg-transparent text-white"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {{ livro.id ? 'Atualizar' : 'Adicionar' }}
      </button>
    </form>
  </div>
</template>


<script>
const API_URL = 'https://68573c9a21f5d3463e54c950.mockapi.io/api/v1/books';

export default {
  props: ['livroEdit'],
  data() {
    return {
      livro: {
        titulo: '',
        autor: ''
      }
    }
  },
  watch: {
    livroEdit: {
      handler(novo) {
        this.livro = novo ? { ...novo } : { titulo: '', autor: '' };
      },
      immediate: true
    }
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await fetch(`${API_URL}/${this.livro.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.livro)
        });
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.livro)
        });
      }
      this.$emit('atualizar');
      this.livro = { titulo: '', autor: '' };
    }
  }
}
</script>

