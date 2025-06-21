<template>
  <div class="mb-8">
    <form @submit.prevent="salvar">
      <div class="mb-4">
        <input v-model="livro.titulo" type="text" placeholder="Título" class="border p-2 w-full"/>
      </div>
      <div class="mb-4">
        <input v-model="livro.autor" type="text" placeholder="Autor" class="border p-2 w-full"/>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ livro.id ? 'Atualizar' : 'Adicionar' }}
      </button>
    </form>
  </div>
</template>

<script>
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
        await fetch(`http://localhost:3000/livros/${this.livro.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.livro)
        });
      } else {
        await fetch('http://localhost:3000/livros', {
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
