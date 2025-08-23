<script setup></script>

<template>
  <section id="products" aria-label="منتجاتنا" class="py-24 bg-[#0b2541]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">استكشف أنواع المصاعد</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-zinc-300">
          نقدم مجموعة واسعة من المصاعد التي تناسب كل أنواع المباني والأغراض.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Product Card -->
        <div
          class="bg-[#030a14] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#f68a22]/20"
        >
          <div
            class="relative h-64 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1634838081272-78b1d42d38b6?q=80&amp;w=1964&amp;auto=format&amp;fit=crop');
            "
          >
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"
            ></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white">مصاعد الركاب</h3>
            <p class="mt-2 text-zinc-400">
              مثالية للمباني السكنية والتجارية، تتميز بالسرعة والراحة.
            </p>
            <button
              class="mt-4 text-sm font-semibold text-[#f68a22] flex items-center gap-2"
            >
              عرض التفاصيل
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
                data-lucide="chevrons-left"
                class="lucide lucide-chevrons-left w-4 h-4"
              >
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Product Card -->
        <div
          class="bg-[#030a14] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#f68a22]/20"
        >
          <div
            class="relative h-64 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1589136938202-a72504443916?q=80&amp;w=1974&amp;auto=format&amp;fit=crop');
            "
          >
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"
            ></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white">مصاعد البضائع</h3>
            <p class="mt-2 text-zinc-400">
              حلول قوية ومتينة لنقل الحمولات الثقيلة في المصانع والمستودعات.
            </p>
            <button
              class="mt-4 text-sm font-semibold text-[#f68a22] flex items-center gap-2"
            >
              عرض التفاصيل
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
                data-lucide="chevrons-left"
                class="lucide lucide-chevrons-left w-4 h-4"
              >
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Product Card -->
        <div
          class="bg-[#030a14] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#f68a22]/20"
        >
          <div
            class="relative h-64 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1542183222-246de1ba416c?q=80&amp;w=1964&amp;auto=format&amp;fit=crop');
            "
          >
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"
            ></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white">المصاعد البانورامية</h3>
            <p class="mt-2 text-zinc-400">
              تصميم زجاجي فريد يضيف لمسة جمالية للمولات والفنادق.
            </p>
            <button
              class="mt-4 text-sm font-semibold text-[#f68a22] flex items-center gap-2"
            >
              عرض التفاصيل
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
                data-lucide="chevrons-left"
                class="lucide lucide-chevrons-left w-4 h-4"
              >
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        class="mt-10 w-full sm:w-auto px-8 py-3 text-base font-bold text-white bg-[#f68a22] rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
      >
        استكشف كل منتجاتنا
      </button>
    </div>
  </section>
</template>

<style scoped></style>
