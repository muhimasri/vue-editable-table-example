<template>
  <article>
    <b-table :items="items" :fields="fields">
      <template #cell(name)="data">
          <b-form-input v-if="items[data.index].isEdit" type="text" v-model="items[data.index].name"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(department)="data">
        <b-form-select v-if="items[data.index].isEdit" v-model="items[data.index].department" :options="['Development', 'Marketing', 'HR', 'Accounting']"></b-form-select>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(age)="data">
          <b-form-input v-if="items[data.index].isEdit" type="number" v-model="items[data.index].age"></b-form-input>
          <span v-else>{{data.value}}</span>
      </template>
      <template #cell(dateOfBirth)="data">
        <b-form-datepicker v-if="items[data.index].isEdit" v-model="items[data.index].dateOfBirth"></b-form-datepicker>
        <span v-else>{{data.value}}</span>
      </template>
      <template #cell(edit)="data">
        <b-button @click="handleEditRow(data)">
          <span v-if="!items[data.index].isEdit">Edit</span>
          <span v-else>Done</span>
        </b-button>
      </template>
    </b-table>
    <pre>
        {{items}}
    </pre>
  </article>
</template>

<script>
export default {
  name: "EditTableRowStatic",
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
  mounted() {
    this.items = this.items.map(item => ({...item, isEdit: false}));
  },
  methods: {
      handleEditRow(data) {
        this.items[data.index].isEdit = !this.items[data.index].isEdit;
      }
    }
};
</script>

<style>
</style>
