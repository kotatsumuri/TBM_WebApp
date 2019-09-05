<template>
    <div id = "trashBoxCard">
        <v-card 
         :color = "backgroundColor" 
         :dark = "dark"
        >
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
                        {{ $store.getters.perfectTrashBoxDatas[trashBoxDataKey].position.lat }}
                        <br/>
                        <span>経度</span>
                        {{ $store.getters.perfectTrashBoxDatas[trashBoxDataKey].position.lng }}
                    </div>
                </v-card-text>
                <trash-box-map
                 v-show = "details.show | details.map"
                 :mapID = "trashBoxDataKey"
                 :markerKeys = "[trashBoxDataKey]"
                 :mapHeight = "200"
                 :disableDefaultUI = "true"
                 :canScroll = "false"
                />
            </div>
            <div class = "space">
                <v-card-text>
                    <div>空き容量</div>
                    <div class = "title">
                        {{ $store.getters.perfectTrashBoxDatas[trashBoxDataKey].space }}%
                    </div>
                </v-card-text>
                <trash-box-graph
                 v-show = "details.show | details.graph" 
                 :series = "[$store.getters.matchTrashBoxLog(trashBoxDataKey),]" 
                 :height = "200"
                 :dark = "dark"
                 :mini = "true"
                />
            </div>
            <div class = "things">
                <v-card-text>
                    <div>捨てられるもの</div>
                    <div class = "title">
                        {{ trashBoxDataThings }}
                    </div>
                </v-card-text>
            </div>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <info-setting-dialog 
                 :trashBoxDataKey = "trashBoxDataKey">
                </info-setting-dialog>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import TrashBoxGraph from './TrashBoxGraph'
import TrashBoxMap from './TrashBoxMap'
import InfoSettingDialog from './InfoSettingDialog'

export default {
    name: 'TrashBoxCard',

    components: {
        TrashBoxGraph,
        TrashBoxMap,
        InfoSettingDialog
    },

    props: {
        trashBoxDataKey: {
            type: String,
            default: null
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

    computed: {
        trashBoxDataThings: function () {
            return this.$store.getters.perfectTrashBoxDatas[this.trashBoxDataKey].things.join(' ')
        },

        backgroundColor: function () {
            return '#FF' + ( '00' + parseInt((100 - this.$store.getters.perfectTrashBoxDatas[this.trashBoxDataKey].space) * 0.01 * 255).toString(16).toUpperCase()).slice(-2).repeat(2)
        },

        dark: function () {
            return !(this.$store.getters.perfectTrashBoxDatas[this.trashBoxDataKey].space < 50)
        },
    },
}
</script>