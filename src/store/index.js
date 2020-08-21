import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {id: 98, name: 'Have to go for prayer', completed: false},
      {id: 99, name: 'Do weDeves assignment from 3 PM', completed: false},
    ]
  },
  
  mutations: {
  
    /**
     * Add to-do
     * @param state
     * @param payload Object  To-do object
     */
    add(state, payload) {
      state.todos.push(payload);
    },
  
    /**
     * Update a to-do
     * @param state
     * @param payload Object  To-do object
     */
    update(state, payload) {
      
      const index = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos.splice(index, 1, payload);
    },
  
    /**
     * Remove a to-do
     * @param state
     * @param payload Int To-do id
     */
    remove(state, payload) {
      
      const index = state.todos.findIndex(todo => todo.id === payload);
      state.todos.splice(index, 1);
    }
  },
  
  getters: {
  
    /**
     * Get all to-do items
     * @param state
     * @return Object
     */
    getAll(state) {
      return state.todos;
    },
  
    /**
     * Get one to-do item by id
     * @param state
     * @return Function (Int todoId)
     */
    getOne: state => todoId => state.todos.find(todo => todo.id === todoId),
  
    /**
     * Get to-do by completed status
     * @param state
     * @return Function (Boolean completed)
     */
    getByCompleted: state => completed => state.todos.filter(todo => todo.completed === completed)
  },
  
  actions: {
    addTodo({commit}, todo) {
      commit('add', todo);
    },
    
    updateTodo({commit}, todo) {
      commit('update', todo);
    },
    
    removeTodo({commit}, todoId) {
      commit('remove', todoId);
    }
  }
})
