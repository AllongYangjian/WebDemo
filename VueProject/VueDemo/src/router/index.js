
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news', // path最左侧的/永远代表根路径
                    component:News
                },
                {
                    path:'message', //简化写法
                    component:Message,
                    children:[
                       {
                        path:'/home/message/detail/:id',
                        component:Detail
                       }

                    ]
                }
            ]
        },
        {
            path:'/',
            component:About
        }
    ]
})