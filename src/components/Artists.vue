<template>
  <div class="slider">
    <section>
      <div
        class="artist"
        v-for="(index, i) in djpics"
        v-bind:key="i"
        v-bind:style="{background: 'url('+ index +') no-repeat center center',  'background-size': 'cover'}"
      >
        <div
          class="artistpic"
          v-bind:style="{background: 'url('+ index +') no-repeat center center',  'background-size': 'cover'}"
        ></div>
        <div class="artistinfo">
          <p>Nevie X</p>
          <p class="genre">Hip Hop, R&B, FUNK</p>
          <button v-on:click="goto('/detail/' + i)">Book now</button>
        </div>
      </div>
    </section>
    <div class="wrap">
      <h3>TITLE</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem ipsa quo hic! Sequi veritatis in inventore, accusamus suscipit officia. Voluptatem optio itaque et autem consectetur distinctio odit corporis nihil!</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      djpics: [
        "https://newlevelagency.com/wp-content/uploads/2018/07/ballentine-new-496x273.jpg",
        "https://newlevelagency.com/wp-content/uploads/2018/07/crayflax-new-496x273.jpg",
        "https://newlevelagency.com/wp-content/uploads/2018/07/devarsity-496x273.jpg",
        "https://newlevelagency.com/wp-content/uploads/2018/07/dieux-pere-new-496x273.jpg",
        "https://newlevelagency.com/wp-content/uploads/2018/09/panka-496x273.jpg",
        "https://newlevelagency.com/wp-content/uploads/2018/09/smp-496x273.jpg"
      ]
    };
  },
  mounted() {
    $(".artist").css({
      height: $(".artist")[0].offsetWidth
    });
    $(window).on("resize", function() {
      $(".artist").css({
        height: $(".artist")[0].offsetWidth
      });
    });
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.artistinfo {
  color: white;
  position: absolute;
  /* background: blue; */
  width: 100%;
  top: 50%;
  opacity: 0;
  transform: translateY(-50%);
  z-index: 2;

  left: 0;
  transition: all 0.5s ease;

  font-size: 4vw;
}

.artistinfo button {
  height: 25px;
  width: 70%;
  margin-top: 10px;
  background: black;
  color: white;
  border: none;
}
.genre {
  font-size: 2.5vw;
}
body {
  overflow-y: hidden;
}
.artist {
  width: 33vw;
  max-width: 400px;
  overflow: hidden;
  height: 300px;
  background: url("https://images.unsplash.com/photo-1553907565-17a93ff8d368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")
    no-repeat center center;
  background-size: cover;
  vertical-align: top;
  /* border: 3px solid black; */
  /* margin: 1px; */
  position: relative;
  display: inline-block;
}
.artist::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  top: 0;
  transition: all 0.5s ease;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.artist:hover:before {
  opacity: 1;
}
.artist:hover .artistpic,
.artist:hover .artistinfo {
  opacity: 1;
}

.artistpic {
  height: calc(100% + 0px);
  width: calc(100% + 0px);
  background: url("https://images.unsplash.com/photo-1553907565-17a93ff8d368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")
    no-repeat center center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-size: cover;
  filter: blur(3px);
  transition: filter 0.5s ease;
  -webkit-filter: blur(3px);
  opacity: 0;
}
.wrap {
  height: 250px;
  position: absolute;
  padding-top: 30px;
  left: 0;
  width: 100%;
  bottom: 0;
  /* background: blue; */
}
.wrap h3 {
  /* position: absolute; */
  bottom: calc(100px);
  /* background: blue; */
  color: white;

  width: 100%;
}
.wrap p {
  /* position: absolute; */
  bottom: calc(250px);
  font-size: 13.2px;
  /* background: green; */
  text-align: center;
  color: white;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 20px;
}
.artist:before:hover .artistpic {
  opacity: 1;
}
.slider {
  font-family: sans-serif;
  scroll-snap-type: x mandatory;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
}
section {
  /* border-right: 1px solid white; */
  /* padding: 1rem; */
  padding-top: 100px;
  box-sizing: borderbox;
  min-width: 100vw;
  /* height: 80vh; */
  max-width: 1200px;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
}
h1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: white;
  width: 100%;
  left: 0;
  font-size: calc(1rem + 3vw);
}
</style>