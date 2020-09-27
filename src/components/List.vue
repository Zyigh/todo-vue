<template>
    <div>
        <div>
            <button class="btn btn-primary" @click="addTodo">Add Todo</button>
        </div>
        <b-table striped hover responsive :items="todos" :fields="fields" ref="todos">
            <template v-slot:cell(done)="data">
                <b-checkbox v-model="data.item.done" @change="updateDone(data.item)" />
            </template>

            <template v-slot:cell(createdAt)="data">
                {{ data.item.createdAt.format('DD/MM/yyyy') }}
            </template>

            <template v-slot:cell(actions)="data">
                <div class="d-flex align-content-between">
                    <button class="btn-primary mr-3" @click="updateTodo(data.item)">U</button>
                    <button class="btn-danger" @click="deleteTodo(data.item)">X</button>
                </div>
            </template>

            <template v-slot:table-busy>
                <div class="text-center py-3">
                    <b-spinner />
                </div>
            </template>
        </b-table>
        <FormModal
            :todo="todoToUpsert"
            v-if="todoToUpsert"
            @closeModal="closeModal"
            @refresh="refreshTable"
        />
        <DeleteModal
            :todo="todoToDelete"
            v-if="todoToDelete"
            @closeModal="closeModal"
        />
    </div>
</template>

<style>

</style>

<script>
import FormModal from "./Modal/FormModal"
import DeleteModal from "./Modal/DeleteModal"

export default {
  name: 'List',
  components: { FormModal, DeleteModal },
  computed: {
    todos() {
        return this.$store.getters.allTodos
    },
    fields() {
      return [
        {
          key: "id",
          tdClass: "td-truncate"
        },
        {
          key: "todo",
          tdClass: "text-wrap"
        },
        {
          key: "done",
          label: "fait"
        },
        {
          key: "createdAt",
          label: "créé le"
        },
        {
          key: "actions",
        },
      ]
    }
  },
  data() {
    return {
      todoToUpsert: null,
      todoToDelete: null,
    }
  },
  methods: {
    addTodo() {
      this.todoToUpsert = {}
    },
    deleteTodo(todo) {
      this.todoToDelete = todo
    },
    updateTodo(todo) {
      this.todoToUpsert = todo
    },
    updateDone(todo) {
      this.$store.dispatch('updateTodo', todo)
    },
    closeModal() {
      this.todoToUpsert = null
      this.todoToDelete = null
    },
    refreshTable() {
      this.$refs.todos.refresh()
    }
  },
}
</script>

