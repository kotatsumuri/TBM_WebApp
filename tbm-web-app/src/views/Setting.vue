<template>
    <div id = "setting">
        <v-container>
            <v-layout wrap>
                <v-flex>
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
                                 v-for = "trashBoxDataKey in $store.getters.trashBoxDataKeys"
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