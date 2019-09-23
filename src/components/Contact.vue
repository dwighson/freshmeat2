<template>
  <div class="contact">
    <h3>Contact</h3>
    <div class="maps"></div>
    <div class="wrapper">
      <h2>Contact</h2>
      <div class="contact-form">
        <input type="text" placeholder="Naam">
        <input type="text" placeholder="Email adres">
        <textarea id="message" placeholder="Bericht"></textarea>
        <button>Verstuur</button>
      </div>
    </div>
    <div class="maps"></div>
  </div>
</template>



<style scoped>
.contact {
  /* background: blue; */
  text-align: center;
}
.wrapper {
  /* background: blue; */
  height: 100vh;
  max-width: 600px;
  vertical-align: top;
  display: inline-block;
  margin: 0 auto;
}
h2 {
  /* background: blue; */
  color: white;
  font-size: 4vw;
  margin-top: 50px;
  text-align: left;
  padding-left: 20px;
}
/* .maps {
  height: 400px;
  width: 100vw;
  background: green;
  display: inline-block;
  vertical-align: top;
} */
input {
  padding: 15px;
  background: rgb(189, 189, 189);
  border: none;
  margin: 5px;
  border-radius: 5px;
  width: 240px;
}

#message {
  background: rgb(189, 189, 189);
  border: none;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  min-height: 200px;
  width: calc(100% - 50px);
  max-width: 550px;
}
button {
  height: 40px;
  min-width: 100px;
  background: black;
  color: white;
  border: none;
  float: right;
  margin-top: 20px;
  margin-right: 30px;
}
.contact-form {
  /* background: green; */
  /* margin-top: 250px; */
}
</style>
