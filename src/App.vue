<template>
  <div class = "black-bg" v-if="delstate == true">
    <div class = "white-bg">
      <h4>삭제 창</h4>
      <p>삭제 하시겠습니까</p>
      <button @click="delstate = false">
        Delete
      </button>
    </div>
  </div>

    <!-- <div id='wrapper'>
      <div>
        <div id = "backimg">
          <router-link to = "Home"></router-link>
          <div id = "backimgtext">
            Dnf Auction
          </div>
          <div class = "menu">
            <a v-for="(menuname,i) in menudata " :key = i>{{menuname}}
              <button v-on:click = "AlCnt[i]++,delstate = true">Allert</button>
            
              <span >Count : {{AlCnt[i]}}</span>
            </a>
          </div>
        </div>
      </div>
      </div>
      <router-view></router-view>
      <footer>
        <a href="https://developers.neople.co.kr/main"></a>
      </footer> -->
      <div >
        <button v-on:click = "search" >검색버튼</button>
      </div>
      <div>
        <p>
          <input v-model="inputdata">
        </p>
      </div>
      <div>
        
      </div>
      <div>
        <p>
      
        </p>
      </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'App',


  data()
  {
    return{
      inputdata : "",
      itemDatas : [],
      itemNames :[],
      // menudata : ["Home","Search","Login/Logout"],
      // AlCnt : [0,0,0],
      delstate : false,
    }
  },
  components: {
  },
  methods: {
  search()
  {
      
      var url = `/api/df/items?itemName=${this.inputdata}}&wordType=full&limit=100&apikey=yOvnV8S9LBzTVGvmEqSs4LnFIo9IluHT`;
      axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        this.itemDatas = response.data["rows"]
        this.itemNames = this.itemDatas.map( item => item.itemName)

      })
      .catch((error) =>{
        console.log(error)
      })
      
      
      
  },  asd()
  {
      console.log("asdsad");
  }
  },
}
</script>

<style>

div
{
  box-sizing: border-box;
}
.black-bg
{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position : fixed; padding : 20px;
}
.white-bg
{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
@font-face {
    src: url("../public/DNFForgedBlade-Medium.ttf");
    font-family: "blade";
}
:root
{
    --footerheight : 40px;
}
html, body
{
    margin: 0;
    padding : 0;
    height: 100%;
}
#wrapper
{
    height: auto;
    min-height: 100%;
    padding-bottom: var(--footerheight);
}
#wrapper a
{
    display: block;
    width :100%;
    height:100%;
}
#backimg
{
    position: relative;
    /* background-image: url("../public/Redeemer.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
}
#backimgtext
{
    color: white;
    top:50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    font-family: "blade";
    font-size: 13vh;
    text-align: center;
    
}
footer
{
    height: var(--footerheight);
    position : relative;
    transform : translateY(-100%);
    background-image: url("../public/column_col.png");
    background-repeat: no-repeat;
    background-position: center;
}
footer a
{
      display: block;
      width :100%;
      height:100%;
}
.menu
{
  background: gray;
  padding: 15px;
  border-radius: 5px;
}
.menu a
{
  color: white;
  padding : 10px;
}

  </style>
