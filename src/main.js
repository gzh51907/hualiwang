import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(ElementUI);


new Vue({
  // 4.把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
