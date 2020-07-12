// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// export default new Vuex.Store({
//   state: {
//     // id: ''
//     id: JSON.parse(sessionStorage.getItem("id"))||''
//   },
//   actions: {
//     getUser(ctx, id) {
//       ctx.commit('getUser', id)
//     }
//   },
//   mutations: {
//     getUser(state, id) {
//         sessionStorage.setItem('id',JSON.stringify(id))
//       state.id = id
//     }
//   }
// })