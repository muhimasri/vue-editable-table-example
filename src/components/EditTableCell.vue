<template>
    <b-table :items="items" :fields="fields">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker v-if="field.type === 'date' && items[data.index].isEdit && selectedCell === field.key" :key="index" :type="field.type" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)"></b-form-datepicker>
        <b-form-select v-else-if="field.type === 'select' && items[data.index].isEdit && selectedCell === field.key" :key="index" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)" :options="field.options" class="form-control"></b-form-select>
        <b-form-input @change="validate" :state="selectedCell.status" v-else-if="field.type && items[data.index].isEdit && selectedCell === field.key" :key="index" :type="field.type" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)"></b-form-input>
        <span :key="index" v-else @click="editCellHandler(data, field.key)">{{data.value}}</span>
      </template>
    </b-table>
</template>

<script>

export default {
  name: 'EditTableCell',
  components: {
  },
  props: {
    value: Array,
    fields: Array
  },
  data() {
    return {
      items: this.value.map(item => ({...item, isEdit: false})),
      selectedCell: null
    }
  },
  methods: {
      editCellHandler(data, name) {
         this.items = this.items.map(item => ({...item, isEdit: false}));
         this.items[data.index].isEdit = true;
         this.selectedCell = name
      },
      inputHandler(value, index, key) {
        this.items[index][key] = value;
        this.$emit('input', this.items);
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

tr span {
  display: flex;
}
</style>
