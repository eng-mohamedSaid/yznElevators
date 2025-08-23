<script setup></script>

<template>
  <header
    class="glass-header fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-lucide="rocket"
          class="lucide lucide-rocket text-[#f68a22]"
        >
          <path
            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          ></path>
          <path
            d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
          ></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        <span class="text-xl font-bold text-white">اليزن للمصاعد</span>
      </div>
      <nav class="hidden lg:flex items-center gap-8">
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >الرئيسية</span
        >
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >خدماتنا</span
        >
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >منتجاتنا</span
        >
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >المعرض</span
        >
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >من نحن</span
        >
        <span
          class="cursor-pointer text-base font-medium text-zinc-300 hover:text-white transition-colors"
          >تواصل معنا</span
        >
      </nav>
      <div class="flex items-center gap-4">
        <button
          class="px-4 py-2 text-sm font-bold text-white bg-[#f68a22] rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
        >
          اطلب عرض سعر
        </button>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-lucide="globe"
            class="lucide lucide-globe w-5 h-5"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <span class="text-sm font-medium">EN</span>
        </div>
        <button class="p-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-lucide="menu"
            class="lucide lucide-menu w-6 h-6"
          >
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
            <path d="M4 6h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
