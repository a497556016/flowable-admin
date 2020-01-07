<template>
    <div>
        <v-card>
            <v-card-title>待办任务列表</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-data-table
                        :loading="dataTable.loading"
                        :headers="headers"
                        :items="dataTable.data"
                        :options.sync="dataTable.options"
                        :server-items-length="dataTable.total"
                        :items-per-page="5"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn small @click="showDiagram(item)">查看流程图</v-btn>
                        <v-btn small color="primary" v-if="!item.assignee" @click="confirmClaimTask(item.id)">签收</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <process-diagram v-model="dialogVisible" :process-instance-id="processInstanceId" :process-definition-id="processDefinitionId"></process-diagram>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import moduleTypes from "../../store/types";
    import ProcessDiagram from "../../components/ProcessDiagram/Index";
    export default {
        name: "Todo",
        components: {ProcessDiagram},
        data(){
            return {
                headers: [
                    {text: "任务ID", value: "id"},
                    {text: "任务名称", value: "name"},
                    {text: "创建时间", value: "createTime"},
                    {text: "操作", value: "actions"}
                ],
                dialogVisible: false,
                processInstanceId: null,
                processDefinitionId: null
            }
        },
        computed: {
            ...mapState({
                dataTable: state => state.todoTask.dataTable
            })
        },
        watch: {
            "dataTable.options": {
                handler(options){
                    this.loadData(options);
                },
                deep: true
            }
        },
        mounted(){
            // this.loadData();
        },
        methods: {
            ...mapActions({
                loadData: moduleTypes.todoTask.loadTodoTasks,
                claimTask: moduleTypes.todoTask.claimTask
            }),
            showDiagram(item){
                this.processInstanceId = item.processInstanceId;
                this.processDefinitionId = item.processDefinitionId;
                this.dialogVisible = true;
            },
            confirmClaimTask(taskId) {
                this.$confirm("确认要签收该任务吗？").then(async () => {
                    const data = await this.claimTask(taskId);
                }).catch(() => {

                })

            }
        }
    }
</script>

<style scoped>

</style>