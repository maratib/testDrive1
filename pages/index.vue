<template>
  <div>
    <h1>Home Page</h1>

    <div class="pa-5" style="background: #f8f8f8">
      <Suppliers titleText="Current known suppliers" class="mb-5" />
      <SuppliersInMarket />
    </div>
    <notifications group="items" position="bottom right" />
  </div>
</template>

<script>
import Suppliers from "@/components/tables/Suppliers";
import SuppliersInMarket from "@/components/tables/SuppliersInMarket";
export default {
  components: {
    Suppliers,
    SuppliersInMarket
  }
};
</script>
