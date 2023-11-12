<template>
  <HeaderComponent @extracted-data="onExcelLoad($event)" />
  <v-stepper
    alt-labels
    v-model="currentStep"
    :items="steps"
    show-actions
    editable
  >
    <template v-slot:item.1>
      <TransformedTable
        v-if="jsonToTable"
        :json-header="jsonToTable[0]"
        :json-items="jsonToTable.slice(1)"
      />
    </template>
    <template v-slot:item.2>
      <Models />
    </template>
  </v-stepper>
</template>

<script setup lang="ts">
import { VStepper } from "vuetify/labs/VStepper";
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TransformedTable from "@/components/TransformedTable.vue";

const currentStep = ref(1);
const steps = ref([{ title: "Excel to Json Table" }]);
const jsonToTable = ref();
const jsonData = ref();

const onExcelLoad = (eventReturn: any) => {
  jsonToTable.value = eventReturn.tableData;
  jsonData.value = eventReturn.jsonData;
  console.log(eventReturn.jsonData);
};
</script>

<style>
.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item--complete .v-stepper-item__avatar.v-avatar {
  background-color: #e1593b;
}
</style>
