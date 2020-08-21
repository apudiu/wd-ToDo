<template>
  <div
    class="todo-item"
    v-b-hover="hover => isHovered=hover"
  >
    <b-checkbox size="lg" value="1" />
    <span>{{ todo.name }}</span>
    <span
      v-if="isHovered"
      class="todo-item-delete"
      @click="removeTodo"
    >
      &times;
    </span>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',

  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isHovered: false
    }
  },

  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo.id);
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-item {
    display: flex;
    align-items: center;
    padding: 5px 10px;

    span {
      font-size: 20px;
      cursor: default;
    }

    .todo-item-delete {
      position: absolute;
      right: 20px;
      color: darkred;
      cursor: pointer;
    }
  }

</style>
