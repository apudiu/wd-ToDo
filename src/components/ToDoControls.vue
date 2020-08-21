<template>
  <b-row  class="todo-controls">
    <b-col>4 items left</b-col>

    <b-col cols="5" class="filters">
      <b-button size="sm" variant="outline-secondary">All</b-button>
      <b-button size="sm" variant="outline-primary">Active</b-button>
      <b-button size="sm" variant="outline-success">Completed</b-button>
    </b-col>

    <b-col>
      <b-button size="sm" variant="link" class="text-muted">Clear completed</b-button>
    </b-col>

  </b-row>
</template>

<script>
export default {
  name: 'ToDoControls',
  props: {}
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
