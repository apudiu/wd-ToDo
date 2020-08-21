<template>
  <div>

    <div
      class="todo-list"
      v-if="todos.length">

      <ToDoItem
              v-for="todo in todos"
              :todo="todo"
              :key="todo.id" />

    </div>
    <div v-else>
      There's no todo!
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

  data() {
    return {

    };
  },

  computed: {
    todos() {
      return this.$store.getters.getAll;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
