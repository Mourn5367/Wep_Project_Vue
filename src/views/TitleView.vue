<template>
      <div id='wrapper'>
        <div>
            <div id = "backimg">
            <router-link to ="/search"></router-link>
            <div id = "backimgtext">
              Dnf Auction     
            </div>
            
          </div>
        </div>
      </div>
        <footer>
          <a href="https://developers.neople.co.kr/main"></a>
        </footer>
</template>

  
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
      src: url("../assets/DNFForgedBlade-Medium.ttf");
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
      background-image: url("../assets/Redeemer.jpg");
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
      background-image: url("../assets/column_col.png");
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
  