import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'


const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
},
{
    path: '/Projetos',
    name: 'Projetos',
    component: Projetos
},
{
    path: '/Projetos/novoProjeto',
    name: 'novo projeto',
    component: Formulario
},
{
    path: '/Projetos/:id',
    name: 'editar projeto',
    component: Formulario,
    props: true
},
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;