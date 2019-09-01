<template>
    <div id = "trashBoxCard">
        <v-card>
            <div class = "id">
                <v-card-title  primary-title>
                    {{ trashBoxDataKey }}
                </v-card-title>
            </div>
            <div class = "position">
                <v-card-text>
                    <div>POSITION</div>
                    <div class = "text--primary title">
                        <span>Latitude </span>
                        {{ trashBoxData[trashBoxDataKey].position.lat }}
                        <br/>
                        <span>Longitude </span>
                        {{ trashBoxData[trashBoxDataKey].position.lng }}
                    </div>
                </v-card-text>
                <trash-box-map
                    v-show = "details.show | details.map"
                    :mapHeight = "200"
                    :trashBoxData = "$store.getters.trashBoxDatas"
                    :markerKeys = "[trashBoxDataKey]"
                    :disableDefaultUI = "true"
                    :mapID = "trashBoxDataKey"
                    :canScroll = "false"
                >
                </trash-box-map>
            </div>
            <div class = "space">
                <v-card-text>
                    <div>SPACE</div>
                    <div class = "text--primary title">
                        {{ trashBoxData[trashBoxDataKey].space }}%
                    </div>
                </v-card-text>
                <trash-box-graph v-show = "details.show | details.graph" :width = "300">
                </trash-box-graph>
            </div>
            <div class = "things">
                <v-card-text>
                    <div>THINGS</div>
                    <div class = "text--primary title">
                        {{ trashBoxDataThings }}
                    </div>
                </v-card-text>
            </div>
            <slot></slot>
        </v-card>
    </div>
</template>

<script>
import TrashBoxGraph from './TrashBoxGraph'
import TrashBoxMap from './TrashBoxMap'

export default {
    name: 'TrashBoxCard',

    components: {
        TrashBoxGraph,
        TrashBoxMap,
    },

    props: {
        trashBoxData: {
            type: Object,
            default: () => ({
                '11 45 14 19 19': {
                    position: {
                        lat: 35.1145114,
                        lng: 135.191981,
                    },
                    space: 81,
                    things: ['ペットボトル','缶'],
                }
            })
        },
        details: {
            type: Object,
            default: () => ({
                show: false,
                map: false,
                graph: false,
            })
        },
    },

    data() {
        return {
        }
    },

    mounted() {
    },

    computed: {
        trashBoxDataKey: function() {
            return Object.keys(this.trashBoxData)[0]
        },

        trashBoxDataThings: function() {
            return this.trashBoxData[this.trashBoxDataKey].things.join(' ')
        },
    },

    methods: {
    }
}
</script>

<style scoped>
</style>