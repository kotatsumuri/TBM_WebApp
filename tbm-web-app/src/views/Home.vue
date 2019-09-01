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
        <trash-box-pop-up>
        </trash-box-pop-up>
    </div>
</template>

<script>
import TrashBoxPopUp from '../components/TrashBoxPopUp'
import TrashBoxCard from '../components/TrashBoxCard'

export default {
    name : 'Home',

    components: {
        TrashBoxPopUp,
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
