<script setup>
defineProps({
  position: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  period: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="timeline-item bg-primary-accent rounded-md relative py-5 px-7 text-secondary-text">
    <h2 class="text-2xl font-bold">
      {{ position }}
    </h2>
    <h3 class="text-xl">
      {{ company }}
    </h3>
    <p>{{ period }}</p>
    <p>
      {{ description }}
    </p>
  </div>
</template>
