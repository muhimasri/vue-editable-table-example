<template>
  <div id="app">
    <EditableTable :items="items" :fields="fields"></EditableTable>
     <pre>
      {{items}}
    </pre>
  </div>
</template>

<script>
import EditableTable from './components/EditableTable.vue'
export default {
  name: "App",
  components: {
    EditableTable
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", type: "text" },
        { key: "department", label: "Department", type: "select", options: ['Development', 'Marketing', 'HR', 'Accounting'] },
        { key: "age", label: "Age", type: "number" },
        { key: "dateOfBirth", label: "Date Of Birth", type: "date" }
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20' },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20' },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20' },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20' }
        ],
        selectedRow: {},
        selectedCell: null
    };
  },
  methods: {
      handleEditCell(data, name) {
        this.selectedCell = name;
        this.selectedRow = {
          [data.index]: true
        }
      }
    }
};
</script>

<style>
#app {
  text-align: center;
  margin: 60px;
}
thead, tbody, tfoot, tr, td, th {
  text-align: left;
  width: 100px;
  vertical-align: middle;
}
pre {
  text-align: left;
  color: #d63384;
}
</style>
