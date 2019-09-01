<template>
    <div id = "trashBoxGraph" >
        <vue-apex-charts :height = "height" type = "area" :options = "options" :series = "series" >
        </vue-apex-charts>
    </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'TrashBoxGraph',

    components: {
        VueApexCharts,
    },

    props: {
        height: {
            type: Number,
            default: 300,
        },
        options: {
            type: Object,
            default: () => ({
                    chart: {
                        id: 'vuechart-example',
                        toolbar: {
                            show: false,
                        },
                    },
                    xaxis:{
                        type: 'datetime'
                    },
                }
            )
        },
        series: {
            type: Array,
            default: () => ([
                {
                    name: '11 45 14 19 19',
                    data:[[1145141919810, 30],
                          [1145141919811, 31],
                          [1145141919812, 32],
                          [1145141919813, 33],
                          [1145141919814, 34],
                          [1145141919815, 35],
                          [1145141919816, 36],
                          [1145141919817, 37]
                         ]
                },
            ]),
        },
    },

    data() {
        return {
        }
    },
}
</script>