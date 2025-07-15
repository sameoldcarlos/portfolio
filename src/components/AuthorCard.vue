<script setup>
import { author } from '@/content/author.json';
import content from '@/content/content.json';
import { useLanguage } from '@/stores/languages';
import { computed } from 'vue';

const store = useLanguage();

const textContent = computed(() => {
  return content[store.language];
});
</script>
<template>
  <div class="author-card w-full lg:max-w-[800px] flex flex-col items-center border-description-border border-2 pb-4">
    <div class="author-card__header h-6 border-b-description-border border-b-2 bg-description-header w-full" />
    <div class="author-card__content flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:items-start p-2 mb-2">
      <div class="avatar-container min-w-[150px] max-w-[230px]">
        <img
          :src="author.avatar"
          alt="Author avatar"
          class="object-contain rounded-full"
        >
      </div>
      <hr class="text-description-border w-full lg:hidden">
      <div class="flex flex-col items-center justify-center gap-2">
        <p class="text-lg w-[80%]">
          {{ textContent.author_bio }}
        </p>
        <div
          class="author-card__actions flex flex-col md:flex-row items-center justify-center text-xl gap-4 mt-6 w-full"
        >
          <a
            href="https://drive.google.com/file/d/1Y2YnCezyCiYNUabSGY5sG04GW1091nic/view?usp=sharing"
            class="block text-center w-full max-w-[250px] border-2 rounded-md hover:border-primary-accent hover:text-primary-accent py-1"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ textContent.resume }}
          </a>
          <a
            href="#projects"
            class="bg-gradient-to-bl from-success to-card-bg hover:to-primary-bg hover:to-0% rounded-md text-secondary-text px-4 py-1 uppercase block text-center w-full max-w-[250px] border-success border-2 hover:text-success"
          >
            {{ textContent.projects }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
