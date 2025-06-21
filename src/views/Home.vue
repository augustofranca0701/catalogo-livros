<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-8 text-center">Catálogo de Livros 📚</h1>
    <LivroForm @atualizar="carregarLivros" :livroEdit="livroEdit" />
    <LivroList :livros="livros" @editar="editarLivro" @atualizar="carregarLivros" />
  </div>
</template>

<script>
import LivroForm from '../components/LivroForm.vue'
import LivroList from '../components/LivroList.vue'

export default {
  components: { LivroForm, LivroList },
  data() {
    return {
      livros: [],
      livroEdit: null
    }
  },
  methods: {
    async carregarLivros() {
      const res = await fetch('http://localhost:3000/livros');
      this.livros = await res.json();
    },
    editarLivro(livro) {
      this.livroEdit = livro;
    }
  },
  mounted() {
    this.carregarLivros();
  }
}
</script>
