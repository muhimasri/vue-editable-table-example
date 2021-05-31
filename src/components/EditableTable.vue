<template>
    <b-table hover :items="items" :fields="fields">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker v-if="field.type === 'date' && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-datepicker>
        <b-form-select v-else-if="field.type === 'select' && selectedRow[data.index] && selectedCell === field.key" :key="index" v-model="items[data.index][field.key]" :options="field.options" class="form-control"></b-form-select>
        <b-form-input v-else-if="field.type && selectedRow[data.index] && selectedCell === field.key" :key="index" :type="field.type" v-model="items[data.index][field.key]"></b-form-input>
        <span :key="index" v-else @click="handleEditCell(data, field.key)">{{data.value}}</span>
      </template>
    </b-table>
</template>

<script>

export default {
  name: 'EditableTable',
  components: {
  },
  props: {
    items: Array,
    fields: Array
  },
  data() {
      return {
        selectedCell: null,
        selectedRow: {}
      }
    },
  methods: {
      handleEditCell(data, name) {
        this.selectedCell = name;
        this.selectedRow = {
          [data.index]: true
        }
      }
    }
}
</script>

<style>
thead, tbody, tfoot, tr, td, th {
  text-align: left;
  width: 100px;
  vertical-align: middle;
}
</style>
