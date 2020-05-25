<template>
  <div>
    <h1>Welcome to our TestDrive App.</h1>
    <p>
      Please visit our projects page, and see the working samples under
      <span
        class="red--text"
      >Intelligence -> Suppliers</span>
      tab.
      <br />
      <br />Best regards,
    </p>
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
