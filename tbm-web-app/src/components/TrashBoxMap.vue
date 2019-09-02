<template>
    <div class = "trashBoxMap">
        <div :id = "makeMapID" :style = "{width: auto,height: mapHeight + 'px'}">
        </div>
    </div>
</template>

<script>

let GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyAMeq0DxDop1xBCQZaHBSMtA1S5TmqfIHI';
GoogleMapsLoader.LANGUAGE = 'ja';

export default {
    name: 'TrashBoxMap',

    props: {
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
        canScroll: {
            type: Boolean,
            default: true,
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

    computed: {
        makeMapID: function() {
            if(this.map === 'map')
                return 'map-' + Math.random().toString(36).slice(-8) 
            return 'map-' + this.mapID
        },
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
               const _this = this;
               marker.addListener('click',function() {
                   _this.$emit('clickMarker',key)
               });
                this.formattedMarkers.push(marker);
            });
        },

        loadMap(google) {

            this.Google = google;

            let scrollOption = 'greedy';
            if(!this.canScroll)
                scrollOption = 'none';

            this.map = new this.Google.maps.Map(document.getElementById(this.makeMapID),{
                center: this.$store.getters.trashBoxDatas[this.markerKeys[0]].position,
                zoom: this.zoom,
                gestureHandling:scrollOption,
                disableDefaultUI: this.disableDefaultUI,
            });
            this.addMarker();
        },
    },

}
</script>