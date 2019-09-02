<template>
    <div id = "trashBoxCard">
        <v-card :color = "cardColor" :dark = "isDark">
            <div class = "id">
                <v-card-title  primary-title>
                    {{ trashBoxDataKey }}
                </v-card-title>
            </div>
            <div class = "position">
                <v-card-text>
                    <div>場所</div>
                    <div class = "title">
                        <span>緯度</span>
                        {{ trashBoxData[trashBoxDataKey].position.lat }}
                        <br/>
                        <span>経度</span>
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
                    <div>空き容量</div>
                    <div class = "title">
                        {{ trashBoxData[trashBoxDataKey].space }}%
                    </div>
                </v-card-text>
                <trash-box-graph
                 :series = "[$store.getters.matchTrashBoxLog(trashBoxDataKey),]" 
                 v-show = "details.show | details.graph" 
                 :height = "200"
                 :isDark = "isDark"
                 :mini = "true">
                </trash-box-graph>
            </div>
            <div class = "things">
                <v-card-text>
                    <div>捨てられるもの</div>
                    <div class = "title">
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

        cardColor: function() {
            return '#FF' + ( '00' + parseInt((100 - this.trashBoxData[this.trashBoxDataKey].space) * 0.01 * 255).toString(16).toUpperCase()).slice(-2).repeat(2)
        },

        isDark: function() {
            if(this.trashBoxData[this.trashBoxDataKey].space < 50)
                return false
            return true
        },
    },

    methods: {
    }
}
</script>

<style scoped>
</style>