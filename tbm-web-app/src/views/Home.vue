<template>
    <div id = "home">
        <TrashBoxDataTable>
        </TrashBoxDataTable>
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
