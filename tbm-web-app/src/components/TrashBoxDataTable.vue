<template>
    <div id = "trashBoxDataTable">
        <v-data-table
         :headers = "headers"
         :items = "items"
         :items-per-page = "5"
        >
            <template slot = "items" slot-scope="props"> 
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.things }}</td>
                
            </template>
        </v-data-table>
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
                    text: '捨てられるもの',
                    value: 'things',
                },
                {
                    text: '操作',
                    value: 'action',
                    sortable: false
                }
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
