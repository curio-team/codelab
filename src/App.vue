<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <button class="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start">
            <router-link :to="{name: 'Home'}" class="navbar-item">
              <img src="./assets/curio-logo.png">
            </router-link>
            <router-link :to="{name: 'Home'}" class="navbar-item">Algemene Informatie</router-link>
            <router-link :to="{name: 'Skillkaarten'}" class="navbar-item">Skillkaarten</router-link>
            <router-link :to="{name: 'Codelab_Assignments'}" class="navbar-item">Codelab Assignments</router-link>
          </div>
        </div>
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

<script scoped>
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
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

  .router-link-exact-active {
    color: #FFFFFF !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .navbar-burger{
    border: none;
    border-radius: 0;
  }

  .navbar-burger:hover span {
    background: #FFFFFF !important;
  }

  #navMenu.is-active{
    position: fixed;
    left: 0;
    right: 3.25rem;
    bottom: 0;
    top: 0;
    z-index: 100;
    min-width: 200px;
  }
  #navMenu.is-active .navbar-item{
    color: #4a4a4a !important;
  }
  #navMenu.is-active .navbar-item:hover{
    color: #FFCC00 !important;
  }
</style>
