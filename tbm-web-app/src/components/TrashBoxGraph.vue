<template>
    <div id = "trashBoxGraph" >
        <vue-apex-charts :height = "height" type = "line" :options = "options" :series = "series" >
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
        propOptions: {
            type: Object,
            default: () => ({
                    chart: {
                        id: 'vuechart-example',
                        toolbar: {
                            show: false,
                        },
                    },
                    xaxis:{
                        type: 'datetime',
                        labels: {show: true},
                        axisBorder: {show: true},
                        axisTicks: {show: true}
                    },
                    yaxis: {
                        labels: {
                            style: {
                                color: '#FFFFFF'
                            }
                        }
                    },
                    grid: {
                        show:true,
                        borderColor: '#aaaaaa'
                    }
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
        isDark: {
            type: Boolean,
            default: false
        },
        mini: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            options: null,
        }
    },

    watch: {
        isDark(newVal) {
            this.changeStyle(newVal);
        }
    },

    mounted() {
        this.options = this.propOptions;
        this.changeStyle(this.isDark);

        if(this.mini)
            this.toMini();
    },

    methods: {
        changeStyle:function(isDark) {
            if(isDark){
                this.options.yaxis.labels.style.color = '#FFFFFF';
                this.options.grid.borderColor = '#dddddd';

                if(this.mini){
                    this.options.colors = ['#FFFFFF']
                }
            }
            else{
                this.options.yaxis.labels.style.color = '#000000';
                this.options.grid.borderColor = '#aaaaaa'

                if(this.mini){
                    this.options.colors = ['#000000']
                }
            }
        },
        toMini: function() {
            this.options.xaxis.labels.show = false;
            this.options.xaxis.axisBorder.show = false;
            this.options.xaxis.axisTicks.show = false;
        }
    }
}
</script>