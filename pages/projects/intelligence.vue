<template>
  <div class="pa-5">
    <Suppliers titleText="Current known suppliers" class="ma-5 elevation-2" />
    <br />
    <AvailableSuppliers titleText="Suppliers in the market" class="ma-5 elevation-2" />
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

<style>
</style>