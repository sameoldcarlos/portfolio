<script setup>
import { useLanguage } from '@/stores/languages';
import { computed } from 'vue';

const store = useLanguage();

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: Object,
    default: () => ({})
  },
  image: {
    type: String,
    default: ''
  },
  repository: {
    type: String,
    default: ''
  },
  demo: {
    type: String,
    default: ''
  },
});

const projectDescription = computed(() => {
  return props.description[store.language];
});
</script>
<template>
  <div
    class="project-card relative w-full max-w-[300px] h-fit drop-shadow-md rounded-sm border-2 border-description-border group cursor-pointer"
  >
    <div
      class="lg:group-hover:opacity-5 project-card__main-content w-full flex flex-col-reverse md:flex-col justify-center items-center px-2 py-2 md:py-6 transition-opacity ease-in-out gap-4"
    >
      <div class="image-container w-[247px] h-[140px] md:h-[247px]">
        <a
          :href="demo"
          class="hover:text-primary-accent"
          target="_blank"
        >
          <img
            :src="image"
            alt="Project Image"
            class="h-full w-full object-cover"
          >
        </a>
      </div>
      <h3 class="uppercase mt-4 text-secondary-accent text-lg font-bold md:font-normal md:text-primary-text">
        {{ title }}
      </h3>
    </div>
    <div
      class="opacity-0 lg:group-hover:opacity-100 z-[-1] lg:group-hover:z-10 flex absolute top-0 bg-gradient-to-b from-secondary-accent from-10% w-full h-full px-2 py-6 flex-col transition-opacity ease-in-out"
    >
      <p class="text-secondary-text text-center">
        {{ projectDescription }}
      </p>
      <div class="links flex gap-2 mt-auto mb-0 mx-auto">
        <a
          :href="repository"
          class="hover:text-primary-accent"
          target="_blank"
        >
          <vue-feather
            type="github"
            size="32"
          />
        </a>
        <a
          :href="demo"
          class="hover:text-primary-accent"
          target="_blank"
        >
          <vue-feather
            type="external-link"
            size="32"
          />
        </a>
      </div>
    </div>
    <p class="lg:hidden text-center mb-6 p-2">
      {{ projectDescription }}
    </p>
    <div class="links flex lg:hidden gap-2 justify-center">
      <a
        :href="repository"
        target="_blank"
      >
        <vue-feather type="github" />
      </a>
      <a
        :href="demo"
        target="_blank"
      >
        <vue-feather type="external-link" />
      </a>
    </div>
  </div>
</template>
