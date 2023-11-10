<template>
  <HeaderComponent @extracted-data="onExcelLoad($event)" />
  <TransformedTable
    v-if="jsonToTable"
    :json-header="jsonToTable[0]"
    :json-items="jsonToTable.slice(1)"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TransformedTable from "@/components/TransformedTable.vue";

const jsonToTable = ref();
const jsonData = ref();

const onExcelLoad = (eventReturn: any) => {
  jsonToTable.value = eventReturn.tableData;
  jsonData.value = eventReturn.jsonData;
  console.log(eventReturn.jsonData);
};
</script>
