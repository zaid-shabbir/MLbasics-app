<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar />
      <div class="row">
        <div class="col-m-5 col-3 menu">
          <Aside />
        </div>
        <div class="col-m-6 col-9 scroll">
          <router-view />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Aside from "@/views/Aside.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Aside,
    Navbar,
    Footer
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
