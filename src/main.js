import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./routes/routes";
import { store } from "./store/store";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
