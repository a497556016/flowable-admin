<template>
    <div>
        <v-card>
            <v-card-title>流程定义</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-data-table
                        :headers="headers"
                        :items="data"
                        :items-per-page="10"
                        :loading="loading"
                        :options.sync="options"
                        :server-items-length="total"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-btn color="primary" small @click="showDiagram(item.id)">查看流程图</v-btn>
                        <v-btn color="purple" dark small @click="startProcess(item)">发起流程</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <v-dialog v-model="processDiagramView" scrollable max-width="1000">
            <v-card height="600" max-height="700">
                <v-card-title>流程图</v-card-title>
                <iframe :src="processDiagramSrc" style="width: 100%; height: 100%" frameborder="0"></iframe>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="processDiagramView = false">关闭</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import process from "../../api/process"
    export default {
        name: "Definition",
        data(){
            return {
                loading: false,
                options: {},
                headers: [
                    { text: "ID", value: "id" },
                    { text: '名称', align: 'left', sortable: false, value: 'name', },
                    { text: 'Key', value: 'key' },
                    { text: "版本", value: "version" },
                    { text: "部署ID", value: "deploymentId" },
                    { text: '描述', value: 'description' },
                    { text: "操作", value: "actions"}
                ],
                data: [],
                total: 0,

                processDiagramView: false,
                processDiagramSrc: ""
            }
        },
        watch: {
            options: {
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
            async loadData(options){
                this.loading = true;
                const data = await process.getProcessDefinitions(options.page, options.itemsPerPage);
                this.loading = false;
                this.data = data.data;
                this.total = data.total;
            },
            showDiagram(processDefinitionId){
                this.processDiagramSrc = `http://localhost:7008?processDefinitionId=${processDefinitionId}`;
                this.processDiagramView = true;
            },
            startProcess(item){
                this.$router.push({
                    path: `/form/startProcessWithForm`,
                    query: {
                        id: item.id,
                        key: item.key,
                        name: item.name
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>