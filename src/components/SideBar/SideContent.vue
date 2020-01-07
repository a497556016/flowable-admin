<template>
    <div class="side-content">
        <template v-for="(l1, i1) in links">
            <v-list :key="l1.name" subheader :color="$store.state.application.themeColor + ' darken-1'" dark nav dense style="border-radius: 0;">
                <template v-if="l1.children">
                    <v-subheader inset>{{l1.name}}</v-subheader>
                    <side-link v-for="(l2) in l1.children" :key="l2.name" :link="l2"></side-link>
                </template>
                <template v-else>
                    <side-link :link="l1"></side-link>
                </template>
                <v-divider inset v-if="i1 !== (links.length - 1)"></v-divider>
            </v-list>
        </template>
    </div>
</template>

<script>
    import SideLink from "./SideLink";
    export default {
        name: "SideContent",
        components: {SideLink},
        data(){
            return {
                item: 0,
                links: [
                    {
                        name: "主页",
                        icon: "mdi-dashboard",
                        path: "/dashboard"
                    },
                    {
                        name: "流程管理",
                        icon: "mdi-eye",
                        children: [
                            {
                                name: "流程定义",
                                icon: "mdi-star",
                                path: "/process/definition"
                            },
                            {
                                name: "流程实例",
                                icon: "mdi-star",
                                path: "/process/instances"
                            }
                        ]
                    },
                    {
                        name: "任务管理",
                        icon: "mdi-eye",
                        children: [
                            {
                                name: "待办任务",
                                icon: "mdi-eye",
                                path: "/task/todo"
                            },
                            {
                                name: "已办任务",
                                icon: "mdi-eye",
                                path: "/task/done"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">


</style>