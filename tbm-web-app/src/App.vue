<template>
    <div id = "app">
      <v-app>
        <Header></Header>
        <Body></Body>
        <router-view />
        <Footer></Footer>
      </v-app>
    </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import firebase from 'firebase';

export default {
  name: 'App',

  components: {
    Header,
    Body,
    Footer
  },

  data () {
    return {
      database: null,
      Ref: null,
      val: {},
    }
  },

  created: function() {
    firebase.database().ref('datas/').on('value',snapshot => {
      this.$store.commit('setTrashBoxDatas',snapshot.val());
    });
  },
}
</script>
