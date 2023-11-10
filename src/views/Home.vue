<template>
  <v-card elevation="0" color="surface">
    <v-row>
      <v-col>
        <v-file-input
          accept=".xlsx, .xls, .csv"
          placeholder="Upload your documents"
          label="File input"
          prepend-icon="mdi-paperclip"
          @change="onChange"
        />
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-table v-if="jsonHeader" fixed-header>
      <thead>
        <tr>
          <th
            class="text-left"
            v-for="header in jsonHeader"
            :key="`header_${header}`"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody v-if="jsonItems">
        <tr v-for="(items, index) in jsonItems" :key="`tbody_${index}`">
          <td v-for="(item, index) in items" :key="`td_${index}`">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { read, utils } from "xlsx";

const input = ref();
const jsonHeader = ref();
const jsonItems = ref();
const onChange = (event: any) => {
  input.value = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = (e: any) => {
    const bufferArray = e?.target.result;
    const wb = read(bufferArray, { type: "buffer" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const headers = utils.sheet_to_json(ws, { header: 1 });
    jsonHeader.value = headers[0];
    console.log(headers.slice(1));
    jsonItems.value = headers.slice(1);
  };
  fileReader.readAsArrayBuffer(input.value);
};
</script>
