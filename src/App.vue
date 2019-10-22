<template>
  <div id="app">
    <a name="home" id="home"></a>

    <Nav />
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import $ from 'jquery'
import jQuery from "jquery";
window.jQuery = window.$ = jQuery;
export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  mounted() {
    emailjs.init("user_KlCkRjkTOxFPsK5ekrshB");

    // document.body.height = window.innerHeight;

    // window.onresize = function() {
    //   document.body.height = window.innerHeight;
    // };
    // window.onresize();

  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Big+Shoulders+Text:100,400,600,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

* {
  outline: none;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0;
  height: 0;
}
html,
body {
  background: black;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3 {
  font-family: "Big Shoulders Text", Helvetica;
  /* text-transform: capitalizes; */
}
p,
input,
textarea {
  font-family: roboto !important;
}
#app {
  font-family: "Big Shoulders Text", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background: black; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  max-height: 99.9vh;
  box-sizing: border-box;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  /* -webkit-filter: blur(8px); */
  transform: translateX(2px);
}
</style>
