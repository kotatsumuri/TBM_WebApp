<template>
    <div id = "trashBoxDataTable">
        <v-data-table
         :headers = "headers"
         :items = "items"
         :items-per-page = "5"
        />
    </div>
</template>

<script>
export default {

    name: 'TrashBoxDataTable',

    data() {
        return {
            headers:[
                {
                    text: 'ID',
                    value: 'id',
                },
                {
                    text: 'Space',
                    value: 'space',
                },
                {
                    text: 'Latitude',
                    value: 'lat',
                },
                {
                    text: 'Longitude',
                    value: 'lng',
                },
                {
                    text: 'Things',
                    value: 'things',
                },
            ],
        }
    },

    computed: {
        items: function() {
            let computedItems = [];
            const rawDatas = this.$store.getters.trashBoxDatas;

            for(var key in rawDatas){
                let item = {};
                item.id = key;
                item.space = rawDatas[key].space;
                item.lat = rawDatas[key].position.lat;
                item.lng = rawDatas[key].position.lng;
                item.things = rawDatas[key].things;
                computedItems.push(item);
            }

            return computedItems;

        }
    },
}
</script>

<style>

</style>
