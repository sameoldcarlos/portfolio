<script setup>
import content from '@/content/content.json';
import { options } from '@/content/menu.json';

import { useLanguage } from '@/stores/languages';
import { useMobileMenu } from '@/stores/mobile-menu';

import { computed } from 'vue';

const store = useLanguage();
const menuStore = useMobileMenu();

const menuOptions = computed(() => options[store.language]);
const swicthLanguageTitle = computed(() => content[store.language].switch_language);
const isContentTranslated = computed(() => store.language === 'pt');

function toggleMobileMenu() {
  const isMenuOpen = menuStore.isMenuOpen;

  if (isMenuOpen) {
    menuStore.closeMenu();

    return;
  }

  menuStore.openMenu();
}

function switchLanguage(translate) {
  if (translate) {
    store.setLanguage('pt');

    return;
  }

  store.setLanguage('en');
}
</script>

<template>
  <nav class="text-secondary-text w-full">
    <div class="flex justify-between p-2">
      <button
        class="lg:hidden rounded-md"
        @click="toggleMobileMenu"
      >
        <vue-feather type="menu" />
      </button>
      <div
        class="language-selector flex gap-1 mr-0 ml-auto"
        :title="swicthLanguageTitle"
      >
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="sr-only peer"
            :checked="isContentTranslated"
            @change="switchLanguage($event.target.checked)"
          >
          <div
            class="flex relative w-14 h-7 bg-primary-text peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:left-[6px] rtl:peer-checked:after:-translate-x-full after:content-['\1F310'] after:absolute after:rounded-full after:h-6 after:w-6 after:transition-all after:text-center"
          >
            <div
              :class="[
                'text-sm font-medium text-gray-900 dark:text-gray-300 uppercase self-center px-2',
                [isContentTranslated ? 'ml-0 mr-auto' : 'ml-auto mr-0']
              ]"
            >
              {{ store.language }}
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="desktop-menu hidden lg:block text-2xl">
      <ul class="flex justify-center gap-4">
        <li
          v-for="option in menuOptions"
          :key="option.id"
          class="hover:text-secondary-accent"
        >
          <a :href="`#${option}`">
            <span>{{ option }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
