<template>
    <div id = "body">
    <v-app-bar fixed app>
        <v-toolbar-title>TBM</v-toolbar-title>
        <div class = "flex-grow-1"></div>
        <v-toolbar-items>
        <v-btn 
             text 
             v-for = "toolbarItem in toolbarItems" 
             :key = "toolbarItem.id" 
             @click = "redirect(toolbarItem.url)">
            {{toolbarItem.title}}
        </v-btn>
        </v-toolbar-items>
    </v-app-bar>
    </div>
</template>

<script>
export default {
        name: 'Body',
    data (){
        return {
            toolbarItems: [
                {id: 0, title: 'Home', url: '/', iconClass: 'fas fa-home'},
                {id: 1, title: 'Map', url: '/map', iconClass: 'fas fa-map'},
                {id: 2, title: 'Graph',url: '/graph', iconClass: 'fas fa-chart-area'}
            ],
        }
    },
    mounted: function(){

        var result = this.items.filter(
            item => item.url === this.$route.path
        );

        this.tabActive = result[0].id;
    },
    methods: {
        redirect: function(url){
            this.$router.push(url);
        },
    }
}
</script>

<style scoped>
</style>