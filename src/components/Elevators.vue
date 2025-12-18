<script setup>
const products = [
  {
    title: "مصاعد الركاب",
    desc: "مثالية للمباني السكنية والتجارية، تتميز بالسرعة والراحة والأناقة.",
    img: "https://images.unsplash.com/photo-1631248979010-6775b0c88180?w=300&auto=format&fit=crop&q=60",
    delay: "100ms",
  },
  {
    title: "مصاعد البضائع",
    desc: "حلول قوية ومتينة لنقل الحمولات الثقيلة في المصانع والمستودعات والمراكز التجارية.",
    img: "https://images.unsplash.com/photo-1592256410394-51c948ec13d5?w=300&auto=format&fit=crop&q=60",
    delay: "200ms",
  },
  {
    title: "المصاعد البانورامية",
    desc: "تصميم زجاجي فريد يضيف لمسة جمالية وفخامة للمولات والفنادق والمباني الأيقونية.",
    img: "https://images.unsplash.com/photo-1719463814218-52e17f720e8a?w=300&auto=format&fit=crop&q=60",
    delay: "300ms",
  },
  {
    title: "مصاعد المستشفيات",
    desc: "مصممة لنقل المرضى والمعدات الطبية بسلاسة وأمان مع أنظمة طوارئ متقدمة.",
    img: "https://plus.unsplash.com/premium_photo-1664300911352-fe06c38112c3?w=300&auto=format&fit=crop&q=60",
    delay: "400ms",
  },
  {
    title: "مصاعد الفلل (هوم ليفت)",
    desc: "حلول مدمجة وأنيقة تضفي لمسة من الرفاهية والراحة لمنزلك دون الحاجة لأعمال إنشائية معقدة.",
    img: "https://images.unsplash.com/photo-1566096650255-98ba2641071e?w=300&auto=format&fit=crop&q=60",
    delay: "500ms",
  },
  {
    title: "السلالم الكهربائية",
    desc: "حلول فعالة لنقل أعداد كبيرة من الناس بسلاسة في المطارات ومراكز التسوق ومحطات المترو.",
    img: "https://images.unsplash.com/photo-1565417814737-6b4097de8a3a?w=300&auto=format&fit=crop&q=60",
    delay: "600ms",
  },
];
</script>

<template>
  <section
    id="products"
    aria-label="صفحة منتجاتنا"
    class="py-24 bg-primary-dark"
  >
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <span class="font-bold text-accent">مجموعتنا الكاملة</span>
        <h1 class="text-4xl md:text-5xl font-black text-white mt-2">
          حلول مصاعد لكل الاحتياجات
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-lg text-zinc-400">
          من المصاعد السكنية المدمجة إلى حلول الشحن الصناعية القوية، نقدم مجموعة
          لا مثيل لها من منتجات النقل العمودي المصممة بأعلى معايير الجودة
          والأمان.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(product, i) in products"
          :key="i"
          class="animate-fade-in-up group relative rounded-2xl overflow-hidden h-96 product-card-bg shadow-lg bg-no-repeat bg-contain"
          :style="{
            animationDelay: product.delay,
            backgroundImage: `url(${product.img})`,
          }"
        >
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          ></div>

          <!-- Content -->
          <div class="relative p-6 h-full flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-white">{{ product.title }}</h3>
            <p class="mt-2 text-zinc-300 text-sm">{{ product.desc }}</p>
            <button
              class="mt-4 px-4 py-2 text-sm font-bold text-white bg-accent rounded-lg hover:bg-opacity-90 transition-all"
            >
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
