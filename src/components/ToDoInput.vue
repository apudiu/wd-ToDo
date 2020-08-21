<template>
  <div>
    <b-input
      class="todo-input"
      type="text"
      placeholder="What need to be done?"
    />
  </div>
</template>

<script>
export default {
  name: 'ToDoInput',
  props: {}
}
</script>

<style scoped lang="scss">
  .todo-input {
    margin-bottom: 20px;
    font-size: 20px;
  }
</style>
