<template>
  <b-table :items="tableItems" :fields="fields">
      <template #cell(name)="data">
          <b-form-input v-if="tableItems[data.index].isEdit" type="text" v-model="tableItems[data.index].name"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(department)="data">
        <b-form-select v-if="tableItems[data.index].isEdit" v-model="tableItems[data.index].department" :options="['Development', 'Marketing', 'HR', 'Accounting']"></b-form-select>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(age)="data">
          <b-form-input v-if="tableItems[data.index].isEdit" type="number" v-model="tableItems[data.index].age"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(dateOfBirth)="data">
        <b-form-datepicker v-if="tableItems[data.index].isEdit" v-model="tableItems[data.index].dateOfBirth"></b-form-datepicker>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(edit)="data">
        <b-button @click="handleEditRow(data)">
          <span v-if="!tableItems[data.index].isEdit">Edit</span>
          <span v-else>Done</span>
        </b-button>
      </template>
    </b-table>
</template>

<script>
export default {
  name: "EditableTable",
  components: {},
  props: {
    items: Array,
    fields: Array
  },
  data() {
    return {
      tableItems: this.items.map(item => ({...item, isEdit: false}))
    }
  },
  methods: {
      handleEditRow(data) {
        this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit;
      }
    }
};
</script>

<style>
</style>
