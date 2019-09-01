<template>
    <div id = "graph">
        <v-container>
            <v-layout wrap>
                <v-flex md12>
                    <v-card>
                        <trash-box-graph :height = "graphHeight" :series = "$store.getters.trashBoxLogs">
                        </trash-box-graph>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import TrashBoxGraph from '../components/TrashBoxGraph'

export default {

    name: 'Graph',

    components: {
        TrashBoxGraph,
    },

    data() {
        return {
            graphHeight: 300,
        }
    },

    mounted: function() {
        this.graphResize();
        window.addEventListener('resize',this.graphResize);
    },

    methods: {
        graphResize: function() {
            this.graphHeight = window.innerHeight * 0.80;
        },
    },

}
</script>
