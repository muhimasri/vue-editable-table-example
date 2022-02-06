<template>
  <div id="app">
    <EditableTable
      v-model="users"
      :fields="fields"
      @submit="handleUpdateUser($event)"
      @remove="handleRemoveUser($event)"
    ></EditableTable>
  </div>
</template>

<script>
import EditableTable from "./components/EditableTable.vue";
import { addUser, deleteUser, getUsers, updateUser } from "./services/user";

export default {
  name: "App",
  components: {
    EditableTable,
  },
  data() {
    return {
      fields: [
        { key: "selectRow", label: "" },
        { key: "name", label: "Name", type: "text", required: true },
        { key: "email", label: "Email", type: "email", required: true, pattern: ".+@bootstrapvue\\.com" },
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
      if (user.id) {
        await updateUser(user);
      } else {
        await addUser(user);
      }
    },
    async handleRemoveUser(user) {
      if (user.length > 0) {
        await user.map(async (item) => {
          await deleteUser(item.id);  
        })
      } else {
        await deleteUser(user.id);
      }
    }
  },
};
</script>

<style>
#app {
  margin: 20px;
}
</style>