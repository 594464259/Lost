// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueJsonp from 'vue-jsonp'
// import Cookies from 'js-cookie'
// import session from 'session'
// Vue.prototype.cookies=Cookies
// Vue.prototype.session=session;
// const TokenKey='VUE_TOKEN'
// export function getToken(){
//   return Cookies.get(TokenKey)
// }
// export function setToken(token) {
//   return Cookies.set(TokenKey,token)
// }
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
// import store from './store'

// import cors from 'koa2-cors'
// import Koa from 'koa'

// Vue.prototype.$cors=cors
// const Koa=require('koa')
// const app=new Koa()
// const cors =require('koa2-cors')
// app.use(async(ctx,next)=>{
// ctx.set('Access-Control-Allow-Origin','*')
// console.log(ctx,header)
// await next()
// });
// Vue.use(cors());
Vue.use(VueJsonp)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.$router = router
Vue.prototype.axios = axios

axios.defaults.baseURL = 'http://8.129.163.25:8888'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.qs = Qs
// Vue.prototype.HOST="http://106.53.218.199:8090"

//Admin
// Vue.prototype.host="http://localhost:8080"
Vue.prototype.host = 'http://8.129.163.25:8080'
///////////////////////////////////////////////////////

//user
// Vue.prototype.HOST="http://locahost:8090"
Vue.prototype.HOST = 'http://8.129.163.25:6666'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  render: h => h(App)
})
// .$mounted('#app')
// router.before((to, from ,next)=>{
//   if(to.matched.some(record=>record.meta.requiredLogin)){
//     if(sessionStorage.getItem('loginInfo')){
//       next();
//     }else{
//       next({
//         path: '/login'
//       })
//     }
//     } else {
//       next()
//   }
// })
