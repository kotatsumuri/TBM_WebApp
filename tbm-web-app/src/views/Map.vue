<template>
    <div id = "map">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 sm3 md3>
                    <trash-box-card 
                     class = "card" 
                     :trashBoxDataKey = "trashBoxKey"
                    />
                </v-flex>
                <v-flex xs12 sm9 md9>
                    <v-card 
                     class = "card" 
                     id = 'mapCard'
                    >
                        <trash-box-map
                         @clickMarker = "setTrashBoxInfo"
                         :mapHeight = "mapHeight"
                         :trashBoxData = "$store.getters.trashBoxDatas"
                         :markerKeys = "Object.keys($store.getters.trashBoxDatas)"
                        />
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

    data: function () {
        return {
            mapHeight: 300,
            trashBoxKey: '11 45 14 19 19',
        }
    },

    mounted: function () {
        this.mapResize();
        window.addEventListener('resize',this.mapResize);
    },

    methods: {
        mapResize: function () {
            this.mapHeight = window.innerHeight * 0.80;
        },
        
        setTrashBoxInfo: function (key) {
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
