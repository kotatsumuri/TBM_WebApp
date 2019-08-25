<template>
    <div id = "trashBoxPopUp">
        <v-dialog v-model = "dialog" width = "300">
            <trash-box-card :details = "details" :trashBoxData = "trashBoxData">
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

    props: {
        dialog: {
            type: Boolean,
            default: false
        },
        trashBoxData: {
            type:Object,
            default: () => ({
                '11 45 14 19 19': {
                    position: {
                        lat: 35.1145114,
                        lng: 135.191981,
                    },
                    space: 81,
                    things: ['ペットボトル','缶'],
                }
            })
        },
    },

    data() {
        return {
            details: {
                show: true,
            }
        }
    }
}
</script>