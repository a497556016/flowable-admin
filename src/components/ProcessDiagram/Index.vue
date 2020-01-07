<template>
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
</template>

<script>
    export default {
        name: "ProcessDiagram",
        props: {
            visible: Boolean,
            processInstanceId: String,
            processDefinitionId: String,
            endTime: String
        },
        model: {
            prop: "visible",
            event: "change"
        },
        data(){
            return {
                processDiagramView: this.visible
            }
        },
        computed: {
            processDiagramSrc(){
                return `http://localhost:7008?processInstanceId=${this.processInstanceId||''}&processDefinitionId=${this.processDefinitionId||''}&endTime=${this.endTime||''}`;
            }
        },
        watch: {
            visible(v){
                this.processDiagramView = v;
            },
            processDiagramView(v){
                this.$emit("change", v);
            }
        }
    }
</script>

<style scoped>

</style>