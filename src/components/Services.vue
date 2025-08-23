<script setup>
import recoverIcon from "../assets/img/recover.svg";
import elevatorIcon from "../assets/img/elevator.svg";
import cartIcon from "../assets/img/cart.svg";
import Arrow from "./icons/Arrow.vue";

const services = [
  {
    icon: elevatorIcon,
    title: "توريد وتركيب المصاعد",
    desc: "حلول مصاعد كاملة للمباني السكنية والتجارية والمستشفيات، مصممة خصيصًا لتلبية متطلباتك.",
    cta: "اطلب عرض سعر للتوريد",
  },
  {
    icon: recoverIcon,
    title: "عقود الصيانة والإصلاح",
    desc: "خدمات صيانة دورية واحترافية لضمان عمل مصعدك بكفاءة وأمان على مدار الساعة.",
    cta: "اطلب عرض سعر للصيانة",
  },
  {
    icon: cartIcon,
    title: "بيع قطع الغيار",
    desc: "متجر متكامل لبيع جميع قطع غيار المصاعد الأصلية والملحقات بأفضل الأسعار.",
    cta: "تصفح المتجر",
  },
];
</script>

<template>
  <section id="services" aria-label="خدماتنا الرئيسية" class="py-24 bg-[#030a14]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">خدماتنا المتكاملة</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
          نوفر لك كل ما تحتاجه من الألف إلى الياء، بدءًا من التوريد والتركيب وحتى الصيانة وقطع الغيار.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f68a22]/10"
        >
          <div
            class="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-[#f68a22]/10 rounded-full"
          >
            <img :src="service.icon" class="w-10" :alt="service.title" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">{{ service.title }}</h3>
          <p class="text-zinc-400 mb-6">{{ service.desc }}</p>
          <span
            class="font-semibold text-[#f68a22] hover:underline cursor-pointer flex items-center justify-center gap-2"
          >
            {{ service.cta }} <Arrow color="#f68a22" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
