<template>
  <footer>
    <!-- <ul>
      <li>Info</li>
      <li>Fresh Meat</li>
    </ul>
    <ul>
      <li>Social</li>
    </ul> -->
    <div class="powered">
      <p>
         &copy;{{new Date().getFullYear()}}
        <a href="#">www.freshmeatbookings.com</a>
        <b class="mobilebr"/> | Powered by Dwighson P. & Djordain C. |
        <b class="mobilebr"/> Designed by Mirishna J. 
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  /* outline: 1px solid red; */
}
footer {
  min-height: 100px;
  background: #141414;
  position: relative;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  /* background: green; */
  /* background: black; */
  padding-left: 50px;
  color: white;
}
.powered {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
}
ul {
  min-height: 100%;
  float: left;
  width: 200px;
  /* background: green; */
  max-width: 600px;
  padding: 0;
  margin: 0;
}
li:first-of-type {
  font-weight: bolder;
}
a {
  font-weight: bolder;
  color: white !important;
  text-decoration: none;
}
li {
  list-style-type: none;
  text-align: left;
  box-sizing: border-box;
  padding: 0 20px;
  height: 30px;
}
.mobilebr {
  display: none;
}
@media screen and (max-width: 1200px) {
  footer {
    min-height: 150px;
    text-align: center;
  }
  .mobilebr {
    display: block;
  }
  ul {
    min-height: 100px;
    /* background: green; */
    /* outline: 1px solid blue; */
    margin: 0 auto;
    padding-bottom: 20px;
    vertical-align: top;
    max-width: 50%;
    /* min-width: calc(50% - 200px); */
    display: inline-block;
    float: none;
  }
  .powered {
    bottom: 20px;
    min-height: 20px;
    /* background: purple; */
    /* text-align: left; */

    /* position: relative; */
    /* float: left; */
  }
  li {
    text-align: center;
    /* background: green; */
    /* margin: 3px; */
  }
}
</style>
