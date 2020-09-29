import applyCaseMiddleware from 'axios-case-converter';
import axios from "axios";
import conf from "../conf";

export default {
  init() {
    this.axios = applyCaseMiddleware(axios.create({
      baseURL: conf.API_URL,
      timeout: 2000
    }));

    return this;
  },

  getAll() {
    return this.axios.get("/");
  },

  create(todo) {
    return this.axios.post("/", { todo });
  },

  update(todo) {
    return this.axios.put("/", { todo });
  },

  delete(todo) {
    return this.axios.delete(`/${todo.id}`);
  }
}.init();
