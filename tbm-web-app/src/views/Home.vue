<template>
    <div id = "home">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 sm4 md3
                 v-for = "trashBoxDataKey in $store.getters.trashBoxDataKeys"
                 :key = "trashBoxDataKey"
                >
                    <trash-box-card
                     class = "card"
                     :trashBoxDataKey = "trashBoxDataKey"
                     :details = "{ show : true }"
                    />
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
}
</script>

<style scoped>
    .card {
        margin: 10px;
    }
</style>
