<template>
  <div class="slider">
    <a name="artist" id="artists"></a>
    <div class="swipenav">
      <h1>Artists</h1>

      <h2>< swipe left or right ></h2>
    </div>
    <div class="wrapper">
      <div class="slickcarousel">
        <h1>ARTISTS</h1>
        <div class="carousel">
          <div v-for="(dj, i) in djs" v-bind:key="i">
            <div
              class="artist"
              v-bind:style="{background: 'url(' + dj.thumbnail + ') no-repeat top center'}"
            >
              <div class="shade"></div>
              <div
                class="blur"
                v-bind:style="{background: 'url(' + dj.thumbnail + ') no-repeat top center'}"
              ></div>
              <div class="info">
                <h1>{{dj.name}}</h1>
                <p>{{dj.genre}}</p>
                <div class="social">
                  <button v-for="(account, x) in dj.social[0]" v-bind:key="x">
                    <span v-if="account === dj.social[0]['insta']">
                      <a :href="'https://instagram.com/' + account">
                        <img
                          src="https://media.discordapp.net/attachments/628330179428614147/633446829312442423/instagram.png"
                          alt="instagram"
                        />
                      </a>
                    </span>
                    <span v-if="account === dj.social[0]['soundcloud']">
                      <a :href="'https://soundcloud.com/' + account">
                        <img
                          src="https://media.discordapp.net/attachments/628330179428614147/633447276492357658/soundcloud.png"
                          alt="soundcloud"
                        />
                      </a>
                    </span>
                    <span v-if="account === dj.social[0]['facebook']">
                      <a :href="'https://facebook.com/' + account">
                        <img
                          src="https://media.discordapp.net/attachments/628330179428614147/633447038268211200/facebook-logo.png"
                          alt="facebook"
                        />
                      </a>
                    </span>
                    <!-- <p v-if="account[soundcloud]">s</p> -->
                  </button>
                </div>
                <p class="hoverinfo">{{dj.bio}}</p>
                <button class="booknw">book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section v-for="(dj, i) in djs" v-bind:key="i">
        <div
          class="thumbnail"
          v-bind:style="{background: 'url(' + dj.thumbnail + ')',float: (i % 2 == 0) ? 'left ' : 'right' }"
        >
          <h2>{{dj.name}}</h2>
          <h2>{{dj.genre}}</h2>
          <div class="social">
            <button v-for="(account, x) in dj.social[0]" v-bind:key="x">
              <span v-if="account === dj.social[0]['insta']">
                <a :href="'https://instagram.com/' + account">
                  <img
                    src="https://media.discordapp.net/attachments/628330179428614147/633446829312442423/instagram.png"
                    alt="instagram"
                  />
                </a>
              </span>
              <span v-if="account === dj.social[0]['soundcloud']">
                <a :href="'https://soundcloud.com/' + account">
                  <img
                    src="https://media.discordapp.net/attachments/628330179428614147/633447276492357658/soundcloud.png"
                    alt="soundcloud"
                  />
                </a>
              </span>
              <span v-if="account === dj.social[0]['facebook']">
                <a :href="'https://facebook.com/' + account">
                  <img
                    src="https://media.discordapp.net/attachments/628330179428614147/633447038268211200/facebook-logo.png"
                    alt="facebook"
                  />
                </a>
              </span>
              <!-- <p v-if="account[soundcloud]">s</p> -->
            </button>
          </div>
        </div>
        <div class="info">
          <h2>About {{dj.name}}</h2>
          <p>{{dj.bio}}</p>
          <button v-on:click="goto('/artist/' + dj.name)">book now</button>
        </div>
      </section>
    </div>

    <!-- <div class="wrap">
      <h3>TITLE</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem ipsa quo hic! Sequi veritatis in inventore, accusamus suscipit officia. Voluptatem optio itaque et autem consectetur distinctio odit corporis nihil!</p>
    </div>-->
  </div>
</template>
<script>
import slick from "slick-carousel";
export default {
  data() {
    return {
      djs: [
        {
          name: "lewis",
          thumbnail:
            "https://media.discordapp.net/attachments/628330179428614147/631646717766271006/DSC06045-Edit.jpg?width=855&height=1140",
          bio:
            "Lewis Ramos is 20 jaar en een veelzijdige MC die zich thuis voelt in de HipHop/R&b wereld, maar zeker niet bang is om uit zijn comfortzone te stappen. Op zijn 18e is hij dan ook begonnen met avonden hosten bij het collectief Chips in Rotterdam waar hij elke donderdag in de basement zijn kunsten vertoonde. De jongeman brengt veel energie over aan het publiek en zorgt voor een feestje. Lewis Ramos is in 2019 als een komeet ...",
          genre: "HipHop, R&B",
          social: [
            {
              insta: "lewiselisio",
              soundcloud: "lewis-ramos",
              facebook: "lewisramos3"
            }
          ]
        },
        {
          name: "dorisbae",
          thumbnail:
            "https://media.discordapp.net/attachments/628330179428614147/631646677580906497/DSC05936-Edit.jpg?width=855&height=1140",
          bio:
            "Als dochter van een een jazz pianist was er op jonge leeftijd geen gebrek aan muzikaliteit om haar heen. De piano werd een viool, de viool weer de piano waarna de piano werd ingewisseld voor een mengpaneel. Ze is pas een jaar bezig maar al bijna niet meer weg te denken. Ze zingt de tracks af en toe net zo hard mee als het publiek en swingend achter de dj booth is ze constant op zoek naar de perfecte balans tussen hiphop, rnb & guilty pleasures. Veel hitte!!...",
          genre: "HipHop, R&B, Guilty Pleasures",
          social: [
            {
              insta: "doris.bae",
              facebook: "Doris-Bae-1076193969253475"
            }
          ]
        },
        {
          name: "mike",
          thumbnail:
            "https://media.discordapp.net/attachments/628330179428614147/631646721436287026/DSC05772-Edit.jpg?width=855&height=1140",
          bio:
            "De geboren Papendrechter, is gemaakt voor de spotlight en verhuisde via Tilburg naar Rotterdam, om zich thuis te maken in meerdere partyscenes. Begonnen als resident van Superdisco maar hij ontwikkelde zich snel als multitalent. Ondertussen heeft hij zichzelf laten zien op verschillende podia. Bij Annabel, Now&Wow en eerdergenoemde Superdisco is hij meermaals te horen geweest. Zijn eerste stappen buiten de stad is hij bij Yardbird (in Tilburg) aan het maken...",
          genre: "​",
          social: [
            {
              insta: "mikewilleijns",
              soundcloud: "mike-willeijns",
              facebook: "mwilleijns"
            }
          ]
        },
        {
          name: "zeus",
          thumbnail:
            "https://media.discordapp.net/attachments/628330179428614147/631646718676697098/DSC06105.jpg?width=855&height=1140",
          bio:
            "Zeus is a young multi-talented DJ based in Rotterdam. Zeus is a resident of the party HUNNA and  gives the Trap genre a new look and goes back to their sources of inspiration. Also, with a great love for music he decided to share this love, later on by developing his own vision on how to represent different genres like house and hip hop and combining them.  Zeus also loves to spin a combination of forgotten hiphop tunes and similar.  Expect the latest hiphop-tunes combined with the some old school classics...",
          genre: "HipHop, R&B",
          social: [
            {
              insta: "zeusofficial.nl",
              soundcloud: "zeusnl",
              facebook: "djzeusnl"
            }
          ]
        },
        {
          name: "lenny",
          thumbnail:
            "https://media.discordapp.net/attachments/628330179428614147/631646710459924500/DSC05981.jpg?width=855&height=1140",
          bio:
            "Lenny begon met draaien op zijn tiende en heeft allerlei verschillende stijlen beoefend. Dat brengt hem vandaag de dag bij een unieke eigen sound met een mix van afro, baile-funk, future beats en urban als hoofdlijn, met soms uitstapjes naar housemuziek. Door zijn lange en brede ervaring weet hij als geen ander het publiek mee te nemen in zijn muzikale reis. Naast het DJ-en is hij ook producer en produceert hij voornamelijk exclusieve club-edit’s die zijn DJ-sets onderscheiden. Buiten Lenny’s muziekcarrière is hij ook oprichter/organisator van Panchi, waar HipHop, Baile Funk, Future Beats, R&B...",
          genre: "HipHop, R&B",
          social: [
            {
              insta: "lennydj_",
              soundcloud: "lennyofficial",
              facebook: "lennyofficialpage"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    let rtr = this.$router;

    $(document).ready(function() {
      $(".booknw").click(e => {
        let txt = $(e.target)
          .parent()
          .find("h1")
          .text();

        rtr.push("/artist/" + txt);
      });
      $(".artist").css({
        width: window.innerWidth / 3 - 100 + "px"
        // 'height': $('.artist')[0].offsetWidth + 'px'
      });
      $(".carousel").slick({
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        variableWidth: true
      });

      $("section .thumbnail").css({
        height: $("section .thumbnail")[0].offsetWidth + "px"
      });
      $(".info").css({
        height: $(".thumbnail")[0].offsetWidth + "px"
      });
      $(window).on("resize", function() {
        // $(".artists .thumbnail").css({
        //   height: $(".artists .thumbnail")[0].offsetWidth + "px"
        // });
        $("section .thumbnail").css({
          height: $("section .thumbnail")[0].offsetWidth + "px"
        });
        $(".info").css({
          height: $(".thumbnail")[0].offsetWidth + "px"
        });
      });
    });
  },

  methods: {
    goto(path) {
      this.$router.push(path);
    },
    social(url) {
      $(location).attr("href", url);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* outline: 1px solid red; */
}

.artists {
  /* display: none; */
  min-height: 500px;
  /* width: calc(100% - 100px); */
  max-width: 1000px;
  /* background: purple; */
  margin: 0 auto;
}
.thumbnail {
  display: inline-block;
  position: relative;
  width: 100%;
  background: url("https://media.discordapp.net/attachments/628330179428614147/631646718676697098/DSC06105.jpg?width=946&height=1262")
    no-repeat top center;
  background-size: cover !important;
  vertical-align: top;
  box-sizing: border-box;
  padding: 30px;
  padding-bottom: 0px;
  /* padding-top: 50px; */
  color: white;
  text-transform: uppercase;
}
.thumbnail h2:first-of-type {
  font-size: 40px;
}
.thumbnail h2 {
  text-align: left;
  font-size: 20px;
}

.thumbnail .social {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translatex(-50%);
}
.artists .thumbnail {
  max-width: 500px;
  float: left;
}
/* .artists .thumbnail:nth-child(odd){
  float: right
} */
.artists .info {
  max-width: 500px;
  float: left;
  /* background: blue; */
}
.swipenav {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  color: white;
  /* background: green; */
  height: 40px;
  left: 0;
  text-align: center;
}
.wrapper .wrap {
  width: calc(100vw - 50px);
  max-width: 1000px;
  min-height: 400px;
  /* background: green; */
}
.social button:hover {
  backgrounbd: white !important;
}

.social button {
  height: 30px !important;
  width: 30px !important;
  margin: 10px;
  padding: 0;
  border: none;
  background: white;
  line-height: 30px;
  border-radius: 50%;
}
/* .social button */
.social button img {
  height: 15px;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  /* margin-top: -10px; */
}
.social button span {
  position: relative;
  display: block;
  height: 30px;
}
.info {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0px;
  min-height: 700px;
  vertical-align: top;
  color: white;
  /* background: green; */
}
section .info {
  max-height: calc(40vh - 40px);
  min-height: 350px;
  text-align: left;
}
section info {
  text-align: center;
}
.info p,
.info h2 {
  text-align: left;
  margin: 0 auto;
  /* background: blue;; */
  max-width: calc(100% - 50px);
  color: white;
}
.info p {
  font-size: 20px;
  /* background: purple; */
  line-height: 28px;

  margin-bottom: 20px;
  font-family: helvetica;
}
section .info p {
  max-height: 120px;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  /* white-space: nowrap; */
  /* background: green; */
}
section .info button {
  margin: 20px;
}
.info button {
  height: 50px;
  background: white;
  color: black;
  font-size: 30px;

  margin-top: 20px;
  width: calc(100% - 50px);
  font-weight: bold;
  /* float: left; */
  text-transform: uppercase;
  font-family: "Big Shoulders Text";
}
button:hover {
  background: black;
  color: white;
}
.info h2 {
  padding-bottom: 10px;
  font-size: 30px;
  padding-top: 30px;
  text-transform: uppercase;
}

.slider,
.wrapper {
  font-family: "Big Shoulders Text", Helvetica;
  /* font-family: sans-serif; */
  width: 100%;

  display: flex;
  /* background: purple; */
  position: relative;
  min-height: 300px;
  overflow: none;
}
.slider {
  overflow: hidden;
}
section {
  /* border-right: 1px solid white; */
  /* padding: 1rem; */
  display: none;
  box-sizing: border-box;
  min-width: 100vw;

  /* height: 80vh; */
  max-width: 1200px;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
}
.artists h1 {
  color: white;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;

  text-align: left;
  /* background: purple; */
  text-transform: uppercase;
}
.slider h1 {
  text-transform: uppercase;
}
section h1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: white;
  width: 100%;
  left: 0;

  font-size: calc(1rem + 3vw);
}
section h2 {
  color: white;
}
@media screen and (max-width: 1050px) {
  .artists .thumbnail {
    float: none !important;
  }
  .artists .info {
    float: none !important;
  }
  .artists h1 {
    width: calc(500px);
    /* background: green; */
  }
  .artists .info p,
  .artists .info h2 {
    text-align: left !important;
  }
}
.slickcarousel {
  width: 100%;
  min-height: 100vh;
  /* background: #141414; */
  padding-top: 20px;
  text-align: center;
}
.artist p {
  max-width: 100%;
  text-align: justify;
  font-size: 20px;
}
.hoverinfo {
  opacity: 0;
  text-align: justify;
  transition: opacity 0.2s ease;
}
.wrapper h1 {
  color: white;
}
.shade {
  left: 0;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s ease;
}
.slick-prev:before,
.slick-next:before {
  font-size: 50px;
}
.slick-prev {
  left: -55px;
  height: 50px;
  width: 50px;
  /* background: green; */
}
.blur {
  height: calc(100% + 10px);
  width: calc(100% + 10px);
  background: url("https://media.discordapp.net/attachments/628330179428614147/631646717766271006/DSC06045-Edit.jpg?width=499&height=666")
    no-repeat top center;
  background-size: cover !important;
  position: absolute;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  top: -5px;
  left: -5px;
  scale: 1.5;
  opacity: 0;
  transition: opacity 0.5s ease;
  /* -webkit-backface-visibility: unset; */
}
.info {
  position: relative;
  z-index: 3;
}
.artist {
  overflow: hidden;
  position: relative;
  min-height: 700px;
  min-width: 400px;
  padding: 30px;
  box-sizing: border-box;
  text-align: left;
  background: url("https://media.discordapp.net/attachments/628330179428614147/631646717766271006/DSC06045-Edit.jpg?width=499&height=666")
    no-repeat top center;
  background-size: cover !important;
  color: white;
  margin: 10px;
}
.artist:hover .hoverinfo,
.artist:hover .blur,
.artist:hover .shade {
  opacity: 1;
}
h2 {
  color: #fff;
}
.slickcarousel .info button.booknw {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 100%;
  border: none;
  background: white;
  color: black;
  border: none;
  font-size: 20px;
}
.slickcarousel .social {
  /* background: green; */
}
.slickcarousel .social button {
  margin: 3px;
  margin-bottom: 20px;
}
.carousel {
  width: 90%;
  margin: 0px auto;
}
.slick-slide {
  margin: 10px;
}
.slick-slide .artist {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .swipenav {
    display: block;
    top: 15px;
  }
  .wrapper,
  .slider {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  section {
    display: block;
    padding-top: 100px;
  }
  .slickcarousel {
    display: none;
  }
}
</style>