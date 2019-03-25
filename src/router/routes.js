import Grid from '../components/grid.vue'
import Container from '../components/container/container.vue'
import Gov from  '../view/gov/gov.vue'
import Org from  '../view/gov/org.vue'
const notFound =  {
    path:'*',
    name:'404',
    component:()=>import('../view/error/404.vue')
};
const loginRouter =  {
    path:'/login',
    name:'login',
    component:()=>import('../view/auth'),
    children:[],
};
const routers = [
    {
        path:'/',
        name: 'index',
        component:()=>import('../view'),
        children:[],
    },
    {
        path:'/grid',
        name:'grid_manager',
        component:Grid,
        redirect:'/grid/home',
        children:[
            {
                path:'home',
                name:'grid_home',
                component:()=>import('../view/home/home'),
            },
            {
                path:'gov',
                name:'grid_gov',
                component:Container,
                redirect:'/grid/gov/home',
                children:[
                    {
                        path:'home',
                        name:'grid_gov_home',
                        component:Gov
                    },
                    {
                        path:'org',
                        name:'grid_gov_org',
                        component:Org,
                        meta:{
                            orderBy:'org_team',
                            title:'综治机构',
                        }
                    },
                ]
            },
        ]
    },
    loginRouter,
    notFound,
];
export default routers