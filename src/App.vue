<template>
  <header-component />
  <router-view />
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>
<style lang="scss"></style>
