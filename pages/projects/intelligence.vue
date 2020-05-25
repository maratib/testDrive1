<template>
  <v-card class="elevation-0 mt-1" style="background: #f8f8f8; border-radius:0 !important;">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      class="ma-0 pa-0"
      style=" border-bottom: solid 1px #e9e9e9"
    >
      <!-- <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab> -->
      <v-tab :to="localePath('/projects/intelligence')">Commodity</v-tab>
      <v-tab :to="localePath('/projects/intelligence/suppliers')">Suppliers</v-tab>
    </v-tabs>

    <v-card flat style="background: #f8f8f8">
      <v-card-text>
        <NuxtChild></NuxtChild>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "Commodity", content: "Tab 1 Content" },
        { tab: "Suppliers", content: "Tab 2 Content" }
      ]
    };
  }
};
</script>

<style>
</style>