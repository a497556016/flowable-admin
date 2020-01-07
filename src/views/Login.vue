<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>登录</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>
                            <v-card-text>
                                <v-form
                                        ref="form"
                                        v-model="valid"
                                        :lazy-validation="lazy"
                                >
                                    <v-text-field
                                            label="用户名"
                                            v-model="accountInfo.username"
                                            :counter="16"
                                            :rules="rules.username"
                                            prepend-icon="mdi-account"
                                            type="text"
                                            required
                                    />

                                    <v-text-field
                                            label="密码"
                                            v-model="accountInfo.password"
                                            :counter="16"
                                            :rules="rules.password"
                                            prepend-icon="mdi-eye"
                                            type="password"
                                            required
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn :disabled="!valid" color="primary" @click="validate">登录</v-btn>
                                <v-btn color="error" class="mr-4" @click="reset">重置</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import userAccount from "@/api/userAccount";
    import { mapActions } from "vuex";
    import moduleTypes from "../store/types";
    export default {
        name: "Login",
        data(){
            return {
                accountInfo: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        v => !!v || "用户名不能为空！",
                        v => v.length <= 16 || "最大长度不超过16！"
                    ],
                    password: [
                        v => !!v || "密码不能为空！"
                    ]
                },
                valid: true,
                lazy: false,
            }
        },
        methods: {
            ...mapActions({
                setFullUserInfo: moduleTypes.userAccount.setFullUserInfo
            }),
            login() {
                this.sending = true;
                userAccount
                    .login(this.accountInfo.username, this.accountInfo.password)
                    .then(async data => {
                        this.sending = false;
                        console.log(this.$store);
                        await this.setFullUserInfo({
                            username: this.accountInfo.username,
                            accessToken: data
                        });
                        // this.$dialog.alert("登录成功！");
                        await this.$router.push("/");
                    })
                    .catch(err => {
                        this.sending = false;
                    });
            },
            validate () {
                if (this.$refs.form.validate()) {
                    this.login();
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        }
    }
</script>
