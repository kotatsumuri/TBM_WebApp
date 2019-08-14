<template>
    <div id = "trashBoxGraph">
        <vue-apex-charts type = "area" :options = "options" :series = "series">
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
        options: {
            type: Object,
            default: () => ({
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis:{
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    },
                }
            )
        },
        series: {
            type: Array,
            default: () => ([
                {
                    name: 'series-1',
                    data: [30,40,45,50,49,60,70,10],
                },
                {
                    name: 'series-2',
                    data: [30,40,5,50,49,60,70,10],
                }
            ]),
        },
    },

    data() {
        return {
        }
    },
}
</script>