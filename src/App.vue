<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://cdn-icons-png.flaticon.com/512/2285/2285537.png"
        nav
      >
        <v-alert-title class="app-title">Excel Transform </v-alert-title>
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, index) in nav"
          :key="`nav_item_${index}`"
          :to="{ name: item.name }"
          :prepend-icon="item.icon"
          :title="item.name"
          exact
          base-color="primary"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="main-view">
        <v-card
          variant="outlined"
          color="background"
          style="border-radius: 20px"
        >
          <AppBar />
          <router-view />
        </v-card>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { AppRoute } from "@/utils/enums";
import AppBar from "./components/AppBar.vue";

const drawer = ref(true);
const rail = ref(false);
const nav = [{ ...AppRoute.Home, icon: "mdi-home" }];
</script>

<style scoped>
:deep(.app-title) {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  line-height: 1rem;
  min-height: 80px;
}

:deep(.main-view) {
  padding: 30px;
}
</style>
