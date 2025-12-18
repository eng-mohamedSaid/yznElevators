<script setup>
import Header from "@/components/Header.vue";
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue";
import Questions from "@/components/Questions.vue";
import Elevators from "@/components/Elevators.vue";
// import ContactUs from "@/components/ContactUs.vue";
</script>

<template>
  <div class="antialiased bg-primary-dark text-zinc-300">
    <Header />
    <Landing />
    <Services />
    <About />
    <Questions />
    <Elevators />
    <Footer />
  </div>
</template>

<style scoped></style>
