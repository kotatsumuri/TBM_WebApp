<template>
    <div id = "trashBoxMap">
        <div id = "mapping" :style = "{width: mapWidth + 'px',height: mapHeight + 'px'}">
        </div>
    </div>
</template>

<script>

let GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyD97yR6KcPtBRTQnq4IAb4Az_kkvqVEeyU';
GoogleMapsLoader.LANGUAGE = 'ja';

export default {
    name: 'TrashBoxMap',

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
            default: () => (['11 45 14 19 19', '19 19 81 01 14'])
        },
        popup: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            map: null,
            formattedMarkers: [],
            Google: null,
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

    methods: {
        addMarker() {
            this.markerKeys.forEach(key => {
                const markerInfo = this.$store.getters.trashBoxDatas[key];
                const marker = new this.Google.maps.Marker({
                    position: markerInfo.position,
                    map: this.map,
                    animation: this.Google.maps.Animation.DROP
                });
                this.formattedMarkers.push(marker);
            });
        },

        loadMap(google) {

            this.Google = google;

            this.map = new this.Google.maps.Map(document.getElementById('mapping'),{
                center: this.$store.getters.trashBoxDatas[this.markerKeys[0]].position,
                zoom: this.zoom,
                gestureHandling:'greedy'
            });
            this.addMarker();
        },
    },

}
</script>