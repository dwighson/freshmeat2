<template>
  <div class="slider">
    <section>
      <h1>Chosen Artist</h1>
      <p>artist name</p>
    </section>
    <section>
      <h1>what Type of event is it?</h1>
    </section>
    <section>
      <h1>What's the date of the event?</h1>
    </section>
    <section>
      <h1>What's the time of perfomance?</h1>
    </section>
    <section>
      <h1>Name of venue/festival</h1>
    </section>
    <section>
      <h1>Where is the venue located?</h1>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Booknow'
}
</script>

<style scoped>
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
section {
  border-right: 0px solid white;
  padding: 1rem;
  min-width: 100vw;

  height: calc(100vh - 50vh);
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