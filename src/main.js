import Vue from "vue";
import App from "./App.vue";
import store from "./store/vuex";
import Vue2Editor from "vue2-editor";
// import moment from 'moment';
// import VueMoment from 'vue-moment';
//
// require('moment/locale/ru')
// moment.locale('ru')
// Vue.use(VueMoment, {moment})
//
// Vue.filter('formatDate', function (value){
//   if(value){
//     return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a')
//   }
// });

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
