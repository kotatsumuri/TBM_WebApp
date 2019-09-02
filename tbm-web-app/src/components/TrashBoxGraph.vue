<template>
    <div id = "trashBoxGraph" >
        <vue-apex-charts
         type = "line" 
         :height = "height"
         :options = "options" 
         :series = "series"
        />
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
        series: {
            type: Array,
            default: null,
        },
        height: {
            type: Number,
            default: 300,
        },
        dark: {
            type: Boolean,
            default: false
        },
        mini: {
            type: Boolean,
            default: false
        }
    },

    data: function () {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false,
                    },
                },
                xaxis:{
                    type: 'datetime',
                    labels: {
                        show: true,
                        format: 'HH:mm'
                    },
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true
                    },
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
                },
                tooltip: {
                    enabled: true,
                    x: {
                        format: 'HH:mm'
                    }
                }
            },
        }
    },

    watch: {
        dark: function (newVal) {
            if(newVal)
                this.darkStyle();
            else
                this.lightStyle();
        }
    },

    created: function () {
        if(this.dark)
            this.darkStyle();
        else
            this.lightStyle();

        if(this.mini)
            this.miniStyle();
    },

    methods: {
        darkStyle: function () {
            this.options.yaxis.labels.style.color = '#FFFFFF';
            this.options.grid.borderColor = '#dddddd';

            if(this.mini)
                this.options.colors = ['#FFFFFF'];
        },

        lightStyle: function () {
            this.options.yaxis.labels.style.color = '#000000';
            this.options.grid.borderColor = '#aaaaaa';

            if(this.mini)
                this.options.colors = ['#000000'];
        },

        miniStyle: function () {
            this.options.xaxis.labels.show = false;
            this.options.xaxis.axisBorder.show = false;
            this.options.xaxis.axisTicks.show = false;
            this.options.tooltip.enabled = false;
        }
    }
}
</script>