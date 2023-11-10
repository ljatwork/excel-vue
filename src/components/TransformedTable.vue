<template>
  <v-table v-if="props.jsonHeader" fixed-header>
    <thead>
      <tr>
        <th
          class="text-left"
          v-for="header in props.jsonHeader"
          :key="`header_${header}`"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody v-if="props.jsonItems">
      <tr v-for="(items, index) in props.jsonItems" :key="`tbody_${index}`">
        <td v-for="(item, index) in items" :key="`td_${index}`">
          {{ item }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
const props = defineProps<{
  jsonHeader: any;
  jsonItems: any;
}>();
</script>
