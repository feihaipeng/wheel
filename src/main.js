import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/normalize.scss'
import './assets/scss/mixin.scss'
import './assets/scss/theme.scss'
import './assets/scss/element-style.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 改变主题颜色  'theme1' 'theme2' 'theme3'
// window.document.documentElement.setAttribute('data-theme', '主题name')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
