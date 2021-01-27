import Vue from 'vue'
import App from './App.vue'
import { Table,TableColumn } from 'element-ui'
Vue.use(Table).use(TableColumn)
import 'element-ui/lib/theme-chalk/index.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
