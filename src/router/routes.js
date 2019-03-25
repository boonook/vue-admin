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
    loginRouter,
    notFound,
];
export default routers