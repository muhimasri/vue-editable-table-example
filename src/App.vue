<template>
  <div id="app">
      <EditableTable v-model="items" :fields="fields"></EditableTable>
  </div>
</template>

<script>
import EditableTable from './components/EditableTable.vue';

export default {
  name: "App",
  components: {
    EditableTable
  },
  data() {
    return {
      fields: [
        { key: "selectRow", label: "" },
        { key: "name", label: "Name", type: "text" },
        { key: "department", label: "Department", type: "select", options: ['Development', 'Marketing', 'HR', 'Accounting'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" },
        { key: "edit", label: "", type: "edit" }
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20' },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20' },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20' },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20' }
        ]
    };
  }
};
</script>

<style>
#app {
  margin: 20px;
}
</style>