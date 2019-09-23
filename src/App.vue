<template>
  <div id="app">
    <!-- <Nav/>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import Nav from "./components/Nav";
// import $ from 'jquery'
import jQuery from "jquery";
window.jQuery = window.$ = jQuery;
export default {
  name: "App",
  components: {
    Nav
  },
  mounted() {
    document.body.height = window.innerHeight;

    window.onresize = function() {
      document.body.height = window.innerHeight;
    };
    window.onresize();
  }
};
</script>

<style>
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
  background: #141414;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background: black; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 99.9vh;
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  position: absolute;

  opacity: 0;
}
</style>
