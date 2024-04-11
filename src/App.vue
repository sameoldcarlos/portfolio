<script setup>
import AuthorCard from '@/components/AuthorCard.vue';
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import ExperienceTimeline from '@/components/ExperienceTimeline.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import { networks } from '@/content/networks.json';
import { skills } from '@/content/skills.json';
import content from '@/content/content.json';
import { projects } from '@/content/projects.json';
import { useLanguage } from '@/stores/languages';
import { swiffyslider } from 'swiffy-slider';
import { computed, onMounted } from 'vue';
import { useMobileMenu } from '@/stores/mobile-menu';

const menuStore = useMobileMenu();

const store = useLanguage();

const emailAddress = 'carlospereira.webdev@gmail.com';

const emailMessage = {
  en: {
    subject: 'Contact from Portfolio',
    body: 'Hello Carlos, I found your portfolio and I would like to talk to you about...'
  },
  es: {
    subject: 'Contacto desde el Portafolio',
    body: 'Hola Carlos, encontré tu portafolio y me gustaría hablar contigo sobre...'
  },
  pt: {
    subject: 'Contato pelo Portfólio',
    body: 'Olá Carlos, encontrei seu portfólio e gostaria de falar com você sobre...'
  }
};

const whatsappNumber = '+5577988723301';

const whatsappMessage = {
  en:'Hello Carlos, I found your portfolio and I would like to talk to you about...',
  es: 'Hola Carlos, encontré tu portafolio y me gustaría hablar contigo sobre...',
  pt: 'Olá Carlos, encontrei seu portfólio e gostaria de falar com você sobre...'
};

const whatsappHref = computed(() => {
  return `https://wa.me/${whatsappNumber}?text=${whatsappMessage[store.language]}`;
});

const emailHref = computed(() => {
  const { subject, body } = emailMessage[store.language];

  return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

const textContent = computed(() => {
  return content[store.language];
});

onMounted(() => {
  swiffyslider.init();
});
</script>

<template>
  <main>
    <div
      :class="['menu-overlay fixed w-screen h-screen bg-secondary-text opacity-50', [menuStore.isMenuOpen ? 'block z-40' : 'hidden z-0']]"
    />
    <component :is="MobileMenu" />
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
      <div class="networks-container flex gap-4 mt-12 absolute bottom-0 mb-11 lg:mb-3">
        <a
          v-for="network in networks"
          :key="network.name"
          :href="network.url"
        >
          <vue-feather
            :type="network.icon"
            class="text-3xl hover:text-primary-accent"
            size="32"
          />
        </a>
      </div>
    </section>
    <hr class="mt-12 mx-4">
    <section
      id="about"
      class="content-section p-2 relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.introducing }}
      </h2>
      <div class="main-section-content site-presentation lg:absolute flex items-center mx-auto px-4 mt-16 md:mt-0">
        <component :is="AuthorCard" />
      </div>
    </section>
    <hr class="mt-12 mx-4">
    <section
      id="projects"
      class="content-section relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.projects }}
      </h2>
      <div
        class="projects-container main-section-content lg:absolute flex flex-col lg:flex-row gap-2 lg:gap-6 mb-6 pb-11 lg:pb-0 items-center mt-28 lg:mt-0 lg:overflow-scroll"
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
      id="skills"
      class="content-section relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.skills }}
      </h2>
      <div
        class="main-section-content site-presentation flex flex-col items-center justify-center w-full absolute px-2"
      >
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
    <hr class="mt-32 lg:mt-12 mx-4">
    <section
      id="experience"
      class="experience content-section relative lg:mb-[250px]"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.experience }}
      </h2>
      <div
        class="main-section-content lg:absolute flex flex-col md:flex-row gap-2 md:gap-6 mb-6 items-center mt-28 lg:overflow-scroll"
      >
        <ExperienceTimeline />
      </div>
    </section>
    <hr class="mt-32 lg:mt-12 mx-4">
    <section
      id="contact"
      class="content-section relative"
    >
      <h2 class="mt-12 mb-6 text-3xl font-semibold font-secondary text-center">
        {{ textContent.contact }}
      </h2>
      <div
        class="main-section-content flex flex-col gap-8 md:gap-0 md:flex-row items-center md:justify-around absolute mt-48 md:mt-0 w-full max-w-[1200px]"
      >
        <h3 class="text-2xl max-w-[300px]">
          {{ textContent.any_questions }}
        </h3>
        <div class="networks-container flex flex-col gap-4">
          <a
            v-for="network in networks"
            :key="network.name"
            :href="network.url"
            :class="['flex gap-2 items-end', [network.name === 'Twitter' ? 'hidden' : '']]"
          >
            <vue-feather
              :type="network.icon"
              class="text-3xl hover:text-primary-accent"
              size="32"
            />
            <p>{{ network.username }}</p>
          </a>
          <a
            :href="emailHref"
            class="flex gap-2 items-end"
          >
            <vue-feather
              type="mail"
              class="text-3xl hover:text-primary-accent"
              size="32"
            />
            <p>{{ emailAddress }}</p>
          </a>
          <a
            :href="whatsappHref"
            class="flex gap-2 items-end"
          >
            <vue-feather
              type="phone"
              class="text-3xl hover:text-primary-accent"
              size="32"
            />
            <p>{{ whatsappNumber }}</p>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.swiffy-slider {
  --swiffy-slider-item-count: 1;
}

.content-section,
.main-section-content {
  min-height: max(100vh, 800px);
}

.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
}

.content-section,
.experience .main-section-content,
.projects-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-section::-webkit-scrollbar {
  display: none;
}

.site-presentation {
  h1 {
    color: var(--highlight-primary);
  }

  h2 {
    color: var(--highlight-secondary);
  }
}

@media (min-width: 992px) {
  main,
  .content-section,
  .main-section-content {
    height: 100vh;
  }

  main {
    scroll-snap-type: y mandatory;
  }

  section {
    scroll-snap-align: start;
  }

  .content-section {
    overflow-y: scroll;
  }
}

@media (min-width: 285px) {
  .swiffy-slider {
    --swiffy-slider-item-count: 2;
  }
}

@media (min-width: 768px) {
  .swiffy-slider {
    --swiffy-slider-item-count: 3;
  }
}

@media (min-width: 1200px) {
  .swiffy-slider {
    --swiffy-slider-item-count: 4;
  }
}

@media (min-width: 1024px) {
  .project-card:nth-child(2) {
    margin-top: 150px;
  }
}
</style>
