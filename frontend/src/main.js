import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import { createProvider } from './vue-apollo'
import SettingPointsGlobal from './plugins/SettingPointsGlobal'
import Helpers from './plugins/Helpers'

Vue.config.productionTip = false;


Vue.use(SettingPointsGlobal)
Vue.use(Helpers)

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
