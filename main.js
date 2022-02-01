import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() { return {
      /*
    users: [
      {id: 1, username: "Kalle", mobil: "070 000 00 00", email: "k@k.k"},
      {id: 2, username: "Olof", mobil: "071 111 11 11", email: "o@o.o"},
      {id: 3, username: "Gösta", mobil: "072 222 22 22", email: "g@g.g"},
      {id: 4, username: "Alex", mobil: "073 333 33 33", email: "a@a.a"},
      {id: 5, username: "Steph", mobil: "074 444 44 44", email: "s@s.s"},
      {id: 6, username: "Love", mobil: "075 555 55 55", email: "l@l.l"},
    ]
    */
  }},
  router,
  render: h => h(App)
}).$mount('#app')