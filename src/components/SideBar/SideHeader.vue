<template>
    <div class="side-header">
        <v-img :aspect-ratio="16/9" src="../../assets/img/side.jpg">
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <div class="subheading">{{userInfo.displayName}}</div>
                    <div class="body-1">{{userInfo.email}}</div>
                </v-col>
            </v-row>
        </v-img>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import moduleTypes from "../../store/types";
    export default {
        name: "SideHeader",
        computed: {
            ...mapGetters({
                userInfo: moduleTypes.userAccount.getUserInfo
            })
        }
    }
</script>

<style scoped lang="scss">
    .side-header {
        background: darkslategray;
        .title{
            color: white;
        }
    }
</style>