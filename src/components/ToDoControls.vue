<template>
  <b-row  class="todo-controls">
    <b-col>{{ activeTodosCount }} item<span v-if="activeTodosCount > 1">s</span>  left</b-col>

    <b-col cols="5" class="filters">
      <b-button size="sm" variant="outline-secondary">All</b-button>
      <b-button size="sm" variant="outline-secondary">Active</b-button>
      <b-button size="sm" variant="outline-primary">Completed</b-button>
    </b-col>

    <b-col>
      <b-button
        v-if="completedTodosCount"
        size="sm"
        variant="link"
        class="text-muted"
      >
        Clear completed
      </b-button>
    </b-col>

  </b-row>
</template>

<script>
export default {
  name: 'ToDoControls',
  props: {},
  computed: {
    todos() {
      return this.$store.getters.getAll;
    },
    activeTodosCount() {
      return this.$store.getters.getByCompleted(false).length;
    },
    completedTodosCount() {
      return this.$store.getters.getByCompleted(true).length;
    }
  }
}
</script>

<style lang="scss">
  .todo-controls {
    margin-top: 20px;

    .filters {
      display: flex;
      justify-content: space-around;
    }
  }
</style>
