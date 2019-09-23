<template>
  <div class="detail">
    <div class="header">
      <div class="headerinfo">
        <h3>Ballantine</h3>
        <p>hip hop, R&B, FUNK</p>
      </div>
    </div>
    <div class="slider">
      <section v-for="i in QnA" v-bind:key="i">
        <h2>{{i['q']}}</h2>
        <input type="text">
        <br>
        <button>previous</button>
        <button>next</button>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      QnA: [
        {
          q: "What type of event is it?",
          a: ["club night", "festival", "other"]
        },
        {
          q: "What is the Date of  the event?",
          a: ""
        },
        {
          q: "At what time of the day do you want the artist to peform?",
          a: ""
        },
        {
          q: "What is the name of the venue/festival?",
          a: ""
        },
        {
          q: "In which city is the event located?",
          a: ""
        },
        {
          q: "Event website:",
          a: ""
        },
        {
          q: "What is the ticket price (if applicable)",
          a: ""
        },
        {
          q: "In which city is the event located?",
          a: ""
        },
        {
          q: "Fill in the company name.",
          a: ""
        },
        {
          q: "Who can we contact for more information if needed?",
          a: ""
        },
        {
          q: "leave your email address down below.",
          a: ""
        },
        {
          q: "And your phone number ofcourse.",
          a: ""
        },

        {
          q: "KVK number (Chamber of commerce number)",
          a: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.detail {
  min-height: 500px;
  width: 100%;

  /* background: purple; */
}
.header {
  height: 45vh;
  width: 100%;
  position: relative;
  background: url("https://newlevelagency.com/wp-content/uploads/2018/07/ballentine-new-496x273.jpg")
    no-repeat center center;
  /* background: purple; */
  background-size: cover;
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
  top: 80px;
}
.headerinfo h3 {
  font-size: 4vh;
  margin: 0;
  padding: 0;
}
.header::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

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
  background: black;
  color: white;
  /* float: left; */
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  margin: 10px;
  min-width: 100px;
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
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 10px;
  text-align: left;
  color: white;
  width: 240px;
  /* width: 100%; */
  max-width: 900px;
  /* left: 0; */
  /* background: green; */
  font-size: calc(1rem + 1vw);
}
input {
  margin: 10px;
  height: 40px;
  left: 0;
  padding: 20px;
  /* float: left; */
  width: 220px;
  font-size: 20px;
  background: rgb(189, 189, 189);
  border: none;
  border-radius: 3px;
  color: white;

  max-width: calc(100% - 20px);
}
</style>
