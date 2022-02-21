<template>
  <div id="app">
    <div class="header">
    <h1>Todo Application</h1>
    </div>
     <router-view/>
    <hr />
   
  </div>
</template>

<style>

#app{
  
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  
 
}
h1{
  margin: 0;
  padding: 0;
 
}
.header{
   background: rgb(3, 67, 119);
    color:#fff;
    padding: 20px;

}
</style>