<template>
  <b-row  class="todo-controls">
    <b-col>{{ activeTodosCount }} item<span v-if="activeTodosCount > 1">s</span>  left</b-col>

    <b-col cols="5" class="filters">
      <b-button
        size="sm"
        variant="outline-secondary"
        :class="{active: filter === 'all'}"
        @click="setFilter('all')"
      >
        All
      </b-button>
      <b-button
        size="sm"
        variant="outline-secondary"
        :class="{active: filter === 'active'}"
        @click="setFilter('active')"
      >
        Active
      </b-button>
      <b-button
        size="sm"
        variant="outline-primary"
        :class="{active: filter === 'completed'}"
        @click="setFilter('completed')"
      >
        Completed
      </b-button>
    </b-col>

    <b-col>
      <b-button
        v-if="completedTodosCount"
        size="sm"
        variant="link"
        class="text-muted"
        @click="removeCompleted"
      >
        Clear completed
      </b-button>
    </b-col>

  </b-row>
</template>

<script>
export default {
  name: 'ToDoControls',

  computed: {
    filter() {
      return this.$store.state.filter;
    },
    activeTodosCount() {
      return this.$store.getters.getByCompleted(false).length;
    },
    completedTodosCount() {
      return this.$store.getters.getByCompleted(true).length;
    }
  },

  methods: {

    setFilter(filter) {
      this.$store.dispatch('setTodoFilter', filter);
    },

    removeCompleted() {
      this.$store.dispatch('removeCompletedTodos');
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
