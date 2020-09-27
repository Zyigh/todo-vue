import moment from 'moment/moment'
import {cloneDeep} from 'lodash/fp'

export default {
  addTodo({commit}, addedTodo) {
    const base = {
      id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = parseFloat('0.' + Math.random().toString().replace('0.', '') + new Date().getTime()) * 16 | 0,
          v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16)
      }),
      createdAt: moment()
    }

    const todo = cloneDeep({...base, ...addedTodo})

    commit("ADD_TODO", todo);
  },
  deleteTodo({commit}, todo) {
    commit("DELETE_TODO", todo);
  },
  getAllTodos({commit}, todo) {
    commit("GET_ALL_TODOS", todo)
  },
  getTodo({commit}, todo) {
    commit("GET_TODO", todo);
  },
  updateTodo({commit}, todo) {
    commit("UPDATE_TODO", todo);
  },
}