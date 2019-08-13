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
        lat: {
            type: Number,
            default: 34.8,
        },
        lng: {
            type: Number,
            default: 135.5,
        },
        zoom: {
            type: Number,
            default: 8,
        },
    },

    data() {
        return {
            map: null,
        }
    },

    mounted() {
        GoogleMapsLoader.load(this.loadMap);
    },

    methods: {
        loadMap(google) {
            this.map = new google.maps.Map(document.getElementById('mapping'),{
                center: {lat: this.lat, lng: this.lng},
                zoom: this.zoom,
                gestureHandling:'greedy'
            })
        }
    }

}
</script>