<template>
  <div id="app">
    <EditableTable
      v-model="users"
      :fields="fields"
      @submit="handleUpdateUser($event)"
    ></EditableTable>
    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script>
import EditableTable from "./components/EditableTable.vue";
import { getUsers, updateUser } from "./services/user";

export default {
  name: "App",
  components: {
    EditableTable,
  },
  data() {
    return {
      fields: [
        { key: "selectRow", label: "" },
        { key: "name", label: "Name", type: "text" },
        { key: "email", label: "Email", type: "email" },
        { key: "phone", label: "Phone", type: "text" },
        { key: "edit", label: "", type: "edit" },
      ],
      users: [],
    };
  },
  async mounted() {
    this.users = await getUsers();
  },
  methods: {
    async handleUpdateUser(user) {
      await updateUser(user);
    },
  },
};
</script>

<style>
#app {
  margin: 20px;
}
</style>