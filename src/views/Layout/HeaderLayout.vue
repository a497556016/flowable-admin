<template>
    <v-app-bar app :color="$store.state.application.themeColor + ' darken-1'" dark>
        <v-app-bar-nav-icon @click="toggleSideBar()"></v-app-bar-nav-icon>
        <v-toolbar-title>流程应用管理中心</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$store.state.application.showSearch = true">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <div>
            <v-text-field v-if="showSearch" autofocus placeholder="搜索..." @blur="$store.state.application.showSearch = false"></v-text-field>
        </div>
    </v-app-bar>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "HeaderLayout",
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                showSearch: state => state.application.showSearch
            })
        },
        methods: {
            toggleSideBar(){
                this.$store.state.application.miniSideBar = !this.$store.state.application.miniSideBar;
            }
        }
    }
</script>

<style scoped>

</style>