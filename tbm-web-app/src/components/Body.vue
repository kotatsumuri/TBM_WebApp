<template>
    <div id = "body">
        <!--
        <v-tabs v-model = "tabActive">
            <v-tab v-for = "item in items" v-bind:key = "item.id" v-on:click = "redirect(item.url)">
                {{item.title}}
            </v-tab>
        </v-tabs>
        -->
        <v-navigation-drawer
        v-model = "drawer"
        enable-resize-watcher
        app
        absolute>
        <v-list dense>
            <v-list-item
            v-for = "item in items"
            :key = "item.id"
            v-on:click = "redirect(item.url)">
            <v-list-item-icon>
                <i :class = "item.iconClass"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    {{ item.title }}
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
        <v-app-bar fixed app>
            <v-app-bar-nav-icon @click.stop = "drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>TBM</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
        name: 'Body',
    data (){
        return {
            items: [
                {id: 0, title: 'Home', url: '/', iconClass: 'fas fa-home'},
                {id: 1, title: 'Map', url: '/map', iconClass: 'fas fa-map'},
                {id: 2, title: 'Glaph',url: '/glaph', iconClass: 'fas fa-chart-area'}
            ],
            tabActive: null,
            drawer: false,
            mini: true,
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


<style>

</style>


