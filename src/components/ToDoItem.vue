<template>
  <div
    class="todo-item"
    v-b-hover="hover => isHovered=hover"
  >
    <b-checkbox
      size="lg"
      :checked="todo.completed"
      @change="toggleCompleted" />

    <span
      v-if="!editing"
      :class="{'completed': todo.completed}"
      @dblclick="enableEditing"
    >
      {{ todoTitle }}
    </span>

    <b-input
      v-else
      class="todo-input-edit"
      type="text"
      v-model="todoTitle"
      v-focus
      @keypress.enter="updateTodo"
      @blur="disableEditing"
    />

    <span
      v-if="isHovered && !editing"
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

  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },

  data() {
    return {
      isHovered: false,
      todoTitle: this.todo.name,
      editing: false
    }
  },

  methods: {

    // prepares editing
    enableEditing() {

      // enable editing flag
      this.editing = true;
    },

    // disables editing mode
    disableEditing() {
      this.editing = false;
    },

    // update item
    updateTodo() {

      // update the item
      this.$store.dispatch('updateTodo', {
        ...this.todo,
        name: this.todoTitle
      });

      // disable editing
      this.disableEditing();
    },

    // delete an item
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo.id);
    },

    // toggles item completed status
    toggleCompleted() {
      this.$store.dispatch('updateTodo', {
        ...this.todo,
        completed: !this.todo.completed
      });
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

      &.completed {
        text-decoration: line-through;
        opacity: .45;
      }
    }

    .todo-input-edit {
      font-size: 20px;
    }

    .todo-item-delete {
      position: absolute;
      right: 20px;
      color: darkred;
      cursor: pointer;
    }
  }

</style>
