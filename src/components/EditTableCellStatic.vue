<template>
    <b-table :items="items" :fields="fields">
      <template #cell(name)="data">
          <b-form-input v-if="selectedRow[data.index] && selectedCell === 'name'" type="text" v-model="items[data.index].name"></b-form-input>
          <span v-else @click="handleEditCell(data, 'name')">{{data.value}}</span>
      </template>
      <template #cell(department)="data">
        <b-form-select v-if="selectedRow[data.index] && selectedCell === 'department'" v-model="items[data.index].department" :options="['Development', 'Marketing', 'HR', 'Accounting']" class="form-control"></b-form-select>
        <span v-else @click="handleEditCell(data, 'department')">{{data.value}}</span>
      </template>
      <template #cell(age)="data">
          <b-form-input v-if="selectedRow[data.index] && selectedCell === 'age'" type="number" v-model="items[data.index].age"></b-form-input>
          <span v-else @click="handleEditCell(data, 'age')">{{data.value}}</span>
      </template>
      <template #cell(dateOfBirth)="data">
        <b-form-datepicker v-if="selectedRow[data.index] && selectedCell === 'dateOfBirth'" v-model="items[data.index].dateOfBirth"></b-form-datepicker>
        <span v-else @click="handleEditCell(data, 'dateOfBirth')">{{data.value}}</span>
      </template>
    </b-table>
</template>

<script>
export default {
  name: "EditTableCellStatic",
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
thead, tbody, tfoot, tr, td, th {
  text-align: left;
  width: 100px;
  vertical-align: middle;
}
</style>
