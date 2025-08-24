<script setup>
import Logo from "./icons/Logo.vue";

// icons
import locationIcon from "@/assets/img/location.svg";
import phoneIcon from "@/assets/img/phone.svg";
import emailIcon from "@/assets/img/email.svg";
import facebookIcon from "@/assets/img/facebook.svg";
import instgramIcon from "@/assets/img/instgram.svg";
import linkedinIcon from "@/assets/img/linkedin.svg";
import whatsappIcon from "@/assets/img/whatsapp.svg";

// quick links
const quickLinks = [
  "خدماتنا",
  "منتجاتنا",
  "معرض المشاريع",
  "من نحن",
  "الأسئلة الشائعة",
];

// contact info
const contacts = [
  {
    icon: locationIcon,
    text: "123 شارع النيل، المهندسين، الجيزة، مصر",
  },
  {
    icon: phoneIcon,
    text: "+20 100 123 4567",
    dir: "ltr",
  },
  {
    icon: emailIcon,
    text: "info@alyazan-elevators.com",
  },
];

// social icons
const socialIcons = [
  { icon: facebookIcon, alt: "Facebook" },
  { icon: instgramIcon, alt: "Instagram" },
  { icon: linkedinIcon, alt: "LinkedIn" },
];
</script>

<template>
  <footer class="bg-[#0b2541] text-zinc-300 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Company Info -->
        <div>
          <div class="flex items-center gap-3">
            <Logo color="white" class="w-12" />
            <span class="text-2xl font-bold text-white">اليزن للمصاعد</span>
          </div>
          <p class="mt-4 text-zinc-400 text-sm leading-relaxed">
            رواد حلول الحركة العمودية في مصر، نقدم مصاعد آمنة وموثوقة بتصاميم
            عصرية وتقنيات متطورة.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-lg font-bold text-white mb-4">روابط سريعة</h4>
          <div class="space-y-3">
            <span
              v-for="(link, i) in quickLinks"
              :key="i"
              class="block text-sm text-zinc-400 hover:text-[#f68a22] transition-colors cursor-pointer"
              >{{ link }}</span
            >
          </div>
        </div>

        <!-- Column 3: Contact Info -->
        <div>
          <h4 class="text-lg font-bold text-white mb-4">معلومات التواصل</h4>
          <div class="space-y-4">
            <div
              v-for="(contact, i) in contacts"
              :key="i"
              class="flex items-start gap-3"
            >
              <img :src="contact.icon" :alt="contact.text" class="w-6 h-6" />
              <span
                class="text-sm text-zinc-400"
                :dir="contact.dir || 'rtl'"
                >{{ contact.text }}</span
              >
            </div>
          </div>
        </div>

        <!-- Column 4: Get in Touch -->
        <div>
          <h4 class="text-lg font-bold text-white mb-4 text-center md:text-start">تواصل معنا مباشرة</h4>
          <button
            class="w-full inline-flex items-center justify-center gap-3 px-4 py-3 text-base font-bold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
          >
            <img :src="whatsappIcon" alt="WhatsApp" class="w-6 h-6" />
            <span>واتساب</span>
          </button>
          <div class="flex justify-center md:justify-start gap-4 mt-6">
            <span
              v-for="(social, i) in socialIcons"
              :key="i"
              class="p-2 rounded-full bg-zinc-700/50 hover:bg-[#f68a22] transition-colors cursor-pointer"
            >
              <img :src="social.icon" :alt="social.alt" class="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div
        class="mt-12 pt-8 border-t border-zinc-700/50 text-center text-zinc-500 text-sm"
      >
        <p>© 2025 اليزن للمصاعد. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>
</template>
