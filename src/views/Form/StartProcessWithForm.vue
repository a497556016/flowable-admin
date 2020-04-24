<template>
    <div>
        <v-card>
            <v-card-title>
                启动流程[{{processDefinitionName}}]
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form v-if="formData">
                    <template v-for="field in formData.fields">
                        <v-select :key="field.id" v-if="field.type === 'dropdown'" :label="field.name" v-model="field.value"
                                  :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                                  :items="field.options.map(option => option.name)"
                                  :placeholder="field.placeholder"
                        ></v-select>
                        <v-menu
                                :key="field.id" v-else-if="field.type === 'date'"
                                v-model="field.show"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="field.value"
                                        :label="field.name"
                                        :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="field.value" @input="field.show = false"></v-date-picker>
                        </v-menu>
                        <v-text-field
                                :key="field.id" v-else-if="field.type === 'integer'" :label="field.name" v-model="field.value"
                                :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                                type="number"
                        ></v-text-field>
                        <v-textarea
                                :key="field.id" v-else-if="field.type === 'multi-line-text'" :label="field.name" v-model="field.value"
                                :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                        ></v-textarea>
                        <v-file-input
                                :key="field.id" v-else-if="field.type === 'upload'" :label="field.name" v-model="field.value"
                                :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                                counter
                                show-size
                        ></v-file-input>
                        <v-text-field
                                :key="field.id" v-else-if="field.type === 'people'" :label="field.name" v-model="field.value"
                                :rules="[v => field.required?!!v||(field.name+'不能为空！'):true]"
                        ></v-text-field>
                    </template>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col cols="6">
                        <v-btn color="primary" block @click="submit">提交</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn block @click="reset">重置</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import moduleTypes from "../../store/types";
    import VSelect from "vuetify/lib/components/VSelect/VSelect";
    export default {
        name: "StartProcessWithForm",
        components: {VSelect},
        data(){
            const processDefinition = this.$router.currentRoute.query;
            return {
                processDefinitionId: processDefinition.id,
                processDefinitionKey: processDefinition.key,
                processDefinitionName: processDefinition.name,
            }
        },
        computed: {
            ...mapGetters({
                formData: moduleTypes.form.getFormData
            })
        },
        mounted() {
            this.loadFormData(this.processDefinitionKey);
        },
        methods: {
            ...mapActions({
                loadFormData: moduleTypes.form.loadFormData,
                startProcessWithForm: moduleTypes.form.startProcessWithForm
            }),
            async submit(){
                const values = {};
                let error = "";
                this.formData.fields.forEach(field => {
                    if(field.required && !field.value) {
                        error += `${field.name}不能为空！<br>`;
                        return;
                    }
                    if(field.type !== "headline-with-line") {
                        values[field.id] = field.value;
                    }
                });
                if(error) {
                    this.$alert(error)
                    return;
                }
                console.log(values);
                await this.startProcessWithForm({
                    processDefinitionKey: this.processDefinitionKey,
                    formModel: this.formData
                });
                this.$notify({
                    message: "流程已启动完成！"
                })
            },
            reset(){
                this.formData.fields.forEach(field => field.value = null);
            }
        }
    }
</script>

<style scoped>

</style>