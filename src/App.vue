<script setup>
import NavBar from '@/components/NavBar.vue';
import { networks } from '@/content/networks.json';
import content from '@/content/content.json';
import { useLanguage } from '@/stores/languages';
import { computed } from 'vue';

const store = useLanguage();

const textContent = computed(() => {
  return content[store.language];
});
</script>

<template>
  <main>
    <section class="content-section bg-gradient-to-b from-secondary-bg relative flex flex-col items-center">
      <component :is="NavBar" />
      <div class="site-presentation flex flex-col items-center justify-center absolute">
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
        <h2 class="text-2xl text-secondary-accent font-semibold">
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
  </main>
</template>

<style scoped lang="stylus">
.content-section,
.site-presentation {
  height: 100vh;
  min-height: 800px;
}

.site-presentation {
  h1 {
    color: darken(#3498DB, 10);
  }

  h2 {
    color: darken(#F39C12, 10);
  }
}
</style>
