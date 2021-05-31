<template>
  <div id="app">
    <b-table :items="items" :fields="fields">
      <template #cell(name)="data">
          <b-form-input v-if="selectedRow[data.index]" type="text" v-model="items[data.index].name"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(department)="data">
        <b-form-select v-if="selectedRow[data.index]" v-model="items[data.index].department" :options="['Development', 'Marketing', 'HR', 'Accounting']" class="form-control"></b-form-select>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(age)="data">
          <b-form-input v-if="selectedRow[data.index]" type="number" v-model="items[data.index].age"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(dateOfBirth)="data">
        <b-form-datepicker v-if="selectedRow[data.index]" v-model="items[data.index].dateOfBirth"></b-form-datepicker>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(edit)="data">
        <b-button @click="handleEditRow(data)">
          <span v-if="!selectedRow[data.index]">Edit</span>
          <span v-else>Done</span>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      fields: [
        { key: "name", label: "Name"},
        { key: "department", label: "Department" },
        { key: "age", label: "Age" },
        { key: "dateOfBirth", label: "Date Of Birth" },
        { key: 'edit', label: ''}
      ],
       items: [
          { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20' },
          { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20' },
          { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20' },
          { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20' }
        ],
        selectedRow: {}
    };
  },
  methods: {
      handleEditRow(data) {
        this.selectedRow = {
          ...this.selectedRow,
          [data.index]: !this.selectedRow[data.index]
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
