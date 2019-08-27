import Vue from 'vue'
import App from './App.vue'
import hasPermissions from './plugin/hasPermissions'

Vue.use(hasPermissions, {
  usersPermissions: ['Read', 'Create']
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
