<template>
  <div class="todo-item">
    <b-checkbox size="lg" value="1" />
    <span>{{ todo.name }}</span>
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
    }
  }

</style>
