<template>
    <div id = "trashBoxMap">
        <div :id = "makeMapID" :style = "{width: mapWidth + 'px',height: mapHeight + 'px'}">
        </div>
        <slot></slot>
        <v-dialog v-model = "dialog" width = "300" v-if = "popUp">
            <trash-box-card :trashBoxData = "dialogTrashBoxData" :details = "{ show: true }">
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click = "dialog = false">close</v-btn>
                </v-card-actions>
            </trash-box-card>
        </v-dialog>
    </div>
</template>

<script>
import TrashBoxCard from './TrashBoxCard'

let GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyD97yR6KcPtBRTQnq4IAb4Az_kkvqVEeyU';
GoogleMapsLoader.LANGUAGE = 'ja';

export default {
    name: 'TrashBoxMap',

    components: {
        TrashBoxCard,
    },

    props: {
        mapWidth: {
            type: Number,
            default: 100,
        },
        mapHeight: {
            type: Number,
            default: 100,
        },
        zoom: {
            type: Number,
            default: 15,
        },
        trashBoxData: {
            type: Object,
            default: () => ({}),
        },
        markerKeys: {
            type: Array,
            default: () => (['11 45 14 19 19', '19 19 81 01 11'])
        },
        disableDefaultUI: {
            type: Boolean,
            default: false,
        },
        mapID: {
            type: String,
            default: 'map',
        },
        popUp: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {
            map: null,
            formattedMarkers: [],
            Google: null,
            dialog: false,
            dialogTrashBoxData: null,
        }
    },

    watch: {
        trashBoxData(newVal, oldVal){
            this.formattedMarkers.forEach(marker => {
                marker.setMap(null);
            });

            this.formattedMarkers.splice(0, this.formattedMarkers.length);

            if(oldVal == null){
                GoogleMapsLoader.load(this.loadMap);
            }
            else {
                this.addMarker();
            }
        }
    },

    mounted() {
        GoogleMapsLoader.load(this.loadMap);
    },

    computed: {
        makeMapID: function() {
            return 'map-' + this.mapID
        },
    },

    methods: {

        trashBoxCardListener() {
            //this.dialogString = id;
            this.dialog = true
        },

        addMarker() {
            this.markerKeys.forEach(key => {
                const markerInfo = this.$store.getters.trashBoxDatas[key];
                const marker = new this.Google.maps.Marker({
                    position: markerInfo.position,
                    map: this.map,
                    animation: this.Google.maps.Animation.DROP
                });
                /*
                const infowindow = new this.Google.maps.InfoWindow({
                    content: 'a'
                });
                marker.addListener('click', function() {
                    infowindow.open(this.map, marker);
                });
                */
                if(this.popUp){
                    const _this = this;
                    marker.addListener('click',function() {
                    _this.dialogTrashBoxData = {[key]: _this.$store.getters.trashBoxDatas[key]};
                    _this.dialog = true;
                    });
                }
                this.formattedMarkers.push(marker);
            });
        },

        loadMap(google) {

            this.Google = google;

            this.map = new this.Google.maps.Map(document.getElementById(this.makeMapID),{
                center: this.$store.getters.trashBoxDatas[this.markerKeys[0]].position,
                zoom: this.zoom,
                gestureHandling:'greedy',
                disableDefaultUI: this.disableDefaultUI,
            });
            this.addMarker();
        },
    },

}
</script>