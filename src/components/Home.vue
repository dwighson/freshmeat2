<template>
  <div class="home">
    <div class="container">
      <div class="header">
        <div class="infobox">
          <h2>
            The right artist for the
            <span>perfect experience</span>
          </h2>
          <h1>FRESH MEAT</h1>
          <h1></h1>
          <a href="#artists">
            <button>book now</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
        <div class="watermark"></div>
      </div>
      <About />
      <Artists />
      <Social />
      <Contact />
    </div>
    <Footer />
  </div>
</template>
<script>
import $ from "jquery";
import Artists from "./Artists";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Social from "./Social";

import slick from "slick-carousel";
export default {
  components: {
    Artists,
    Contact,
    About,
    Social,
    Footer
  },
  mounted() {
    $(document).ready(function() {
      $(".header a").click(function() {
        $("html, body").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 120
          },
          500
        );
        return false;
      });
      setTimeout(function() {
        $(".watermark").css({
          opacity: 1
        });
      }, 1500);
    });
  }
};
</script>

<style scoped>
* {
  border: none;
}
.home {
  width: 100%;
  min-height: calc(100vh - 100px);
}
.home .card {
  min-height: 70%;
  overflow: hidden;
  width: 100vw !important;

  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
.container {
  height: 100%;
}
.card::before {
  content: "";
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(163, 52, 0, 0.055);
}
.card::after {
  content: "";
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.34);
}
.socialbar {
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}
.socialbar .social {
  height: 30px;
  width: 30px;
  background: white;
  display: inline-block;
  /* border-radius: 6px; */
  margin: 20px 10px 10px 10px;
}
.home .header .infobox {
  position: absolute;
  color: white;
  min-width: 300px;
  left: 80px;
  top: 120px;
  /* background: green; */
  z-index: 3;
  width: 400px;
  height: 400px;
  text-transform: uppercase;
}
.watermark {
  height: 300px;
  opacity: 0;
  width: 300px;
  /* background: black; */
  background: url("https://cdn.discordapp.com/attachments/628330179428614147/629029556350877716/Fresh-Meat.png")
    no-repeat center center;
  background-size: contain;
  z-index: 99;
  -webkit-filter: invert(100%);
  /* transform: rotateZ(-45deg); */
  position: absolute;
  right: 50px;
  transition: all 3s ease;
  bottom: 50px;
}
.infobox h2 {
  margin-bottom: 0px;
  text-align: left;
  font-weight: lighter;
  font-size: 50px;
  line-height: 54px;
}
.infobox h2 span {
  text-transform: lowercase;
  font-size: 60px;
  font-weight: 500;
}
.infobox h1 {
  font-size: 83px;
  margin: 0;

  text-align: left;
}
.infobox button:first-of-type {
  margin-left: 0px;
}
.infobox button:hover {
  background: white !important;
  color: black !important;
}
.infobox button {
  height: 55px;
  width: calc(50% - 31px);
  font-size: 20px;
  font-family: "Big Shoulders Text";
  /* margin: 0 auto;  */
  margin: 15px;
  margin-top: 22px;
  /* margin-left: 45px; */
  float: left;
  background: black;
  /* border-radius: 8px; */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bolder;
  transition: all 0.4s ease;
}
.header {
  position: relative;
  background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646724485545993/DSC05864.jpg")
    no-repeat top center;
  /* background: url('https://cdn.discordapp.com/attachments/628330179428614147/631646694102269953/WhatsApp_Image_2019-07-16_at_01.56.46.jpeg') no-repeat center center; */
  background-size: cover;
  width: 100vw !important;
  overflow: hidden;
  margin: 0px auto;
  margin-top: 50px;
  /max-width: 100vw;
  min-height: 50px;
  height: calc(100vh - 50px);
}
.home .card img {
  height: 100vh;
  width: 100%;
  /* object-position: 70% 120%; */
  object-fit: cover;
}
.slick-slide {
  outline: none;
  transition: all 0.5s ease;
  max-width: 100vw !important;
}
.slick-slide div {
  box-sizing: border-box;
}
.slick-current {
  opacity: 1;
}
@media screen and (max-width: 492px) {
  * {
    /* outline: 1px solid red; */
  }
  .header {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631907172531437578/alstu.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .infobox {
    max-width: calc(100% - 100px) !important;
    /* font-size: 30px; */
    /* background: purple; */
    top: 70px !important;
    text-align: center;
  }
  .infobox h2 {
    font-size: 31.5px;
    line-height: 42px;
    font-weight: bold;
    /* background: green; */
    text-align: center;
  }
  .infobox h1 {
    text-align: center;
    margin-top: -5px;
    margin-bottom: 25px;
  }
  .infobox h2 span {
    font-size: 48px;
  }
  .infobox h1 {
    font-size: 66.45px;
  }
  .infobox button:first-of-type {
    /* margin-right: 17px; */
  }
  .infobox button { 

  }
  .infobox button {
    float: none;
    vertical-align: top;
    width: calc(50% - 25px) !important;
    margin: 10px;
    /* mari */
    font-size: 16px;
  }
}
@media screen and (max-width: 992px) {
  .watermark {
    display: none;
  }
  .infobox {
    top: auto;
    bottom: 150px;
    /* background: gree; */
  }
  .infobox {
    /* background: green; */
    left: 50% !important;
    transform: translateX(-50%);
  }
}
</style>
