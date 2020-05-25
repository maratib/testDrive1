<template>
  <div>
    <h1
      class="headline mb-3 blue-grey--text"
      style="letter-spacing:2px !important;"
    >SP00321 Brackets Q2/2020</h1>

    <ProjectTabs />

    <v-container style="background: #f8f8f8" class="ma-0 pa-0">
      <NuxtChild></NuxtChild>
      <notifications group="items" position="bottom right" />
    </v-container>
  </div>
</template>

<script>
import ProjectTabs from "@/components/projects/ProjectTabs";
export default {
  components: {
    ProjectTabs
  }
};
</script>

<style scoped>
.tab-title {
  letter-spacing: 2px;
}
</style>
