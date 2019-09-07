<template>
    <div class = "infoSettingDialog">
        <div class = "flex-grow-1"></div>
        <v-dialog 
         v-model = "showDialog" 
         width = "500"
        >
            <template v-slot:activator = "{ on }" >
                <v-btn
                 v-on = "on"
                 @click = "cloneTrashBoxDataThings"
                >
                    設定
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    設定
                </v-card-title>
                <v-card-text >
                    <div class = "title">
                        {{ trashBoxDataKey }} 
                    </div>
                    捨てられるもの
                    <v-text-field v-model = "copyTrashBoxDataThings">
                    </v-text-field>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <div class = "flex-grow-1"></div>
                    <v-btn
                     color = "primary" 
                     @click = "changeTrashBoxDataThings(); showDialog = false;"
                    >
                        更新
                    </v-btn>
                    <v-btn
                     color = "error"
                     @click = "showDialog = false"
                    >
                        &times; キャンセル
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'InfoSettingDialog',

    components: {
    },

    props: {
        trashBoxDataKey: {
            type: String,
            default: null
        }
    },

    data: function () {
        return {
            showDialog: false,
            copyTrashBoxDataThings: null,
        }
    },

    methods: {
        cloneTrashBoxDataThings: function () {
            this.copyTrashBoxDataThings = this.$store.getters.perfectTrashBoxDatas[this.trashBoxDataKey].things.join(',')
        },
        changeTrashBoxDataThings: function() {
            const updateData = this.$store.getters.trashBoxDatas[this.trashBoxDataKey];
            updateData.things = this.copyTrashBoxDataThings.split(',');
            firebase.database().ref('datas/dataList/' + this.trashBoxDataKey).update(
                updateData
            )
        }
    }

}
</script>