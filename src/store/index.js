import Vue from "vue";
import Vuex from "vuex";

import moment from "moment";
moment.locale("fr");

import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    error: null
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, todo) {
      const indexToDelete = state.todos.findIndex(t => t.id === todo.id);

      if (indexToDelete > -1) {
        state.todos.splice(indexToDelete, 1);
      }
    },
    GET_ALL_TODOS(state) {
      return state.todos;
    },
    GET_TODO(state, id) {
      const indexToGet = state.todos.findIndex(t => t.id === id);

      if (indexToGet > -1) {
        return state.todos[indexToGet];
      }
    },
    UPDATE_TODO(state, todo) {
      const indexToModifiy = state.todos.findIndex(t => t.id === todo.id);

      if (indexToModifiy > -1) {
        state.todos[indexToModifiy] = todo;
      }
    },

    // ERROR
    REMOVE_ERROR(state) {
      state.error = null;
    }
  },
  actions,
  modules: {},
  getters: {
    allTodos: state => state.todos,
    error: state => state.error
  }
});
