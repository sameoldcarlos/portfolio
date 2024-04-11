<script setup>
import TimelineItem from '@/components/TimelineItem.vue';
import { experiences } from '@/content/background.json';

import { useLanguage } from '@/stores/languages';
import { computed } from 'vue';

const store = useLanguage();

const positions = computed(() => {
  return experiences[store.language];
});

const isEven = (index) => {
  return index % 2 === 0;
};

</script>

<template>
  <div class="timeline relative my-0 mx-auto">
    <div
      v-for="(position, index) in positions"
      :key="index"
      :class="['container', [isEven(index) ? 'left' : 'right']]"
    >
      <component
        :is="TimelineItem"
        :position="position.position"
        :company="position.company"
        :period="position.period"
        :description="position.description"
      />
    </div>
  </div>
</template>

<style scoped lang="stylus">

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: var(--absolute-white);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: var(--absolute-white);
    border: 4px solid var(--highlight-secondary);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
}

.left {
  left: 0;

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid var(--highlight-primary);
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--highlight-primary);
  }
}

.right {
  left: 50%;

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid var(--highlight-primary);
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--highlight-primary) transparent transparent;
  }

  &::after {
    left: -16px;
  }
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }

  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container::before {
    left: 60px;
    border: medium solid var(--highlight-primary);
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--highlight-primary) transparent transparent;
  }

  .left::after,
  .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }
}
</style>
