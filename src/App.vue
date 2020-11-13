

<template>
  <div id="app"  class="corpo">

  <meu-menu :rotas="routes" />

<transition name="pagina">
  <router-view></router-view>
</transition>

  </div>
</template>

<script>
import Menu from './assets/componentes/shared/menu/Menu.vue';

import {routes} from './routes';
export default {

  components: {
    'meu-menu': Menu
  },

  data(){
    return {
      routes
    }
  }
  
}
</script>

<style>

.corpo{
  font-family:Helvetica;
  width: 96%;
}

  .pagina-enter, .pagina-leave-active{
    opacity: 0;
  }
  .pagina-enter-active, .pagina-leave-active{
    transition: .4s;
  }

</style>
