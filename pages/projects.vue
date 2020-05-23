<template>
  <div>
    <h1>Projects</h1>

    <div class="pa-5" style="background: #f8f8f8">
      <Suppliers titleText="Current known suppliers" class="ma-5 elevation-2" />
      <br />
      <AvailableSuppliers titleText="Suppliers in the market" class="ma-5 elevation-2" />
    </div>
    <notifications group="items" position="bottom right" />
  </div>
</template>

<script>
import Breadcrumb from "@/components/misc/Breadcrumb";
import Suppliers from "@/components/tables/Suppliers";
import AvailableSuppliers from "@/components/tables/AvailableSuppliers";
export default {
  components: {
    Breadcrumb,
    Suppliers,
    AvailableSuppliers
  }
};
</script>
