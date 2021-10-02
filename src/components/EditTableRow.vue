<template>
    <b-table :items="items" :fields="fields">
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker v-if="field.type === 'date' && items[data.index].isEdit" :key="index" :type="field.type" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)"></b-form-datepicker>
        <b-form-select v-else-if="field.type === 'select' && items[data.index].isEdit" :key="index" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)" :options="field.options"></b-form-select>
        <b-button :key="index" v-else-if="field.type === 'edit'" @click="editRowHandler(data)">
          <span v-if="!items[data.index].isEdit">Edit</span>
          <span v-else>Done</span>
        </b-button>
        <b-form-input v-else-if="field.type && items[data.index].isEdit" :key="index" :type="field.type" :value="items[data.index][field.key]" @input="(value) => inputHandler(value, data.index, field.key)"></b-form-input>
        <span :key="index" v-else>{{data.value}}</span>
      </template>
    </b-table>
</template>

<script>
export default {
  name: "EditTableRow",
  components: {},
  props: {
    value: Array,
    fields: Array
  },
  data() {
    return {
      items: this.value.map(item => ({...item, isEdit: false})) 
    }
  },
  methods: {
      editRowHandler(data) {
        this.items[data.index].isEdit = !this.items[data.index].isEdit;
      },
      inputHandler(value, index, key) {
        this.items[index][key] = value;
        this.$emit('input', this.items);
      }
    }
};
</script>

<style>
thead, tbody, tfoot, tr, td, th {
  text-align: left;
  vertical-align: middle;
  width: 100px;
}
</style>
