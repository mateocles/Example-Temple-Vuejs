import Vue from "vue";
import Axios from "axios"
import App from "./App.vue";
import router from "./router/router";
import ArgonDashboard from "./plugins/argon-dashboard";
import store from "./store";


Vue.config.productionTip = false;
Vue.prototype.$http = Axios

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;



Vue.use(ArgonDashboard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
