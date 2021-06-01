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
  name: "EditCellTable",
  components: {},
  props: {
    items: Array,
    fields: Array
  },
  data() {
    return {
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
