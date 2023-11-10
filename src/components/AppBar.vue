<template>
  <div>
    <div style="display: flex; justify-content: flex-end">
      <div style="padding-right: 20px">
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
  </div>
</template>
<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
</script>
