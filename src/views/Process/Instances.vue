<template>
    <div>
        <v-card>
            <v-card-title>流程实例列表</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-data-table
                        :loading="dataTable.loading"
                        :headers="headers"
                        :items="dataTable.data"
                        :options.sync="dataTable.options"
                        :server-items-length="dataTable.total"
                        :items-per-page="10"
                        show-select
                        class="elevation-1"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn small @click="showDiagram(item)">查看流程图</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <process-diagram v-model="dialogVisible" :process-instance-id="processInstanceId" :process-definition-id="processDefinitionId" :end-time="endTime"></process-diagram>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import moduleTypes from "../../store/types";
    import ProcessDiagram from "../../components/ProcessDiagram/Index";
    export default {
        name: "Instances",
        components: {ProcessDiagram},
        data(){
            return {
                headers: [
                    {text: "流程实例ID", value: "id", divider: true},
                    {text: "发起人", value: "startUserId", divider: true},
                    {text: "流程名称", value: "name", divider: true},
                    {text: "流程定义", value: "processDefinitionName", divider: true},
                    {text: "启动时间", value: "startTime", divider: true},
                    {text: "结束时间", value: "endTime", divider: true},
                    {text: "总用时", value: "durationInMillis", divider: true},
                    {text: "操作", value: "actions", divider: false}
                ],
                dialogVisible: false,
                processInstanceId: null,
                processDefinitionId: null,
                endTime: null
            }
        },
        computed: {
            ...mapState({
                dataTable: state => state.processInstances.dataTable,
            })
        },
        watch: {
            "dataTable.options": {
                handler(options){
                    console.log(options)
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
                loadData: moduleTypes.processInstances.loadData,
            }),
            showDiagram(item){
                this.processInstanceId = item.id;
                this.processDefinitionId = item.processDefinitionId;
                this.endTime = item.endTime;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>