<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">


        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{name: 'Home'}" class="navbar-item" href="#">
              <img src="./assets/curio-logo.png">
            </router-link>
            <router-link :to="{name: 'Home'}" class="navbar-item"> Algemene Informatie </router-link>
            <router-link :to="{name: 'Skillkaarten'}" class="navbar-item"> Skillkaarten </router-link>
            <router-link :to="{name: 'Codelab_Assignments'}" class="navbar-item"> Codelab Assignments </router-link>
          </div>
        </div>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

  nav.navbar {
    margin-bottom: 20px;
    background: #004FFF;
    height: 64px;
  }

  .navbar-item {
    font-weight: bold;
    color: #FFFFFF !important;
  }

  .navbar-item:hover {
    font-weight: bold;
    color: #FFCC00 !important;
    background: none;
  }

  .container {

  }

  .router-link-exact-active {
    color: #FFFFFF !important;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
