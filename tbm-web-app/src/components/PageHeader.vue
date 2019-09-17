<template>
    <div id = "pageHeader">
        <v-app-bar fixed app v-show = "$store.getters.showHeader">
            <v-toolbar-title>TBM</v-toolbar-title>
            <div class = "flex-grow-1"></div>
            <v-toolbar-items>
                <v-btn 
                 text 
                 v-for = "toolbarItem in toolbarItems" 
                 :key = "toolbarItem.id" 
                 @click = "pageRedirect(toolbarItem.url)"
                >
                {{toolbarItem.name}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',

    data: function () {
        return {
            toolbarItems: [
                {id: 0, name: 'Home',   url: '/',        iconClass: 'fas fa-home'},
                {id: 1, name: 'Map',    url: '/map',     iconClass: 'fas fa-map'},
                {id: 2, name: 'Graph',  url: '/graph',   iconClass: 'fas fa-chart-area'},
            ],
        }
    },

    methods: {
        pageRedirect: function (url) {
            this.$router.push(url);
        },
    },
}
</script>