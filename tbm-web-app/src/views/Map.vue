<template>
    <div id = "map">
        <trash-box-map :mapWidth = "mapWidth" :mapHeight = "mapHeight" :trashBoxData = "$store.getters.trashBoxDatas" >
        </trash-box-map>
    </div>
</template>

<script>

import TrashBoxMap from '../components/TrashBoxMap'

export default {
    name: 'Map',

    components: {
        TrashBoxMap,
    },

    data() {
        return {
            mapWidth: window.innerWidth * 0.80,
            mapHeight: window.innerHeight * 0.80,
        }
    },

    created() {
    },

    methods: {
        handleResize: function() {
            this.mapWidth = window.innerWidth * 0.80;
            this.mapHeight = window.innerHeight * 0.80;
        }
    },

    mounted: function() {
        window.addEventListener('resize', this.handleResize)
    },
}
</script>

<style scoped>
</style>
