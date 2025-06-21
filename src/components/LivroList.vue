<template>
  <div>
    <table class="table-auto w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 border">ID</th>
          <th class="px-4 py-2 border">Título</th>
          <th class="px-4 py-2 border">Autor</th>
          <th class="px-4 py-2 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id" class="border">
          <td class="px-4 py-2 border">{{ livro.id }}</td>
          <td class="px-4 py-2 border">{{ livro.titulo }}</td>
          <td class="px-4 py-2 border">{{ livro.autor }}</td>
          <td class="px-4 py-2 border">
            <button @click="$emit('editar', livro)" class="bg-yellow-400 px-2 py-1 rounded mr-2">Editar</button>
            <button @click="deletar(livro.id)" class="bg-red-500 text-white px-2 py-1 rounded">Excluir</button>
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
