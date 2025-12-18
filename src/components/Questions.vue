<script setup>
import arrow from "@/assets/img/arrow.svg";

const faqs = [
  {
    question: "ما هي المدة اللازمة لتركيب مصعد جديد؟",
    answer:
      "تعتمد مدة التركيب على نوع المصعد ومواصفات المبنى، ولكنها تتراوح عادةً بين أسبوعين إلى 6 أسابيع بعد الانتهاء من تجهيز بئر المصعد.",
  },
  {
    question: "هل تقدمون خدمات الصيانة للمصاعد التي لم تقم شركتكم بتركيبها؟",
    answer:
      "نعم بكل تأكيد، فريقنا الفني مؤهل للتعامل مع مختلف أنواع المصاعد من مختلف الشركات المصنعة. يمكننا تقديم عقود صيانة مخصصة لضمان أداء مصعدك الحالي بأفضل شكل.",
  },
  {
    question: "ما هي تكلفة المصعد؟",
    answer:
      "تختلف التكلفة بشكل كبير بناءً على عوامل متعددة مثل نوع المصعد (ركاب، بضائع، بانورامي)، عدد الطوابق، الحمولة، ونوع التشطيبات الداخلية. للحصول على تقدير دقيق، يرجى طلب عرض سعر.",
  },
];
</script>

<template>
  <section id="faq" aria-label="الأسئلة الشائعة" class="section-margin bg-primary-dark">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">الأسئلة الشائعة</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
          إجابات على أكثر الاستفسارات التي تصلنا من عملائنا الكرام.
        </p>
      </div>

      <div class="space-y-4">
        <details
          v-for="(faq, i) in faqs"
          :key="i"
          class="group glass-card p-6 rounded-xl cursor-pointer"
        >
          <summary
            class="flex items-center justify-between font-bold text-lg text-white"
          >
            <span>{{ faq.question }}</span>
            <img
              :src="arrow"
              alt="arrow"
              class="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p class="mt-4 text-zinc-300">
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
