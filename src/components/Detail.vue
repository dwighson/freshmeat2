<template>
  <div class="detail">
    <div
      :class="{
        'header': true, 
        'lewis': $route.params.id == 'lewis', 
        'mike': $route.params.id == 'mike', 
        'zeus': $route.params.id == 'zeus', 
        'dorisbae': $route.params.id == 'dorisbae', 
        'lenny': $route.params.id == 'lenny', 
        }"
      v-bind:style="{background: 'url('+ djs.find((artist) =>  artist.name == currentroute).thumbnail +') no-repeat top center'}"
    >
      <div class="headerinfo">
        <h3>{{djs.find((artist) => artist.name == currentroute).name}}</h3>

        <p>{{djs.find((artist) => artist.name == currentroute).genre}}</p>
      </div>
      <div class="artistinfo">
        <span class="infowrap">
          <h2>About {{djs.find((artist) => artist.name == currentroute).name}}</h2>
          <br />
          <p>{{djs.find((artist) => artist.name == currentroute).bio}}</p>
        </span>
      </div>
    </div>
    <div class="aboutartist">
      <span class="infowrap">
        <h2>About {{djs.find((artist) => artist.name == currentroute).name}}</h2>
        <br />
        <p>{{djs.find((artist) => artist.name == currentroute).bio}}</p>
      </span>
    </div>
    <form id="bookingform">
      <h1>Booking Form</h1>
      <div class="form">
        <div class="block">
          <input type="hidden" v-model="$route.params.id" name="artist" required />
          <p>1: What type of event is it?</p>
          <br />
          <label class="radiobutton">
            club
            <input type="radio" checked="checked" name="eventtype" required />
            <span class="checkmark"></span>
          </label>
          <label class="radiobutton">
            festival
            <input type="radio" name="eventtype" required />
            <span class="checkmark"></span>
          </label>
          <label class="radiobutton">
            other
            <input type="radio" name="eventtype" required />
            <span class="checkmark"></span>
          </label>
          <br />
          <span v-for="(q, i) in QnA" v-if="i <= 5" v-bind:key="i">
            <p>{{i+2}}: {{q.q}}</p>
            <input type="text" v-model="q.a" :placeholder="q.a" :name="q.name" required />
          </span>
        </div>
        <div class="block">
          <span v-for="(q, i) in QnA" v-if="i >= 6" v-bind:key="i">
            <p>{{i+2}}: {{q.q}}</p>
            <input type="text" v-model="q.a" :name="q.name" required />
          </span>
          <p>additional info</p>
          <textarea name="additional"></textarea>
          <button class="sendbutton" v-on:click="sendform">send</button>
        </div>
      </div>
    </form>
    <Footer />
  </div>
</template>
<script>
import Footer from "./Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      QnA: [
        {
          q: "What is the Date of  the event?",
          a: "",
          name: "eventdate"
        },
        {
          q: "At what time of the day do you want the artist to peform?",
          a: "",
          name: "eventtime"
        },
        {
          q: "What is the name of the venue/festival?",
          a: "",
          name: "eventname"
        },
        {
          q: "In which city is the event located?",
          a: "",
          name: "eventcity"
        },
        {
          q: "Event website:",
          a: "",
          name: "url"
        },
        {
          q: "What is the ticket price (if applicable)",
          a: "",
          name: "eventprice"
        },
        {
          q: "Fill in the company name.",
          a: "",
          name: "eventcompany"
        },
        {
          q: "Who can we contact for more information if needed?",
          a: "",
          name: "contactname"
        },
        {
          q: "leave your email address down below.",
          a: "",
          name: "reply_to"
        },
        {
          q: "And your phone number ofcourse.",
          a: "",
          name: "eventphone"
        },

        {
          q: "KVK number (Chamber of commerce number)",
          a: "",
          name: "kvk"
        }
      ],
      currentroute: this.$route.params.id
    };
  },
  methods: {
    findartist(artist) {
      return artist.name === artist;
    },
    sendform() {
      var myform = $("form#bookingform");

      myform.submit(function(event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "template_ypR1fahP";

        myform.find("button").text("Sending...");
        emailjs.sendForm(service_id, template_id, myform[0]).then(
          function() {
            alert("Sent!");
            myform.find("button").text("Send");

            $("form#bookingform textarea").each(function() {
              $(this).val("");
            });
            $("form#bookingform input").each(function() {
              $(this).val("");
            });
          },
          function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Send");
          }
        );
        return false;
      });
    }
  },
  computed: {
    djs() {
      return this.$store.state.djs;
    }
  }
};
</script>

<style scoped>
* {
  /* outline: 1px solid red; */
}
.detail {
  min-height: 500px;
  width: 100%;

  /* background: purple; */
}
.form {
  min-height: 100vh;
  width: 100%;
  color: white;
  text-align: center;
  background: black;
}
form h1 {
  color: white;
  text-align: left;
  text-transform: uppercase;
  padding-left: 25px;
  padding-top: 50px;

}
.artistinfo {
  height: 100vh;
  width: calc(40%);
  /* float: right; */
  right: 0;
  overflow: hidden;
  top: 0;
  box-sizing: border-box;
  padding: 5%;
  padding-top: 150px;
  text-align: left;
  color: white;
  position: absolute;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.8);

  min-width: 300px;
}
.infowrap {
  display: block;
  position: relative;
}
.infowrap p {
  font-size: 20px;
  font-family: helvetica;
}
.aboutartist {
  display: none;
}
.blurredbg {
  position: absolute;
  top: -25px;
  /* left: 0; */
  height: calc(100% + 50px);
  overflow: hidden;
  width: calc(100% + 50px);
  left: -25px;
  /* background: url("https://cdn.discordapp.com/attachments/628330179428614147/628331149755940873/IMG-3999.PNG") */
  /* no-repeat center fixed; */
  filter: grayscale(50%);
  -webkit-filter: grayscale(50%);
  background-size: cover;
}
.blurredbg::before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.form .block {
  min-height: 400px;
  width: calc(50% - 20px);
  vertical-align: top;
  margin: 20px;
  font-size: 20px;
  /* background: blue; */
  text-align: left;
  padding: 20px;
  max-width: 500px;
  /* min-width: 300px; */
  color: white;
  box-sizing: border-box;
  display: inline-block;
}
.block textarea {
  width: calc(100% - 0px);
  border: none;
  background: #f0f0f0;
  font-size: 20px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 200px;
  /* height: 50px; */
  margin: 10px 0px;
}
.block input {
  width: calc(100%);
  border: none;
  /* border-radius: 5px; */
  background: #f0f0f0;
  font-size: 20px;
  padding: 20px;
  box-sizing: border-box;
  height: 50px;
  margin: 10px 0px 20px 0px;
  /* min-width: 300px; */
}
.header {
  height: 100vh;
  width: 100%;
  position: relative;
  /* background: url("https://cdn.discordapp.com/attachments/628330179428614147/628331149755940873/IMG-3999.PNG") */
  /* no-repeat center center fixed; */
  /* background: purple; */
  /* -webkit-filter: grayscale(80%); */
  background-size: cover !important;
}
.headerinfo {
  height: 200px;
  width: 100%;
  color: white;
  /* background: black; */
  position: absolute;
  text-align: left;
  text-transform: uppercase;
  padding: 30px;
  right: 0;
  top: 110px;
}
.headerinfo h3 {
  font-size: calc(40px + 1.5vw);
  margin: 0;
  padding: 0;
}
/* .header::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
} */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  overflow-y: hidden;
}
.slider {
  font-family: sans-serif;
  scroll-snap-type: x mandatory;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
}
button {
  height: 40px;
  background: white;
  color: black;
  /* float: left; */
  /* border-radius: 5px; */
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  /* margin: 10px; */
  min-width: 100px;
}
input[type="radio"] {
  background: green;
}
section {
  border-right: 0px solid white;
  padding: 1rem;
  min-width: 100vw;
  /* background: purple; */
  height: 40vh;
  text-align: center;
  scroll-snap-align: start;
  position: relative;
}
h2 {
  /* position: absolute; */
  /* background: purple; */
  margin: 0 auto;
  text-transform: uppercase;
  padding-top: 10px;
  text-align: left;
  color: white;
  /* width: 240px; */
  /* width: 100%; */
  max-width: 900px;
  /* left: 0; */
  /* background: green; */
  font-size: calc(1rem + 1vw);
}
.radiobutton {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.radiobutton input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.radiobutton:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.radiobutton input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.radiobutton input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.radiobutton .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (max-width: 900px) {
  .lewis {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646712846483476/DSC06040.jpg")
      no-repeat top center !important;
    background-size: cover !important;
  }
  .mike {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646721436287026/DSC05772-Edit.jpg")
      no-repeat top center !important;
    background-size: cover !important;
  }
  .zeus {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646718676697098/DSC06105.jpg")
      no-repeat top center !important;
    background-size: cover !important;
  }
  .dorisbae {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646726876430337/freshmeat004-Edit.jpg")
      no-repeat top center !important;
    background-size: cover !important;
  }
  .lenny {
    background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646701576388609/DSC05970.jpg")
      no-repeat top center !important;
    background-size: cover !important;
  }

  .aboutartist {
    display: block;
    padding: 25px;
    text-align: left;
    min-height: 300px;
    color: white;
    /* background: purple; */
  }
  .block {
    min-width: calc(100% - 50px);
    /* background: blue; */
    padding: 0 !important;
  }
  .headerinfo {
    top: 70px;
  }
  .header {
    background-position: left top;
    max-height: calc(100vh - 90px);
  }
  h2 {
    /* background: green; */
    width: calc(100%);
    padding: 0;
    font-size: 40px;
  }
  .artistinfo {
    /* background: purple; */
    width: 100%;
    /* max-height: 450px !important; */
    overflow-y: auto;
    height: auto;
    bottom: 0;
    top: auto;
    padding: 0;
    padding: 20px;
    display: none;

  }


}
</style>
