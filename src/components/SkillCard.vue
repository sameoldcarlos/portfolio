<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="skill-card rounded-md bg-primary-text opacity-7 p-2">
    <img
      class="mt-2 lg:mt-4"
      loading="lazy"
      :src="icon"
      :alt="title"
    >
    <h3 class="text-center text-secondary-text font-bold uppercase bottom-0 lg:bottom-3 top-auto mb-0 mt-auto">
      {{ title }}
    </h3>
  </div>
</template>

<style scoped lang="stylus">
.skill-card {
  margin: 0 auto;
  box-shadow: -5px 10px 13px 0px rgba(0,0,0,0.75);
  img {
    height: calc(100% - 30px);
    max-height: 70px;
  }

  h3 {
    height: 28px;
  }
}
</style>
