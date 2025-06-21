<template>
  <div class="border border-white rounded-md overflow-hidden">
    <table class="table-auto w-full border">
      <thead>
        <tr class="bg-stone-950">
          <th class="px-4 py-2 border">ID</th>
          <th class="px-4 py-2 border">Título</th>
          <th class="px-4 py-2 border">Autor</th>
          <th class="px-4 py-2 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="livro in livros"
          :key="livro.id"
          class="border hover:bg-stone-800 transition"
        >
          <td class="px-4 py-2 border">{{ livro.id }}</td>
          <td class="px-4 py-2 border">{{ livro.titulo }}</td>
          <td class="px-4 py-2 border">{{ livro.autor }}</td>
          <td class="px-4 py-2 border">
            <button
              @click="$emit('editar', livro)"
              class="bg-yellow-400 px-3 py-1 rounded-md mr-2 hover:bg-yellow-500 transition"
            >
              Editar
            </button>
            <button
              @click="deletar(livro.id)"
              class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['livros'],
  methods: {
    async deletar(id) {
      await fetch(`http://localhost:3000/livros/${id}`, { method: 'DELETE' });
      this.$emit('atualizar');
    }
  }
}
</script>
