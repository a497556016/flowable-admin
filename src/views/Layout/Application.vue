<template>
    <v-app>
        <header-layout></header-layout>

        <side-bar app></side-bar>

        <v-content>
            <content-layout></content-layout>
        </v-content>

        <v-footer app>
            <v-spacer></v-spacer>
            ccc
        </v-footer>
    </v-app>
</template>

<script>
    import SideBar from "../../components/SideBar/SideBar";
    import HeaderLayout from "./HeaderLayout";
    import ContentLayout from "./ContentLayout";
    export default {
        name: "Application",
        components: {ContentLayout, HeaderLayout, SideBar},
    }
</script>

<style scoped>

</style>