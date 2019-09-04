<template>
    <div id = "setting">
        <v-container>
            <v-layout wrap>
                <v-flex xs12>
                    <v-card>
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>捨てられるもの</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr 
                                 v-for = "trashBoxDataKey in Object.keys($store.getters.trashBoxDatas)"
                                 :key = "trashBoxDataKey" 
                                >
                                <td>{{ trashBoxDataKey }}</td>
                                <td>
                                    <v-text-field
                                     v-model = "$store.getters.trashBoxDatas[trashBoxDataKey].things"
                                    >
                                    </v-text-field>
                                </td>
                                
                                </tr>
                            </tbody>
                        </v-simple-table>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <div class = "flex-grow-1"></div>
                            <v-btn>
                                追加
                            </v-btn>
                            <v-btn>
                                更新
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Setting',
}
</script>