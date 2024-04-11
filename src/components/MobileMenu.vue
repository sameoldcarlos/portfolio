<script setup>
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { options } from '@/content/menu.json';
import { useLanguage } from '@/stores/languages';
import { useMobileMenu } from '@/stores/mobile-menu';

const menuStore = useMobileMenu();
const store = useLanguage();

const menuTarget = ref(null);

const menuOptions = computed(() => options[store.language]);

onClickOutside(menuTarget, () => {
  menuStore.closeMenu();
});
</script>
<template>
  <aside ref="menuTarget">
    <div
      :class="[
        'fixed top-0 left-0 h-full bg-primary-accent z-50 transform transition-transform duration-300 ease-linear',
        menuStore.isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      ]"
    >
      <div class="flex flex-col items-center h-full py-7">
        <button
          class="absolute top-4 right-4"
          @click="menuStore.closeMenu"
        >
          <vue-feather type="x" />
        </button>
        <ul class="flex flex-col gap-4">
          <li
            v-for="option in menuOptions"
            :key="option.id"
            class="text-2xl"
          >
            <a
              :href="option.link"
              class="text-secondary-text py-2 px-12 block h-full"
            >
              {{ option.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
