<template>
    <v-container fill-height fluid>
        <v-layout align-center>
            <v-card class="pa-6 mx-auto" width="65%" style="border: 1px solid lightgray">
                <v-card-title class="text-h4">Login</v-card-title>
                <v-card-text>
                    <v-text-field v-model="userID" label="ID" required></v-text-field>

                    <v-text-field v-model="userPasword" label="PASSWORD" required></v-text-field>
                </v-card-text>
                <v-card-actions class="pa-4">
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="validate"> Login </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            userID: "",
            userPasword: "",
        };
    },
    methods: {
        validate() {
            if (this.userID === "test" && this.userPasword === "test") {
                localStorage.setItem("isLogin", "true");
                this.$router.push("/");
            } else {
                alert("로그인 실패");
            }
        },
    },
};
</script>
