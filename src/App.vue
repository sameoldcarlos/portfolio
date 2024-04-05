<script setup>
import AuthorCard from '@/components/AuthorCard.vue';
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import { networks } from '@/content/networks.json';
import { skills } from '@/content/skills.json';
import content from '@/content/content.json';
import { projects } from '@/content/projects.json';
import { useLanguage } from '@/stores/languages';
import { swiffyslider } from 'swiffy-slider';
import { computed, onMounted } from 'vue';

const store = useLanguage();

const textContent = computed(() => {
  return content[store.language];
});

onMounted(() => {
  swiffyslider.init();
});
</script>

<template>
  <main>
    <section class="content-section bg-gradient-to-b from-secondary-bg relative">
      <component :is="NavBar" />
      <div class="main-section-content site-presentation flex flex-col items-center justify-center absolute">
        <div class="logo-container max-w-md mt-28">
          <img
            src="@/assets/logo-dark.svg"
            alt="Carlos Alves - Logo"
            class="w-full"
          >
        </div>
        <h1 class="text-4xl uppercase font-secondary font-bold shadow-none">
          Carlos Alves
        </h1>
        <h2 class="text-3xl text-secondary-accent font-semibold">
          {{ textContent.role }}
        </h2>
      </div>
      <div class="networks-container flex gap-2 mt-12 absolute bottom-0">
        <a
          v-for="network in networks"
          :key="network.name"
          :href="network.url"
        >
          <vue-feather
            :type="network.icon"
            class="text-3xl hover:text-primary-accent"
          />
        </a>
      </div>
    </section>
    <hr class="mt-12 mx-4">
    <section
      id="About"
      class="content-section p-2 relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.introducing }}
      </h2>
      <div class="main-section-content site-presentation absolute flex items-center mx-auto px-4 mt-16 md:mt-0">
        <component :is="AuthorCard" />
      </div>
    </section>
    <hr class="mt-12 mx-4">
    <section
      id="Projects"
      class="content-section relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.projects }}
      </h2>
      <div
        class="projects-container main-section-content absolute flex flex-col md:flex-row gap-2 md:gap-6 mb-6 items-center mt-28 md:mt-0 overflow-scroll"
      >
        <component
          v-for="project in projects"
          :key="project.title"
          :is="ProjectCard"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :repository="project.repo"
          :demo="project.link"
        />
      </div>
    </section>
    <hr class="mt-32 lg:mt-12 mx-4">
    <section
      id="Skills"
      class="content-section relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.skills }}
      </h2>
      <div class="main-section-content site-presentation flex flex-col items-center justify-center w-full absolute px-2">
        <div
          class="swiffy-slider slider-nav-outside slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart .slider-item-nogap slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x32 .slider-item-reveal bg-secondary-bg rounded-md w-full max-w-[1200px] min-h-[150px] shadow-lg py-3 py-lg-4"
          data-slider-nav-autoplay-interval="2000"
        >
          <div class="slider-container">
            <component
              v-for="skill in skills"
              :key="skill.title"
              :is="SkillCard"
              :title="skill.title"
              :icon="skill.icon"
            />
          </div>
          <button
            type="button"
            class="slider-nav"
            aria-label="Go left"
          />
          <button
            type="button"
            class="slider-nav slider-nav-next"
            aria-label="Go left"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="stylus">
main {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
section {
  scroll-snap-align: start;
}
.swiffy-slider {
  --swiffy-slider-item-count: 1;

  @media (min-width: 285px) {
    --swiffy-slider-item-count: 2;
  }

  @media (min-width: 768px) {
    --swiffy-slider-item-count: 3;
  }

  @media (min-width: 1200px) {
    --swiffy-slider-item-count: 4;
  }
}

.content-section,
.main-section-content {
  height: 100vh;
  min-height: 800px;
}

.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.site-presentation {
  h1 {
    color: darken(#3498DB, 10);
  }

  h2 {
    color: darken(#F39C12, 10);
  }
}

.project-card:nth-child(2) {
  @media (min-width: 768px) {
    margin-top: 150px;
  }
}
</style>
