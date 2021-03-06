import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/user/Login'
import Home from '@/components/user/Home'
import Detail from '@/components/user/Detail'
import AddItem from '@/components/user/AddItem'
import Application from '@/components/user/Application'
import Footprint from '@/components/user/Footprint'
import Message from '@/components/user/Message'

import Zone from '@/components/user/Zone'
// import Upload from '@/components/user/Upload'
import Test from '@/components/user/Test'
import Course from '@/components/user/CurrentCourse'
import Chatroom from '@/components/user/Chatroom'
import Profile from '@/components/ProfileBox'
// import Footer from '@/components/Footer'
// import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/profile',
      name:'Profile',
      component:Profile
    },
    {
      path:'/chat',
      name:'Chatroom',
      component: Chatroom
    },
    {
      path:'/course',
      name:'Course',
      component: Course
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/zone',
      name: 'Zone',
      component: Zone
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // meta:{
      //   requiredLogin:true
      // }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/',
      name: 'index',
      component: Login,
    },
    {
      path: '/addItem',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/footprint',
      name: 'Footprint',
      component: Footprint
    },

    // {
    //   path: '/manageItem',
    //   name: 'ItemManage',
    //   component: ItemManage,
    // },
    // {
    //   path: '/manageOwner',
    //   name: 'OwnerManage',
    //   component: OwnerManage,
    // },
    // {
    //   path:'/up',
    //   name:'up',
    //   component: Upload
    // }

  ]
})
