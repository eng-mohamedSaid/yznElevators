<script setup>
import Logo from "./icons/Logo.vue";

const navItems = [
  "الرئيسية",
  "خدماتنا",
  "منتجاتنا",
  "المعرض",
  "من نحن",
  "تواصل معنا",
];
</script>

<template>
  <header
    class="glass-header fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-2">
        <Logo color="white" class="w-12" />
        <p class="text-xl font-bold text-white">اليزن للمصاعد</p>
      </div>

      <nav class="hidden lg:flex items-center gap-8">
        <span
          v-for="(item, i) in navItems"
          :key="i"
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
        >
          {{ item }}
        </span>
      </nav>

      <div class="flex items-center gap-4">
        <!-- CTA Button -->
        <button
          class="px-4 py-2 text-sm font-bold text-white bg-[#f68a22] rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
        >
          اطلب عرض سعر
        </button>

        <!-- Language Switch -->
        <div class="flex items-center gap-2 cursor-pointer">
          <img
            src="../assets/img/language.svg"
            class="w-5 h-5"
            alt="Language"
          />
          <span class="text-sm font-medium">EN</span>
        </div>

        <!-- Mobile Menu Button -->
        <label
          class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
        >
          <input class="hidden peer" type="checkbox" />
          <div
            class="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
          ></div>
          <div
            class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
          ></div>
          <div
            class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
          ></div>
        </label>
      </div>
    </div>
  </header>
</template>
