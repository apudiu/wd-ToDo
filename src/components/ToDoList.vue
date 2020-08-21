<template>
  <div>

    <div class="todo-list">

      <ToDoItem
              v-for="todo in filteredTodos"
              :todo="todo"
              :key="todo.id" />

    </div>

  </div>
</template>

<script>
import ToDoItem from './ToDoItem';

export default {
  name: 'ToDoList',

  components: {
    ToDoItem
  },

  computed: {
    filteredTodos() {
      return this.$store.getters.getFiltered;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
