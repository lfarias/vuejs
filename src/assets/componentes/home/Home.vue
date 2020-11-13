

<template>
  <div id="app">

  <h1 class="centralizado">{{titulo}}</h1>


  <input type="search" class="filtro" v-on:input="filtro = $event.target.value"  placeholder="Filtre pelo titulo desejado" />

  <ul class="lista-fotos">
    <li v-for="foto of fotosComFiltro" class="lista-fotos-item">
    

    <meu-painel :titulo="foto.titulo">

    <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
    <botao rotulo="Remover" tipo="button" :confirmacao="true" @botaoAtivado="remove($event, foto)" estilo="perigo"/>
    </meu-painel>


   
    </li>  
  </ul>
   
  </div>
</template>

<script>
import axios from 'axios';
import "regenerator-runtime/runtime";
import Painel from './../shared/painel/Painel.vue';
import ImagemResponsiva from './../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from './../shared/botao/Botao.vue';



export default {
  components:{
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'botao': Botao

  },
  data(){
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro:''
    }
  }, 
  methods: {

      remove(event, foto){
          alert(event)
          alert('Remover a foto '+ foto.titulo);
      }
  },
  computed: {

    fotosComFiltro(){
      if(this.filtro){
        return this.fotos.filter((x)=>{
          return x.titulo.toUpperCase().includes(this.filtro.toUpperCase()) ? true :  false;
        });
      }else{
        return this.fotos;
      }
    }

  },
  async created(){

    var retorno = await axios.get('http://localhost:3000/v1/fotos');
    this.fotos = retorno.data;

  }
 
}
</script>

<style>

.centralizado{
  text-align: center
}

.lista-fotos{
  list-style: none;
}

.lista-fotos-item{
  display: inline-block
}

.filtro{

  display: block;
  width: 100%;

}

</style>
