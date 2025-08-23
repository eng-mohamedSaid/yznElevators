<script setup>
</script>

<template>
  <section
        id="services"
        aria-label="خدماتنا الرئيسية"
        class="py-24 bg-[#030a14]"
      >
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-white">خدماتنا المتكاملة</h2>
            <p class="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
              نوفر لك كل ما تحتاجه من الألف إلى الياء، بدءًا من التوريد والتركيب
              وحتى الصيانة وقطع الغيار.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Service Card 1 -->
            <div
              class="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f68a22]/10"
            >
              <div
                class="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-[#f68a22]/10 rounded-full"
              >
                <i data-lucide="elevator" class="w-10 h-10 text-[#f68a22]"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">
                توريد وتركيب المصاعد
              </h3>
              <p class="text-zinc-400 mb-6">
                حلول مصاعد كاملة للمباني السكنية والتجارية والمستشفيات، مصممة
                خصيصًا لتلبية متطلباتك.
              </p>
              <span
                class="font-semibold text-[#f68a22] hover:underline cursor-pointer flex items-center justify-center gap-2"
                >اطلب عرض سعر للتوريد
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
                  data-lucide="arrow-left"
                  class="lucide lucide-arrow-left w-4 h-4"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path></svg></span>
            </div>
            <!-- Service Card 2 -->
            <div
              class="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f68a22]/10"
            >
              <div
                class="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-[#f68a22]/10 rounded-full"
              >
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
                  data-lucide="wrench"
                  class="lucide lucide-wrench w-10 h-10 text-[#f68a22]"
                >
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">
                عقود الصيانة والإصلاح
              </h3>
              <p class="text-zinc-400 mb-6">
                خدمات صيانة دورية واحترافية لضمان عمل مصعدك بكفاءة وأمان على
                مدار الساعة.
              </p>
              <span
                class="font-semibold text-[#f68a22] hover:underline cursor-pointer flex items-center justify-center gap-2"
                >اطلب عرض سعر للصيانة
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
                  data-lucide="arrow-left"
                  class="lucide lucide-arrow-left w-4 h-4"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path></svg></span>
            </div>
            <!-- Service Card 3 -->
            <div
              class="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f68a22]/10"
            >
              <div
                class="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-[#f68a22]/10 rounded-full"
              >
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
                  data-lucide="shopping-cart"
                  class="lucide lucide-shopping-cart w-10 h-10 text-[#f68a22]"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path
                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">بيع قطع الغيار</h3>
              <p class="text-zinc-400 mb-6">
                متجر متكامل لبيع جميع قطع غيار المصاعد الأصلية والملحقات بأفضل
                الأسعار.
                <span
                  class="font-semibold text-[#f68a22] hover:underline cursor-pointer flex items-center justify-center gap-2"
                  >تصفح المتجر
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
                    data-lucide="arrow-left"
                    class="lucide lucide-arrow-left w-4 h-4"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path></svg></span>
              </p>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>

</style>
