<template>
  <div class="contact">
    <span class="wrap">
      <div class="filler">
        <div class="blurr"></div>
        <div class="shade"></div>
        <div class="spacing"></div>
        <h1>GET IN TOUCH</h1>
        <b>
          <p>Want to collaborate? Grab a cup of coffee? Have a good idea or just want to meet up?</p>
          <!-- <br> -->
          <p>Don’t hesitate to get in contact!</p>
        </b>
        <!-- <div class="fm"></div> -->
      </div>
      <div class="wrapper">
        <a name="contact" id="contact"></a>

        <h1>Contact</h1>

        <div class="contact-form">
          <form id="contact-form">
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" placeholder="Email address" name="reply_to" required />
            <textarea id="message" placeholder="Message" name="msg" required></textarea>
            <button class="sendbutton" v-on:click="sendform">send</button>
          </form>
        </div>
        <div class="maps">
          <ul>
            <li class="spacer"></li>
            <li>
              <h1>FRESH MEAT BOOKINGS</h1>
            </li>
            <!-- <li>
              <div class="icon"></div>06876543344
            </li> -->
            <li>
              <div class="icon"><img src="https://media.discordapp.net/attachments/628330179428614147/635101118619320360/envelope.png" alt=""></div>info@freshmeatbookings.com
            </li>
            <li>
              <a href="https://www.instagram.com/freshmeatbookings/">
              <div class="icon"><img src="https://media.discordapp.net/attachments/628330179428614147/638411114597711909/instagram.png" alt=""></div> Freshmeatbookings   
              </a>
           
            </li>
            <li>
              <!-- <div class="icon"><img src="https://media.discordapp.net/attachments/628330179428614147/635101386526162964/placeholder.png" alt=""></div>Schiedamse Vest 91A 3012BG Rotterdam -->
            </li>
          </ul>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    sendform() {
      var myform = $("form#contact-form");
      myform.submit(function(event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "freshmeat_contact_form";

        myform.find("button").text("Sending...");
        emailjs.sendForm(service_id, template_id, myform[0]).then(
          function() {
            alert("Sent!");
            myform.find("button").text("Send");

            $("form#contact-form textarea").each(function() {
              $(this).val("");
            });
            $("form#contact-form input").each(function() {
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
  }
};
</script>
<style scoped>
* {
  /* outline: 1px solid red; */
}
h1 {
  /* padding: 25px; */

  /* margin: 0 auto; */
  /* background: green; */
  padding-bottom: 50px;
  margin-bottom: 0;
  box-sizing: border-box;
  color: white;
  text-align: left;
  text-transform: uppercase;
  width: calc(100% - 50px);
  max-width: 1000px;
}
.filler .spacing {
  height: 130px;
}
.filler h1,
.filler p {
  width: calc(100% - 100px);
  max-width: 500px;
  text-align: center;
  position: relative;
  z-index: 2;
  /* word-spacing: 0px; */

  margin: 0 auto;
  /* background: purple; */
}
a {
  text-decoration: none;
  color: white;
}
.shade {
  background: rgba(0, 0, 0, 0.3);
  opacity: 1 !important;
}
.filler:hover .blurr,
.filler:hover .shade {
  opacity: 1;
}
li .icon {
  height: 25px;
  width: 25px;
  background: white;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 5px;
}
.icon img {
  height: 15px;
  margin-top: 5px;
  /* line-height: 25px; */
  /* margin: 0 auto; */
}
/* .filler:hover  */
.blurr {
  height: calc(100% + 20px);
  width: calc(100% + 20px);
  position: absolute;
  left: -10px;
  top: -10px;

  background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646694102269953/WhatsApp_Image_2019-07-16_at_01.56.46.jpeg")
    no-repeat center center;
  background-size: cover;
  opacity: 0;
  -webkit-filter: blur(8px);
  transition: all 0.5s ease;
}
.filler h1 {
  font-size: 70px;
  padding-bottom: 20px;
  /* text-align: center; */
}
.filler p {
  color: white;
  padding: 0;
  /* margin: 0; */
  /* background: green; */
  font-size: 25px;
}
.block {
  height: calc(100vh - 100px);
  width: 50%;
  /* flex: 1; */
  background: url("https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3367&q=80")
    no-repeat center center;
  background-size: cover;
}
.maps {
  height: 400px;
  text-align: left;
  /* padding: 0px 20px; */

  box-sizing: border-box;
  width: 400px;
  color: white;
  /* background: purple; */
}
.maps ul {
  /* background: green; */
  /* padding-right: 40px; */

  padding: 0;
  margin: 0;
  padding-top: 50px;
}
.maps li:nth-child(2) {
  /* background: purple; */
  height: 50px;
}
.maps li h1 {
  /* background: green; */
  height: 40px;
  padding: 0;
  margin: 0;
  font-size: 25px;
}

.fm {
  background: url("https://media.discordapp.net/attachments/628330179428614147/629029556350877716/Fresh-Meat.png?width=665&height=665")
    no-repeat center center;
  background-size: contain;
  height: 310px;
  -webkit-filter: invert(100%);
  float: right;
  margin-right: 40px;
  width: calc(310px);
  /* margin: 0 auto; */
}
.maps li {
  font-size: 20px;
  /* background: blue; */
  text-transform: capitalize;
  min-height: 40px;
  /* background: blue; */
  margin-bottom: 3px;
  list-style-type: none;
}
.maps li:first-of-type {
  min-height: 80px;
}
.maps li:nth-child(2) {
  min-height: 70px;
}
.maps p {
  margin: 0;
  /* background: blue; */
  font-size: 20px;
  /* min-width: 300px; */
  /* max-width: calc(100vw -); */
}
.filler {
  /* flex: 1; */
  background: url("https://cdn.discordapp.com/attachments/628330179428614147/631646694102269953/WhatsApp_Image_2019-07-16_at_01.56.46.jpeg")
    no-repeat center center;
  background-size: cover;
  width: 50vw;
  height: 850px;
  overflow: hidden;
  position: relative;
}
.wrap {
  display: flex;
  width: 100%;
  text-align: center;
}
.contact {
  /* display: flex; */
  /* background: blue; */
  min-height: 600px;
  text-align: center;
  /* padding-top: 140px; */
}
.wrapper {
  /* background: blue; */
  /* backgroun */
  /* height: 100vh; */
  padding: 20px;
  box-sizing: border-box;
  padding-top: 50px;

  /* padding-top: 150px; */
  min-width: 300px;
  flex: 1;
  /* background: blue; */
  max-width: 600px;
  /* background: blue; */
  /* padding-left: 20px; */
  vertical-align: top;
  display: inline-block;
  margin: 0 auto;
}

.maps {
  flex: 1;
  /* background: purple; */
  height: 400px;
  /* width: 100vw; */
  /* background: green; */
  /* display: inline-block; */
  vertical-align: top;
}
input:first-of-type {
  margin: 0;
}
input {
  padding: 15px;
  background: white;
  border: none;
  /* font-family: "big shoulders"; */
  font-family: "Big Shoulders Text";
  font-size: 20px;
  box-sizing: border-box;
  /* margin: 5px 20px 5px 0px; */
  margin: 0px 0px 0px 20px;
  /* border-radius: 5px; */
  float: left;
  width: calc(50% - 10px);
}

#message {
  background: white;
  border: none;
  font-family: "Big Shoulders Text";
  font-size: 20px;
  /* border-radius: 5px; */
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  min-height: 200px;
  width: calc(100% - 0px);
  /* max-width: 550px; */
}
button:hover {
  background: white;
  color: black;
}
button {
  height: 50px;
  min-width: 200px;
  background: white;
  color: black;
  border: none;
  font-size: 20px;

  float: right;
  font-family: "Big Shoulders Text";
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 20px;
  /* margin-right: 20px; */
}
.contact-form {
  /* background: green; */
  /* margin-top: 250px; */
}
@media screen and (max-width: 1280px) {
  .wrap {
    flex-direction: column;
  }
  .filler {
    max-height: 650px;
    width: 100%;
  }
}
@media screen and (max-width: 1000px) {
  .maps {
    width: calc(100% - 100px) !important;
    /* overflow: hidden; */
    max-width: 550px;
    margin: 0 auto;
    padding: 0;
  }
  .maps ul {
    padding-top: 0;
  }
  .contact-form button {
    margin-right: 25px;
  }
  .maps p {
    max-width: 100%;
    /* width: 100px !important; */
    text-align: center;
  }
  input {
    padding: 20px;
    box-sizing: border-box;
    margin: 0;
    margin-top: 20px;
    float: none;
    width: calc(100% - 50px);
    max-width: 550px;
  }
  h1 {
    max-width: 550px;

    margin: 0 auto;
    padding: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .contact-form {
    min-height: 450px;
    margin-bottom: 50px;
    /* background: green; */
  }
  #message {
    padding: 20px;
    box-sizing: border-box;
    margin: 0;
    margin-top: 20px;
    width: calc(100% - 50px);
    max-width: 550px;
  }
}
@media screen and (max-width: 500px) {
  .maps {
    width: calc(100% - 50px) !important;
    /* overflow: hidden; */
    max-width: 550px;
  }
}
</style>
