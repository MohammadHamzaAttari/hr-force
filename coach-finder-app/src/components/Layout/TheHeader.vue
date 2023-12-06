<template>
    <div class="Wrapper">
    <nav class="navbar navbar-expand-sm navbar-fixed-top">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-brand">
        <router-link to="/">
          <h2 style="color: white;">Find a Coach</h2>
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav" style="margin-left: auto;">
          <li class="nav-item items">
            <base-button link class="nav-link" to="/coaches">Coaches</base-button>
          </li>
          <li class="nav-item items">
            <base-button link class="nav-link" to="/request">Request</base-button>
          </li>
        </ul>
      </div>
    </nav>
</div>
  </template>
  
<script>
export default{
    name:'TheHeader'
}
</script>
<style>
h2{
    margin:15px;
    font-size: xx-large;
    text-decoration: none;
}
a{text-decoration: none;}
.Wrapper{
    width:100%;
    background-color:#3a0061;
}
.items{
    border-radius: 5px;
    border:2px solid white;
    font-size: x-large;
    color: white;
    font-weight: bold;
    background-color: transparent;
    margin: 10px;
}
</style>