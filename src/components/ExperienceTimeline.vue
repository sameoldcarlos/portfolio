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
  <div class="timeline">
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
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 300px;
  }
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
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

/* Place the container to the left */
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

/* Place the container to the right */
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

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {

  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid var(--highlight-primary);
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--highlight-primary) transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
