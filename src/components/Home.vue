<template>
  <div class="home">
    <div class="container">
      <div class="cards">
        <div class="card">
          <div class="infobox">
            <h2>artiest naam1</h2>
            <button>learn more</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1540228510585-5f95da870c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          >
        </div>
        <div class="card">
          <div class="infobox">
            <h2>artiest naam2</h2>
            <button>learn more</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1540228510585-5f95da870c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          >
        </div>
        <div class="card">
          <div class="infobox">
            <h2>artiest naam</h2>
            <button>learn more</button>
          </div>
      <img
            src="https://images.unsplash.com/photo-1540228510585-5f95da870c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          >
        </div>
        <div class="card">
          <div class="infobox">
            <h2>artiest naam</h2>
            <button>learn more</button>
          </div>
    <img
            src="https://images.unsplash.com/photo-1540228510585-5f95da870c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          >
        </div>
      </div>
    </div>
    <div class="socialbar">
      <div class="social"></div>
      <div class="social"></div>
      <div class="social"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import slick from "slick-carousel";
export default {
  mounted() {
    $(document).ready(function() {
      $(".cards").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        infinite: true,
        // speed: 500,
        // cssEase: "linear",
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "0px",
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "0px",
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }
};
</script>

<style>
.home .card {
  transform: translateZ(-100px);
  height: 100% !important;
  width: 100% !important;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* border-radius: 15px; */
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
  border-radius: 6px;
  margin: 20px 10px 10px 10px;
}
.home .card .infobox {
  position: absolute;
  color: white;
  min-width: 300px;
  left: 50%;
  z-index: 3;
  text-transform: uppercase;
  transform: translateX(-50%) translateY(-50%);
  top: calc(50%);
}
.infobox h2 {
  margin-bottom: 5px;
}
.infobox button {
  height: 40px;
  min-width: 200px;
  background: black;
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bolder;
}
.cards {
  position: relative;
  width: calc(100% - 0px);
  /*   background: green; */
  /*   border-radius: 50px; */
  overflow: hidden;
  margin: 0px auto;
  max-width: 100vw;
  /* margin-top: 20px; */
  min-height: 50px;
}
.home .card img {
  height: 100vh;
  width: 100%;
  object-position: 70% 120%;
  /* filter: saturate(2); */
  object-fit: cover;
}
.slick-slide {
  /* margin: 10px; */
  outline: none;
  transition: all 0.5s ease;
  /* opacity: 0.9; */
  /*   min-width: 300px; */
  /* background: black; */
  max-width: 100vw !important;
}
.slick-slide div {
  /* max-width: 100vh !important; */
  box-sizing: border-box;
}
.slick-current {
  opacity: 1;
  /* transform: translateZ(0px); */
}
</style>
