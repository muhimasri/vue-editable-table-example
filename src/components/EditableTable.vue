<template>
  <article>
    <b-modal
      id="modal-1"
      title="Confirm"
      v-model="openDialog"
      ok-title="Remove"
      @ok="removeRowsHandler"
    >
      <p class="my-4">Are you sure you want to remove the selected rows?</p>
    </b-modal>
    <div class="action-container">
      <b-button class="add-button" variant="success" @click="addRowHandler"
        >Add Row</b-button
      >
      <b-button variant="danger" @click="openDialog = true"
        >Remove Rows</b-button
      >
    </div>
    <b-table class="b-table" :items="tableItems" :fields="fields" fixed>
      <template v-for="(field, index) in fields" #[`cell(${field.key})`]="data">
        <b-form-datepicker
          v-if="field.type === 'date' && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="tableItems[data.index][field.key]"
          @input="(value) => inputHandler(value, data.index, field.key)"
        ></b-form-datepicker>
        <b-form-select
          v-else-if="field.type === 'select' && tableItems[data.index].isEdit"
          :key="index"
          :value="tableItems[data.index][field.key]"
          @input="(value) => inputHandler(value, data.index, field.key)"
          :options="field.options"
        ></b-form-select>
        <b-checkbox
          v-else-if="field.key === 'selectRow'"
          :checked="tableItems[data.index].isSelected"
          :key="index"
          @change="selectRowHandler(data)"
        ></b-checkbox>
        <div :key="index" v-else-if="field.type === 'edit'">
          <b-button @click="editRowHandler(data)">
            <span v-if="!tableItems[data.index].isEdit">Edit</span>
            <span v-else>Done</span>
          </b-button>
          <b-button
            class="delete-button"
            variant="danger"
            @click="removeRowHandler(data.index)"
            >Remove</b-button
          >
        </div>
        <b-form-input
          v-else-if="field.type && tableItems[data.index].isEdit"
          :key="index"
          :type="field.type"
          :value="tableItems[data.index][field.key]"
          @input="(value) => inputHandler(value, data.index, field.key)"
        ></b-form-input>
        <span :key="index" v-else>{{ data.value }}</span>
      </template>
    </b-table>
  </article>
</template>

<script>
export default {
  name: "EditableTable",
  components: {},
  props: {
    value: Array,
    fields: Array,
  },
  data() {
    return {
      tableItems: this.mapItems(this.value),
      openDialog: false,
    };
  },
  watch: {
    value(newVal) {
      this.tableItems = this.mapItems(newVal);
    },
  },
  methods: {
    editRowHandler(data) {
      if (this.tableItems[data.index].isEdit) {
        this.$emit("submit", this.tableItems[data.index]);
      }
      this.tableItems[data.index].isEdit = !this.tableItems[data.index].isEdit;
    },
    inputHandler(value, index, key) {
      this.tableItems[index][key] = value;
      this.$emit("input", this.tableItems);
    },
    addRowHandler() {
      const newRow = this.fields.reduce(
        (a, c) => ({ ...a, [c.key]: null }),
        {}
      );
      newRow.isEdit = true;
      this.tableItems.unshift(newRow);
      this.$emit("input", this.tableItems);
    },
    removeRowHandler(index) {
      this.tableItems = this.tableItems.filter((item, i) => i !== index);
      this.$emit("input", this.tableItems);
    },
    removeRowsHandler() {
      this.tableItems = this.tableItems.filter((item) => !item.isSelected);
      this.$emit("input", this.tableItems);
    },
    selectRowHandler(data) {
      this.tableItems[data.index].isSelected =
        !this.tableItems[data.index].isSelected;
    },
    mapItems(data) {
      return data.map((item, index) => ({
        ...item,
        isEdit: this.tableItems[index] ? this.tableItems[index].isEdit : false,
        isSelected: this.tableItems[index]
          ? this.tableItems[index].isSelected
          : false,
      }));
    },
  },
};
</script>

<style>
.action-container {
  margin-bottom: 10px;
}
.action-container button {
  margin-right: 5px;
}
.delete-button {
  margin-left: 5px;
}
</style>