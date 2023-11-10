<template>
  <HeaderComponent @extracted-data="onExcelLoad($event)" />
  <TransformedTable :json-header="jsonHeader" :json-items="jsonItems" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TransformedTable from "@/components/TransformedTable.vue";

const jsonHeader = ref();
const jsonItems = ref();

const onExcelLoad = (eventReturn: any) => {
  jsonHeader.value = eventReturn.jsonHeader;
  jsonItems.value = eventReturn.jsonItems;
};
</script>
