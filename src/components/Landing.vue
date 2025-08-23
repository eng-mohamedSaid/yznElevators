<script setup></script>

<template>
  <section
    id="hero"
    aria-label="الصفحة الرئيسية"
    class="relative py-32 text-center bg-cover bg-center"
    style="
      background-image: linear-gradient(
          rgba(11, 37, 65, 0.8),
          rgba(3, 10, 20, 1)
        ),
        url('https://images.unsplash.com/photo-1594411440293-899d996e38b3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop');
    "
  >
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-black text-white leading-tight">
        اليزن للمصاعد: ارتقِ بمبناك إلى آفاق جديدة
      </h1>
      <p class="mt-4 max-w-3xl mx-auto text-lg text-zinc-300">
        نقدم حلول مصاعد مبتكرة وآمنة تجمع بين التكنولوجيا المتقدمة والتصميم
        الأنيق لتلبية كافة احتياجاتك.
      </p>
      <div
        class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          class="w-full sm:w-auto px-8 py-3 text-base font-bold text-white bg-[#f68a22] rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
        >
          اطلب عرض سعر الآن
        </button>
        <button
          class="w-full sm:w-auto px-8 py-3 text-base font-bold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#0b2541] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
        >
          اكتشف خدماتنا
        </button>
      </div>
      <div
        class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        <div class="flex flex-col items-center gap-2">
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
            data-lucide="award"
            class="lucide lucide-award w-10 h-10 text-[#f68a22]"
          >
            <path
              d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
            ></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
          <span class="text-xl font-bold text-white">+15 عامًا</span>
          <span class="text-sm text-zinc-400">من الخبرة</span>
        </div>
        <div class="flex flex-col items-center gap-2">
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
            data-lucide="building-2"
            class="lucide lucide-building-2 w-10 h-10 text-[#f68a22]"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
          <span class="text-xl font-bold text-white">+500 مشروع</span>
          <span class="text-sm text-zinc-400">مكتمل بنجاح</span>
        </div>
        <div class="flex flex-col items-center gap-2">
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
            data-lucide="shield-check"
            class="lucide lucide-shield-check w-10 h-10 text-[#f68a22]"
          >
            <path
              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            ></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <span class="text-xl font-bold text-white">أمان 100%</span>
          <span class="text-sm text-zinc-400">معايير عالمية</span>
        </div>
        <div class="flex flex-col items-center gap-2">
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
            data-lucide="users"
            class="lucide lucide-users w-10 h-10 text-[#f68a22]"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          <span class="text-xl font-bold text-white">عملاء راضون</span>
          <span class="text-sm text-zinc-400">ثقة وتميز</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
