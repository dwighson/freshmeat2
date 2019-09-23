<template>
  <nav>
    <div class="bar">
      <div class="logo">FRESH
        <hr>
        <span>MEAT</span>
      </div>
    </div>
    <ul>
      <li v-on:click="toggleMenu(); goto('/')">Home</li>
      <li v-on:click="toggleMenu(); goto('/artists')">Artists</li>
      <li v-on:click="toggleMenu(); goto('/contact')">Contact</li>
    </ul>
    <button class="closebutton" v-on:click="toggleMenu()">&#9776;</button>
  </nav>
</template>
<script>
// import $ from "jquery";
export default {
  data() {
    return {
      menubool: true
    };
  },
  methods: {
    toggleMenu() {
      if (this.menubool === true) {
        this.menuOpen();
      } else {
        this.menuClose();
      }
      this.menubool = !this.menubool;
    },
    goto(path) {
      this.$router.push(path);
    },
    menuClose() {
      let delay = 0;

      $("nav li").each(function() {
        setTimeout(() => {
          $(this).css({
            opacity: 0,
            transform: "translateX(-20px)"
          });
        }, delay);
        delay = delay + 100;
      });
      setTimeout(() => {
        $("nav").css({
          "min-height": "60px"
        });
      }, 500);
    },
    menuOpen() {
      let delay = 0;

      $("nav li").each(function() {
        setTimeout(() => {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)"
          });
        }, delay);
        delay = delay + 100;
      });
      setTimeout(() => {
        $("nav").css({
          "min-height": "205px"
        });
      }, 0);
    }
  }
};
</script>

<style scoped>
* {
  outline: none;
}
nav {
  height: 80px;
  width: 100%;
  overflow: hidden;
  position: fixed;
  z-index: 9999;
  border-bottom: 3px solid white;
  top: 0;
  text-transform: uppercase;
  left: 0;
  font-weight: bolder;
  transition: all 0.5s ease;
}
.logo {
  /* background: blue; */
  max-width: 70px;
  text-align: center;

  line-height: 15px;
}
.bar {
  height: 50px;
  line-height: 50px;
  text-align: left;
  color: white;
  padding-left: 20px;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.9);

  /* background: rgba(0, 0, 0, 0.5); */
}
.closebutton {
  height: 50px;
  width: 50px;
  background: none;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  font-size: 20px;
  line-height: 70px;
}
.logo {
  text-align: center;
  /* background: green; */
  padding-left: 0px;
}
.logo hr {
  padding: 0;
  /* margin: 0px; */
  margin: 0 auto;
  margin-bottom: 3px;
  border: none;
  height: 2px;
  background: white;
  width: calc(100% - 18px);
}
.logo span {
  font-size: 20px;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}
ul {
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  background: rgba(0, 0, 0, 0.8);
}

.visible {
  transform: translateY(0px);
  opacity: 1;
}
li:first-of-type {
  /* text-decoration: underline; */
}
li {
  /* background: blue; */
  height: 50px;
  transform: translateX(-20px);
  transition: all 0.5s ease;
  opacity: 0;
  color: white;
  line-height: 40px;
  list-style-type: none;
}
</style>
