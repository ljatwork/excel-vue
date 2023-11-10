<template>
  <v-card elevation="0">
    <div class="header-class">
      <div style="width: 500px">
        <v-file-input
          accept=".xlsx, .xls, .csv"
          placeholder="Upload your documents"
          label="File input"
          prepend-icon="mdi-paperclip"
          @change="onChange"
        />
      </div>
      <div>
        <v-switch
          label-color="primary"
          color="primary"
          false-icon="mdi-brightness-2"
          true-icon="mdi-brightness-5"
          :model-value="theme.global.name"
          true-value="light"
          false-value="dark"
          inset
        />
      </div>
    </div>
    <v-divider />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { read, utils } from "xlsx";
import { useTheme } from "vuetify";
const emit = defineEmits(["extractedData"]);
const theme = useTheme();

const input = ref();
const onChange = (event: any) => {
  input.value = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = (e: any) => {
    const bufferArray = e?.target.result;
    const wb = read(bufferArray, { type: "buffer" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const tableData = utils.sheet_to_json(ws, { header: 1 });
    const jsonData = utils.sheet_to_json(ws);

    emit("extractedData", { tableData, jsonData });
  };
  fileReader.readAsArrayBuffer(input.value);
};
</script>

<style scoped>
:deep(.header-class) {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
