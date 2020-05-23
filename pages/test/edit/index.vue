<template>
  <div class="level">
    <Breadcrumb />
    <h1>Edit</h1>
    <h1>{{ $route.fullPath }}</h1>
  </div>
</template>

<script>
import Breadcrumb from "@/components/misc/Breadcrumb";
export default {
  components: {
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
</style>