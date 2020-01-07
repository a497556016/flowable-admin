<template>
    <div>
        <v-breadcrumbs :items="paths"></v-breadcrumbs>
        <v-container>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "ContentLayout",
        computed: {
            ...mapState({
                paths: state => state.application.paths
            })
        }
    }
</script>

<style scoped>

</style>