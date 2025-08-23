<script setup>
import experienceIcon from "../assets/img/experience.svg";
import projectIcon from "../assets/img/project.svg";
import safetyIcon from "../assets/img/saftey.svg";
import clientsIcon from "../assets/img/clients.svg";

const stats = [
  { icon: experienceIcon, value: "+15 عامًا", label: "من الخبرة" },
  { icon: projectIcon, value: "+500 مشروع", label: "مكتمل بنجاح" },
  { icon: safetyIcon, value: "أمان 100%", label: "معايير عالمية" },
  { icon: clientsIcon, value: "عملاء راضون", label: "ثقة وتميز" },
];
</script>

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
        url('https://images.unsplash.com/photo-1594411440293-899d996e38b3?q=80&w=2070&auto=format&fit=crop');
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
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="flex flex-col items-center gap-2"
        >
          <img :src="stat.icon" class="w-10" :alt="stat.label" />
          <span class="text-xl font-bold text-white">{{ stat.value }}</span>
          <span class="text-sm text-zinc-400">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
