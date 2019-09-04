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

    computed: {
        options: function () {
            const returnOptions = {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false,
                    },
                    animations: {
                        enabled: false
                    }
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
            };

            if(this.dark){
                returnOptions.yaxis.labels.style.color = '#FFFFFF';
                returnOptions.grid.borderColor = '#dddddd';

                if(this.mini)
                    returnOptions.colors = ['#FFFFFF'];
            }
            else{
                returnOptions.yaxis.labels.style.color = '#000000';
                returnOptions.grid.borderColor = '#aaaaaa';

                if(this.mini)
                    returnOptions.colors = ['#000000'];
            }

            if(this.mini){
                returnOptions.xaxis.labels.show = false;
                returnOptions.xaxis.axisBorder.show = false;
                returnOptions.xaxis.axisTicks.show = false;
                returnOptions.tooltip.enabled = false;
            }

            return returnOptions;
        }
    },
}
</script>