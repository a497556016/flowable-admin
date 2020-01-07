<template>
    <v-dialog v-model="visible">
        <v-card>
            <v-card-text>
                {{message}}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="hide">确认</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Alert",
        data(){
            return {
                visible: false,
                message: null
            }
        },
        methods: {
            show(msg) {
                this.message = msg;
                this.visible = true;
            },
            hide(){
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>