<template>
  
    <b-table hover :items="items" :fields="fields">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-input class="table-input" v-if="field.type && selectedIndex[data.index]" :key="index" :type="field.type" v-model="items[data.index][field.key]" placeholder="Enter your name"></b-form-input>
        <b-button :key="index" v-else-if="field.key === 'edit'" @click="handleEditRow(data)">Edit</b-button>
        <span :key="index" v-else>{{data.value}}</span>
      </template>
        <!--
      <template #cell(age)="data">
          <b-form-input v-if="selectedIndex === data.index && selectedCell === 'age'" type="number" v-model="data.value" placeholder="Enter your age"></b-form-input>
          <span v-else @click="handleEditCell(data, 'age')">{{data.value}}</span>
      </template>
      <template #cell()="data">
        {{data.value}}
      </template>  -->
    </b-table>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
      return {
        fields: [
          {
            key: 'name',
            label: 'Full Name',
            type: 'text'
          },
          {
            key: 'age',
            label: 'Age',
            type: 'number'
          },
          {
            key: 'occupation',
            label: 'Occupation'
          },
          {
            key: 'edit',
            label: ''
          }
        ],
        items: [
          { age: 40, name: 'Dickerson', occupation: 'Development' },
          { age: 21, name: 'Larsen', occupation: 'Marketing' },
          { age: 89, name: 'Geneva', occupation: 'HR' },
          { age: 38, name: 'Jami', occupation: 'Accounting' }
        ],
        selectedCell: null,
        selectedIndex: {}
      }
    },
    methods: {
      handleEditRow(data) {
        // this.selectedIndex = {
        //   ...this.selectedIndex,
        //   [data.index]: !this.selectedIndex[data.index]
        // };
        this.selectedIndex = {
          [data.index]: !this.selectedIndex[data.index]
        }
      },
      handleEditCell(data, name) {
        this.selectedCell = name;
        this.selectedIndex = data.index;
        // this.items[data.index].edit = true;
      }
    }
}
</script>

<style>

.table-input {
}
</style>
