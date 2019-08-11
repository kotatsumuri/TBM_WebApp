import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBUpi5Oitu3Z81fwKBznc5-Ute6WhtWHPs",
  authDomain: "procon30-tbm.firebaseapp.com",
  databaseURL: "https://procon30-tbm.firebaseio.com",
  projectId: "procon30-tbm",
  storageBucket: "procon30-tbm.appspot.com",
  messagingSenderId: "685852065402",
  appId: "1:685852065402:web:6dfbd3f0d3daab29"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
