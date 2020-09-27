<template>
  <Modal @closeModal="closeModal">
    <div class="bg-light p-4">
      <form v-on:submit.prevent="upsertTodo" action="/">
        <div class="form-row">
          <h4>
            <span v-if="upsertedTodo.id">Mettre à jour</span>
            <span v-else>Créer</span>
            une To Do
          </h4>
        </div>
        <div class="mb-4">
          <div v-if="upsertedTodo.id" class="form-row mb-2">
            <label class="mr-1">ID :</label>
            <span>{{ upsertedTodo.id }}</span>
          </div>
          <div class="form-group mb-2">
            <label for="todo">To do :</label>
            <input
              type="text"
              id="todo"
              v-model="upsertedTodo.todo"
              class="form-control"
            />
          </div>
          <div class="form-group d-flex mb-2">
            <label class="form-check-label mr-2">Done :</label>
            <b-checkbox id="done" v-model="upsertedTodo.done" />
          </div>
          <div class="mb-2" v-if="upsertedTodo.createdAt">
            <label class="mr-1">Créé le :</label>
            <span>{{ upsertedTodo.createdAt.format("DD/MM/yyyy") }}</span>
          </div>
        </div>
        <div class="form-row">
          <button type="submit" class="btn btn-success">
            {{ submitText }}
          </button>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script>
import { cloneDeep } from "lodash/fp";
import Modal from "./Modal";

const defaultTodo = {
  todo: "",
  done: false
};

export default {
  components: { Modal },
  props: {
    todo: { type: Object, required: false, default: () => {} }
  },
  data() {
    return {
      upsertedTodo: cloneDeep({ ...defaultTodo, ...this.todo }),
      isDisplayed: this.isVisible
    };
  },
  computed: {
    submitText() {
      if (this.upsertedTodo.id) {
        return "Mettre à jour la todo";
      }

      return "Créer une todo";
    }
  },
  methods: {
    upsertTodo() {
      if (this.upsertedTodo.id) {
        this.$store.dispatch("updateTodo", this.upsertedTodo);
        this.$emit("refresh");
      } else {
        this.$store.dispatch("addTodo", this.upsertedTodo);
      }
      this.$emit("closeModal");
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>
