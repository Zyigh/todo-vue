<template>
  <Modal @closeModal="closeModal">
    <div class="alert alert-danger p-4">
      <h3 class="alert-heading">
        Vous êtes sur le point de supprimer une todo
      </h3>
      <p>Êtes-vous sûr de vouloir supprimer cette todo :</p>
      <p class="font-weight-bold">{{ todo.todo }}</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-danger" @click="deleteTodo">Ça gicle !</button>
        <button class="btn btn-primary" @click="closeModal">On garde !</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "DeleteModal",
  components: { Modal },
  props: {
    todo: { type: Object }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo);
      this.$emit("closeModal");
    }
  }
};
</script>
