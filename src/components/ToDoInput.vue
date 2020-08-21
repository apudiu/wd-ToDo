<template>
  <div>
    <b-input
      class="todo-input"
      type="text"
      placeholder="What needs to be done?"
      v-model="todoName"
      @keypress.enter="addItem"
    />
  </div>
</template>

<script>
export default {
  name: 'ToDoInput',

  props: {},

  data() {
    return {
      todoName: '',
      lastInsertId: 0
    }
  },

  methods: {

    /**
     * Inserts new to-do item into store
     * @return void
     */
    addItem() {

      const todo  = this.getNewTodo();

      // don't continue if we don't have the to-do
      if (!todo) {
        return;
      }

      // push it to the store
      this.$store.dispatch('addTodo', todo);
    },

    /**
     * Prepares new to-do item
     * @return boolean|Object
     */
    getNewTodo() {

      const todoName = this.todoName.trim();

      // dont continue if nothing inserted
      if (!todoName.length) {
        return false;
      }

      // update last insert id
      this.lastInsertId +=1;

      const todo = {
        id: this.lastInsertId,
        name: todoName,
        completed: false
      }

      // clear input
      this.todoName = '';

      return todo;
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-input {
    margin-bottom: 20px;
    font-size: 20px;
    font-style: italic;
  }
</style>
