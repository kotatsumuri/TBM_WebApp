<template>
    <div id = "body">
        <v-tabs v-model = "tabActive">
            <v-tab v-for = "item in items" v-bind:key = "item.id" v-on:click = "redirect(item.url)">
                {{item.title}}
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
export default {
        name: 'Body',
    data (){
        return {
            items: [
                {id: 0, title: 'Home', url: '/'},
                {id: 1, title: 'Map', url: '/map'},
                {id: 2, title: 'Glaph',url: '/glaph'}
            ],
            tabActive: null,
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


