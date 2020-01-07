<template>
    <v-navigation-drawer :app="app" :mini-variant="miniSideBar" mini-variant-width="65" v-model="$store.state.application.sideBarVisible" :color="$store.state.application.themeColor + ' darken-2'">
        <side-header></side-header>
        <side-content></side-content>
    </v-navigation-drawer>
</template>

<script>
    import SideContent from "./SideContent";
    import SideHeader from "./SideHeader";
    import {mapState} from "vuex"
    export default {
        name: "SideBar",
        components: {SideHeader, SideContent},
        props: {
            app: Boolean
        },
        computed: {
            ...mapState({
                miniSideBar: state => state.application.miniSideBar
            })
        }
    }
</script>

<style scoped>

</style>