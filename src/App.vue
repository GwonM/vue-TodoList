<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center logo" @click="ClickHandler">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />
                <span class="text-h4">TODO</span>
            </div>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    methods: {
        ClickHandler() {
            if (this.$route.path !== "/") this.$router.push("/").catch(() => {});
        },
    },
};
</script>

<style scoped>
.logo {
    cursor: pointer;
}
</style>
