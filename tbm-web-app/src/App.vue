<template>
    <div id = "app">
        <v-app>
            <page-header/>
            <v-content v-if = "$store.getters.rdbLoaded">
                <v-container fluid>
                    <router-view/>
                </v-container>
            </v-content>
            <page-footer/>
        </v-app>
    </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import firebase from 'firebase';

export default {
    name: 'App',

    components: {
        PageHeader,
        PageFooter,
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
            setTimeout(this.$store.commit, 1000,'finishLoad');
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
