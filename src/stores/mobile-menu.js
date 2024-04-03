import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMobileMenu = defineStore('mobileMenu', () => {
  const isMenuOpen = ref(false);

  function openMenu() {
    isMenuOpen.value = true;
  }

  function closeMenu() {
    isMenuOpen.value = false;
  }

  return {
    isMenuOpen,
    openMenu,
    closeMenu
  };

});
