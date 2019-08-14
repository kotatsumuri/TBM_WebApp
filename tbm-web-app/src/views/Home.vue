<template>
    <div id = "home">
        <trash-box-data-table>
        </trash-box-data-table>
    </div>
</template>

<script>

import TrashBoxDataTable from '../components/TrashBoxDataTable'

export default {
    name : 'Home',

    components: {
        TrashBoxDataTable,
    },

    data (){
        return {

        }
    },
}
</script>
