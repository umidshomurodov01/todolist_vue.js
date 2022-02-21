<template>
  <div>
    <h2>Home page</h2>
     <div id="nav">
     <router-link to="/todos">Todos</router-link>
     </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
      adipisci ipsa, vel magnam earum dolor aspernatur nesciunt, aliquid
      consequatur sunt maxime ex odit ea obcaecati rem incidunt consequuntur
      laborum quasi.
    </p>
    <hr/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
      adipisci ipsa, vel magnam earum dolor aspernatur nesciunt, aliquid
      consequatur sunt maxime ex odit ea obcaecati rem incidunt consequuntur
      laborum quasi.
    </p>
     <hr/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
      adipisci ipsa, vel magnam earum dolor aspernatur nesciunt, aliquid
      consequatur sunt maxime ex odit ea obcaecati rem incidunt consequuntur
      laborum quasi.
    </p>
   
  </div>
</template>
<style scoped>
#nav {
  padding: 15px;
  background:rgb(3, 67, 119);
  
}
#nav a {
  font-weight: bold;
  color: #fff;
   text-decoration: none;
   font-size: 26px;
   font-weight: bold;
   margin-left: 20px;
}

#nav a.router-link-exact-active {
 color: cyan;
}
</style>