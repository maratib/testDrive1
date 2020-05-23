<template>
  <div>
    <h1>Projects</h1>
    <nuxt-link :to="localePath('/projects')">Projects</nuxt-link>
  </div>
</template>

<script>
import Suppliers from "@/components/tables/Suppliers";
import AvailableSuppliers from "@/components/tables/AvailableSuppliers";
export default {
  components: {
    Suppliers,
    AvailableSuppliers
  }
};
</script>
