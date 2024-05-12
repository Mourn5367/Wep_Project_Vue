<template>

<div>
    
    <p>
        ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇ
        ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅇㅁㄴ
        ㅇ
        ㅁㄴㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴ
        ㅇㅁ
        ㄴㅇ
        ㅁㄴ
        ㅇㅁㄴ
        ㅇ
        {{price}}
        <img src="../public/column_col.png" alt="">
    </p>
</div>

</template>
<script>

export default {
  name: 'HomePage',
  data(){
    return{
        price : 60,
        itemName : "asd",
    }
  },
  components: {
  }
}
</script>

<style>
@font-face {
    src: url("../public/DNFForgedBlade-Medium.ttf");
    font-family: "blade";
}
</style>
