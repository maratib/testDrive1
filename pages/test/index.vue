<template>
  <div>
    <v-tabs icons-and-text centered show-arrows color="red" slider-color="pink">
      <v-tab v-for="(i, index) in tabs" :key="index" :to="i.path" nuxt>
        {{ i.name }}
        <v-icon>{{ i.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <v-container>
      <h1>Hello 123</h1>
      <nuxt-child />
    </v-container>
  </div>
</template>

<script>
import Breadcrumb from "@/components/misc/Breadcrumb";
export default {
  components: {
    Breadcrumb
  },
  data: () => ({
    tabs: [
      { name: "Dashboard", icon: "list", path: "/" },
      {
        name: "Projects",
        icon: "playlist_add",
        path: "/projects"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>