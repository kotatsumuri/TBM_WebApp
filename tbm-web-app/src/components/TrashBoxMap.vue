<template>
    <div class = "trashBoxMap">
        <div
         :id = "makeMapID"
         :style = "{ width: auto, height: mapHeight + 'px'}"
        />
    </div>
</template>

<script>
const GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyAMeq0DxDop1xBCQZaHBSMtA1S5TmqfIHI';
GoogleMapsLoader.LANGUAGE = 'ja';

export default {
    name: 'TrashBoxMap',

    props: {
        mapID: {
            type: String,
            default: 'map',
        },
        markerKeys: {
            type: Array,
            default: null,
        },
        mapHeight: {
            type: Number,
            default: 100,
        },
        zoom: {
            type: Number,
            default: 17,
        },
        disableDefaultUI: {
            type: Boolean,
            default: false,
        },
        canScroll: {
            type: Boolean,
            default: true,
        },
    },

    data: function () {
        return {
            map: null,
            Google: null,
            formattedMarkers: [],
        }
    },

    watch: {
        '$store.getters.perfectTrashBoxDatas': function (newVal, oldVal) {
            this.formattedMarkers.forEach(marker => {
                marker.setMap(null);
            });

            this.formattedMarkers.splice(0, this.formattedMarkers.length);

            if(oldVal == null)
                GoogleMapsLoader.load(this.loadMap);
            else
                this.addMarker();
        }
    },

    mounted: function () {
        GoogleMapsLoader.load(this.loadMap);
    },

    computed: {
        makeMapID: function () {
            if(this.map === 'map')
                return 'map-' + Math.random().toString(36).slice(-8);
            return 'map-' + this.mapID;
        },
    },

    methods: {
        addMarker: function () {
            this.markerKeys.forEach(key => {
                const marker = new this.Google.maps.Marker({
                    position: this.$store.getters.perfectTrashBoxDatas[key].position,
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

            const scrollOption = (this.canScroll ? 'greedy' : 'none');

            this.map = new this.Google.maps.Map(document.getElementById(this.makeMapID),{
                center: this.$store.getters.perfectTrashBoxDatas[this.markerKeys[0]].position,
                zoom: this.zoom,
                gestureHandling:scrollOption,
                disableDefaultUI: this.disableDefaultUI,
                mapTypeId: this.Google.maps.MapTypeId.SATELLITE
            });

            this.addMarker();
        },
    },
}
</script>