<template>
  <div id="app">
  	 <div class="headerBar">
               <div class="item logo">
                  LOGO
               </div>
                <div class="item logo">
                  <router-link to="{path:'/index'}">跳转</router-link>
               </div>
               
               <div class="item person">
                   <div class="person_head">
                      <img src="./static/images/one.jpg" alt="" />
                   </div>
               </div>
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  export default {
    name: 'app',
    methods:{
    
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .btn{
  	border:1px solid green;
  	min-width:60px;
  	height:30px;
  	color:white;
  	background: green;
    border-radius: 3px;;
  }
   .headerBar{
        width: 100%;
        height: 60px;
        background:blanchedalmond;
        padding: 10px 20px;
     }
     .headerBar .item{
        height:40px;
        min-width: 80px;
        line-height:40px;
     }
      .headerBar .item.logo{
         float: left;
     }
     .headerBar .item.person{
        float: right;
     }
     .person_head,.person_head img{
     	height: 40px;
     	width: 40px;
     	border-radius: 50%;
     }
</style>
