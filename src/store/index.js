import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {id: 1, name: 'Have to go for prayer', completed: false},
      {id: 2, name: 'Do weDeves assignment from 3 PM', completed: false},
    ]
  },
  
  mutations: {
    add(state, payload) {
      state.todos.push(payload);
    },
    
    remove(state, payload) {
      
      const index = state.todos.findIndex(todo => todo.id === payload)
      state.todos = state.todos.splice(index, 1);
    }
  },
  
  getters: {
    getAll(state) {
      return state.todos;
    },
    
    getOne: state => todoId => state.todos.find(todo => todo.id === todoId)
  },
  
  actions: {
    addTodo({commit}, todo) {
      commit('add', todo);
    },
    
    removeTodo({commit}, todoId) {
      commit('remove', todoId);
    }
  }
})
