//项目js打包入口文件
import Vue from 'vue'

import app from './components/app.vue'


const vm = new Vue({
  el: '#app',
  data: {},
  render:h => h(app)
})