<script setup>
import { ref } from "vue";
import Logo from "./icons/Logo.vue";

const mobileMenu = ref(false);

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "من نحن", href: "#about" },
];

function toggleMenu() {
  mobileMenu.value = !mobileMenu.value;
}

function closeMenu() {
  mobileMenu.value = false;
}
</script>

<template>
  <header
    class="glass-header fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-1 md:gap-2">
        <Logo color="white" class="w-9 md:w-12" />
        <p class="text-base md:text-xl font-bold text-white">اليزن للمصاعد</p>
      </div>

      <nav class="hidden lg:flex items-center gap-8">
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.href"
          @click="closeMenu"
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-1.5 md:gap-4">
        <!-- CTA Button -->
        <button
          class="hidden md:block px-4 py-2 text-sm font-bold text-white bg-accent rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
        >
          اطلب عرض سعر
        </button>

        <!-- Language Switch -->
        <div class="flex items-center gap-1 cursor-pointer">
          <img
          src="../assets/img/language.svg"
          class="w-5 h-5"
          alt="Language"
          />
          <span class="text-sm font-medium">EN</span>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          :aria-expanded="mobileMenu"
          aria-label="Toggle menu"
          class="md:hidden w-9 h-10 flex flex-col items-center justify-center"
        >
          <span
            :class="['block w-5 h-[2px] bg-white rounded transition-transform duration-200', mobileMenu ? 'rotate-45 translate-y-1' : '']"
          ></span>
          <span
            :class="['block w-5 h-[2px] bg-white rounded my-1 transition-opacity duration-200', mobileMenu ? 'opacity-0' : 'opacity-100']"
          ></span>
          <span
            :class="['block w-5 h-[2px] bg-white rounded transition-transform duration-200', mobileMenu ? '-rotate-45 -translate-y-1' : '']"
          ></span>
        </button>
      </div>
    </div>
    <!-- Mobile nav -->
    <div
      v-show="mobileMenu"
      class="md:hidden"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col gap-3 bg-primary/95 p-4 rounded-lg glass-card">
          <a
            v-for="(item, i) in navItems"
            :key="i + '-m'"
            :href="item.href"
            @click="closeMenu"
            class="text-right text-lg font-medium text-zinc-100 py-2 px-3 hover:bg-primary/20 rounded transition-colors"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
