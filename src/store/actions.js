import api from "../utils/api";

export default {
  async addTodo({ commit }, addedTodo) {
    const todo = await api.create(addedTodo);
    commit("ADD_TODO", todo);
  },
  async deleteTodo({ commit }, deletedTodo) {
    const todo = await api.delete(deletedTodo);
    commit("DELETE_TODO", todo);
  },
  async getAllTodos({ commit }) {
    const todos = await api.getAll();

    commit("GET_ALL_TODOS", todos);
  },
  getTodo({ commit }, todo) {
    commit("GET_TODO", todo);
  },
  async updateTodo({ commit }, updatedTodo) {
    const todo = await api.update(updatedTodo);

    commit("UPDATE_TODO", todo);
  },

  // Error
  removeError({ commit }) {
    commit("REMOVE_ERROR");
  }
};
