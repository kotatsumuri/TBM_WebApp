<template>
    <div id = "home">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 sm4 md3
                v-for = "trashBoxKey in Object.keys($store.getters.trashBoxDatas)"
                :key = "trashBoxKey">
                    <trash-box-card
                     class = "card"
                     :trashBoxData = "{ [trashBoxKey]: $store.getters.trashBoxDatas[trashBoxKey]}"
                     :details = "{ show : true }">
                    </trash-box-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import TrashBoxCard from '../components/TrashBoxCard'

export default {
    name : 'Home',

    components: {
        TrashBoxCard,
    },

    data (){
        return {

        }
    },
}
</script>

<style scoped>
    .card {
        margin: 10px;
    }
</style>
