<template>
    <div id = "map">
        <v-container>
            <v-layout wrap>
                <v-flex md3>
                    <trash-box-card class = "card" 
                     :trashBoxData = "{ [trashBoxKey]: $store.getters.trashBoxDatas[trashBoxKey]}">
                    </trash-box-card>
                </v-flex>
                <v-flex md9>
                    <v-card class = "card" id = 'mapCard'>
                        <trash-box-map
                        @clickMarker = "setTrashBoxInfo"
                        :mapHeight = "mapHeight"
                        :trashBoxData = "$store.getters.trashBoxDatas"
                        :markerKeys = "Object.keys($store.getters.trashBoxDatas)"
                        >
                        </trash-box-map>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import TrashBoxMap from '../components/TrashBoxMap'
import TrashBoxCard from '../components/TrashBoxCard'


export default {
    name: 'Map',

    components: {
        TrashBoxMap,
        TrashBoxCard
    },

    data() {
        return {
            mapHeight: 300,
            trashBoxKey: '11 45 14 19 19',
        }
    },

    mounted() {
        this.mapResize();
        window.addEventListener('resize',this.mapResize);
    },

    methods: {
        mapResize: function() {
            this.mapHeight = window.innerHeight * 0.80;
        },
        setTrashBoxInfo: function(key) {
            /* eslint-disable */
            console.log(key);
            this.trashBoxKey = key;
        }
    },
}
</script>

<style scoped>
#map {
    margin: 0 auto;
}
.card {
    margin: 10px;
}
</style>
