<template>
    <div id = "trashBoxPopUp">
        <v-dialog v-model = "dialog" width = "300">
            <template v-slot:activator = "{ on }">
                <v-btn v-on = "on">
                    click
                </v-btn>
            </template>
            <trash-box-card :details = "details">
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click = "dialog = false">close</v-btn>
                </v-card-actions>
            </trash-box-card>
        </v-dialog>
    </div>
</template>

<script>
import TrashBoxCard from './TrashBoxCard'

export default {

    name: 'TrashBoxPopUp',

    components: {
        TrashBoxCard,
    },

    data() {
        return {
            dialog: false,
            details: {
                show: true,
            }
        }
    }
}
</script>