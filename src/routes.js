import Home from './assets/componentes/home/Home.vue';
import Cadastro from './assets/componentes/cadastro/Cadastro.vue';
export const routes = [
    {path: '', component: Home, titulo:'Home'},
    {path:'/cadastro', component: Cadastro, titulo:'Cadastro'}
];