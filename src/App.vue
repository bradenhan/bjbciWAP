<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
      <app-nav></app-nav>
  </div>
</template>

<script src="./frontend/js/zepto.js"></script>
<script src="./frontend/js/device.js"></script>

<script>
import Nav from '@/components/nav/Nav';
export default {
  name: 'app',
  components : {
    'app-nav' : Nav
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

/*.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}*/
</style>
