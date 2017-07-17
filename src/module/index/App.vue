<template>
  <div id="app">
    <img src="./images/logo.png">
    <p><button class="btn" @click="openTab()"></button></p>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  export default {
    name: 'app',
    methods:{
    	openTab(){
    		window.open("./detail.html","_blank")
    	}
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
    margin-top: 60px;
  }
  .btn{
  	border:1px solid green;
  	min-width:60px;
  	height:30px;
  	color:white;
  	background: green;
    border-radius: 3px;;
  }
</style>
