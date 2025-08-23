<script setup></script>

<template>
  <section id="contact" aria-label="تواصل معنا" class="py-24 bg-[#0b2541]">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16">
        <div class="bg-[#030a14] p-8 rounded-2xl">
          <h3 class="text-3xl font-bold text-white">اطلب عرض سعر أو استفسر</h3>
          <p class="mt-2 text-zinc-400">
            املأ النموذج وسيقوم أحد خبرائنا بالتواصل معك في أقرب وقت.
          </p>
          <form class="mt-8 space-y-6">
            <!-- Input: Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-zinc-300 mb-2"
                >الاسم الكامل</label
              >
              <input
                type="text"
                id="name"
                class="block w-full px-4 py-3 bg-[#0b2541] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:border-transparent transition-all"
                placeholder="مثال: محمد أحمد"
              />
            </div>
            <!-- Input: Email & Phone -->
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-zinc-300 mb-2"
                  >البريد الإلكتروني</label
                >
                <input
                  type="email"
                  id="email"
                  class="block w-full px-4 py-3 bg-[#0b2541] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-zinc-300 mb-2"
                  >رقم الهاتف</label
                >
                <input
                  type="tel"
                  id="phone"
                  class="block w-full px-4 py-3 bg-[#0b2541] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:border-transparent transition-all"
                  placeholder="01xxxxxxxxx"
                />
              </div>
            </div>
            <!-- Textarea: Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-zinc-300 mb-2"
                >رسالتك</label
              >
              <textarea
                id="message"
                rows="4"
                class="block w-full px-4 py-3 bg-[#0b2541] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:border-transparent transition-all"
                placeholder="اكتب تفاصيل طلبك هنا..."
              ></textarea>
            </div>
            <!-- Button: Submit -->
            <button
              type="submit"
              class="w-full px-8 py-3 text-base font-bold text-white bg-[#f68a22] rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f68a22] focus:ring-offset-2 focus:ring-offset-[#030a14] transition-all duration-300"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
        <div class="flex flex-col justify-center">
          <h3 class="text-3xl font-bold text-white">معلومات التواصل</h3>
          <p class="mt-2 text-zinc-300">
            نحن هنا لمساعدتك. تواصل معنا مباشرة عبر القنوات التالية:
          </p>
          <div class="mt-8 space-y-6">
            <div class="flex items-start gap-4">
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
                data-lucide="map-pin"
                class="lucide lucide-map-pin w-6 h-6 text-[#f68a22] mt-1"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <span class="font-bold text-white">مكتبنا الرئيسي</span>
                <p class="text-zinc-400">
                  123 شارع النيل، المهندسين، الجيزة، مصر
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
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
                data-lucide="phone"
                class="lucide lucide-phone w-6 h-6 text-[#f68a22] mt-1"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                ></path>
              </svg>
              <div>
                <span class="font-bold text-white">هاتف المبيعات</span>
                <p class="text-zinc-400 text-left" dir="ltr">
                  +20 100 123 4567
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
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
                data-lucide="mail"
                class="lucide lucide-mail w-6 h-6 text-[#f68a22] mt-1"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <div>
                <span class="font-bold text-white">البريد الإلكتروني</span>
                <p class="text-zinc-400">info@alyazan-elevators.com</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <button
              class="inline-flex items-center gap-3 px-6 py-3 text-base font-bold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0b2541] transition-all duration-300"
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
                data-lucide="message-circle"
                class="lucide lucide-message-circle"
              >
                <path
                  d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                ></path>
              </svg>
              <span>تواصل معنا عبر واتساب</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
