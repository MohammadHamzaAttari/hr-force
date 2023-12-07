import {createRouter,createWebHistory} from 'vue-router'
import CoachDetail from './Pages/Coaches/CoachDetail.vue'
import CoachList from './Pages/Coaches/CoachList.vue'
import CoachRegistration from './Pages/Coaches/CoachRegistration.vue'
import ContactCoach from './Pages/Requests/ContactCoach.vue'
import RequestReceive from './Pages/Requests/RequestReceive.vue'
import NotFound from './NotFound.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",redirect:'/coaches'},
        {path:'/coaches',component:CoachList},

        {
            path:'/coaches/:id',
            component:CoachDetail,
            props:true,
            children:[
           { path:'contact',component:ContactCoach}
        ]},
        {path:'/register',component:CoachRegistration},
        {path:'/request',component:RequestReceive},
        {path:'/:notfound(.*)',component:NotFound}
    ]
})
export default router;