<template>
  <nav>
    <div class="bar">
      <div class="logo" href="#home" v-on:click="goto('/')"></div>
      <button class="closebutton" v-on:click="toggleMenu()">&#9776;</button>

      <ul class="desktopnav">
        <li href="#home" v-on:click="goto('/')">Home</li>
        <li href="#about" v-on:click="goto('/')">About</li>

        <li href="#artists" v-on:click="goto('/')">Artists</li>
        <li href="#contact"  v-on:click="goto('/')">Contact</li>
      </ul>
    </div>
    <ul class="mobilenav">
      <li href="#home" v-on:click="toggleMenu(); goto('/')">Home</li>
      <li href="#about" v-on:click="toggleMenu(); goto('/')">About</li>
      <li href="#artists" v-on:click="toggleMenu(); goto('/')">Artists</li>
      <li href="#contact" v-on:click="toggleMenu(); goto('/')">Contact</li>
    </ul>
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

      $("nav .mobilenav li").each(function() {
        setTimeout(() => {
          $(this).css({
            opacity: 0,
            transform: "translateX(-20px)"
          });
        }, delay);
        delay = delay + 70;
      });
      setTimeout(() => {
        $("nav").css({
          "min-height": "70px"
        });
      }, 500);
    },
    menuOpen() {
      let delay = 0;

      $("nav .mobilenav li").each(function() {
        setTimeout(() => {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)"
          });
        }, delay);
        delay = delay + 70;
      });
      setTimeout(() => {
        $("nav").css({
          "min-height": "370px"
        });
      }, 0);
    }
  },
  mounted() {
     $('nav li').click(function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 120
          }, 500);
          return false;
      })
  }
};
</script>

<style scoped>
:root {
  --nav-height: 120px;
}
* {
  outline: none;
}
nav {
  height: 120px;
  width: 100%;

  overflow: hidden;
  position: fixed;
  z-index: 9999;
  top: 0;
  text-transform: uppercase;
  left: 0;
  font-weight: bolder;
  transition: all 0.3s ease;
}
li {
  font-size: 20px;
  text-align: center;
  height: 50px;
}
li:hover {
  color: black !important;
  background:white;
}
.logo {
  background: url("https://cdn.discordapp.com/attachments/628330179428614147/629029556350877716/Fresh-Meat.png")
    no-repeat center center;
  background-size: contain;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  position: absolute;
  height: 80%;
  max-height: 70px;
  min-width: 100px;
  text-align: center;
  filter: invert(100%);
  line-height: 15px;
  float: left;
}
.bar {
  height: 120px;
  line-height: 120px;
  text-align: left;
  color: white;
  background: black;
  /* padding-left: 20px; */
  box-sizing: border-box;
  border-bottom: 3px solid white;

  /* padding-top: 20px; */
  /* background: green; */
  /* background: rgba(0, 0, 0, 0.5); */
}
.closebutton {
  height: 50px;

  background: green;
  width: 50px;
  background: none;
  /* background: purple; */
  color: white;
  display: none;
  top: 0;
  position: absolute;
  /* float: right; */
  right: 10px;
  transform: translateY(-50%);
  border: none;
  font-size: 60px;
  line-height: 50px;
}

.logo hr {
  padding: 0;
  /* margin: 0px; */
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 5px;
  border: none;
  height: 4px;
  background: white;
  width: calc(100% - 10px);
}
.logo span {
  font-size: 37px;
  /* line-height: 40px; */
  /* transform: scaleY(0.5); */
  transform-origin: 0 0;
}
.mobilenav {
  display: none;
  margin: 0;
  padding: 0;
  width: 50%;
  float: right;
  transition: all 0.5s ease;
  background: rgba(0, 0, 0, 0.7);
}


.visible {
  transform: translateY(0px);
  opacity: 1;
}
li:first-of-type {
  /* text-decoration: underline; */
}
.mobilenav li {
  /* background: blue; */
  height: 70px;
  transform: translateX(-20px);
  transition: all 0.5s ease;
  opacity: 0;
  color: white;
  text-align: center;
  /* padding-right: 40px; */
  box-sizing: border-box;
  line-height: 70px;
  list-style-type: none;
}
.desktopnav {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 500px;
  /* background: green; */

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* top: 10px; */
  display: flex;
}

.desktopnav li {
  display: block;
  height: 100%;
  float: left;
  /* background: blue; */
  line-height: 120px;
  flex: 1;
  text-align: center;
}
@media screen and (max-width: 992px) {
  .closebutton {
    display: block;
    font-size: 30px;
    top: 10px;
    transform: none;
  }
  .desktopnav {
    display: none;
  }
  .logo {
    top: 10px;
    transform: none;
  }
  nav {
    /* background: purple; */
    height: 70px;
  }
  .bar {
    height: 90px;
    /* min-height: 115px; */
    /* background: green; */
  }
  .mobilenav {
    opacity: 1;
    display: block;
  }
}
</style>
