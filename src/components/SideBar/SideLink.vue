<template>

    <v-list-item @click="onClick" style="padding: 0;">
        <router-link :to="link.path" class="side-link">
            <v-list-item-icon color="pink">
                <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="link.name"></v-list-item-title>
            </v-list-item-content>
        </router-link>
    </v-list-item>

</template>

<script>
    export default {
        name: "SideLink",
        props: {
            link: {
                type: Object,
                default: () => {
                    return {
                        path: ""
                    }
                }
            }
        },
        methods: {
            onClick(){

            }
        }
    }
</script>

<style lang="scss">
    .side-link {
        text-decoration: none;
        /*display: inherit;*/
        width: 100%;
        display: inherit;
        padding: 0 10px;
        color: white !important;
    }
    .router-link-active {
        color: #f7f61e !important;
        background-color: rgba(255,255,255,.1) !important;

    }
    .v-list-item {
        margin-bottom: 8px !important;
    }
</style>