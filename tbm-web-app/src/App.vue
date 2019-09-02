<template>
    <div id = "app">
      <v-app v-if = "$store.getters.rdbLoaded" >
        <!--<Header></Header>-->
        <Body id = "body"></Body>
        <v-content>
          <v-container fluid>
            <router-view/>
          </v-container>
        </v-content>
        <Footer></Footer>
      </v-app>
    </div>
</template>

<script>
//import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

import firebase from 'firebase';

export default {
  name: 'App',

  components: {
    //Header,
    Body,
    Footer
  },

  data () {
    return {
    }
  },

  created: function() {
    try {
      firebase.database().ref('datas/').on('value',snapshot => {
        this.$store.commit('setTrashBoxDatas',snapshot.val());
      });
      this.$store.commit('finishLoad');
    }
    catch(e) {
      /* eslint-disable */
      console.error(e)
    }
  },

  mounted: function() {
    
  }

}
</script>
