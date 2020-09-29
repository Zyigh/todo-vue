<template>
  <div class="bg-light">
    <List />
    <Modal @closeModal="closeModal" v-if="error">
      <div class="alert alert-danger p-4">
        <h3 class="alert-heading">
          Erreur !
        </h3>
        <p>{{ error }}</p>
      </div>
    </Modal>
  </div>
</template>

<script>
import List from "../components/List";
import Modal from "../components/Modal/Modal";

export default {
  name: "Home",
  components: {
    List,
    Modal
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch("removeError");
    }
  }
};
</script>
