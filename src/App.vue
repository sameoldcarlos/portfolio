<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <section class="content-section bg-gradient-to-b from-secondary-bg to-primary-bg">
    <component :is="NavBar" />
  </section>
</template>

<style scoped lang="stylus">
.content-section
  min-height 500px

</style>
