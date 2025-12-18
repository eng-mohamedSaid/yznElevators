<script setup>
import saftey2Icon from "../assets/img/saftey2.svg";
import galleryIcon from "../assets/img/gallery.svg";
import handsIcon from "../assets/img/hands.svg";
import lampIcon from "../assets/img/lamp.svg";
const features = [
  {
    icon: saftey2Icon,
    title: "الأمان أولاً",
    desc: "نلتزم بأعلى معايير السلامة العالمية.",
  },
  {
    icon: galleryIcon,
    title: "الجودة والاتقان",
    desc: "نستخدم أفضل المواد وأحدث التقنيات.",
  },
  {
    icon: handsIcon,
    title: "النزاهة والشفافية",
    desc: "علاقاتنا مبنية على الثقة والاحترام المتبادل.",
  },
  {
    icon: lampIcon,
    title: "الابتكار المستمر",
    desc: "نسعى دائمًا لتقديم حلول ذكية ومتطورة.",
  },
];
</script>

<template>
  <section id="about" aria-label="عن الشركة" class="py-24 bg-primary">
    <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Text Section -->
      <div>
        <span class="font-bold text-accent">من نحن</span>
        <h2 class="mt-2 text-4xl font-bold text-white">
          رواد حلول الحركة العمودية في مصر
        </h2>
        <p class="mt-6 text-lg text-zinc-300">
          في اليزن للمصاعد، نجمع بين الهندسة الدقيقة والشغف بالابتكار لتقديم
          مصاعد تتجاوز توقعاتكم. مهمتنا هي توفير حلول نقل عمودية آمنة، موثوقة،
          وأنيقة تساهم في تطور المشهد العمراني في مصر.
        </p>

        <!-- Features -->
        <div class="mt-8 grid grid-cols-2 gap-8">
          <div v-for="(feature, i) in features" :key="i" class="flex items-start gap-4">
            <div class="p-3 bg-[#f68a22]/10 rounded-lg">
              <img :src="feature.icon" class="w-7" :alt="feature.title" />
            </div>
            <div>
              <h4 class="font-bold text-white">{{ feature.title }}</h4>
              <p class="text-sm text-zinc-400">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="hidden lg:block h-[500px] rounded-2xl bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop');">
      </div>
    </div>
  </section>
</template>
