<template>
    <div class="row align-content--center">
        <div class="flex xs12 pa-3 flex-center">
            <router-link class="py-5 flex-center" to="/">
                <DashboardLogo height="32" />
            </router-link>
        </div>
        <div class="flex xs12 pa-3">
            <div class="d-flex justify--center">
                <va-card class="auth-view__card">
                    <va-card-content>
                        <va-tabs v-model="tabIndex" center>
                            <template #tabs>
                                <va-tab name="login">
                                    {{ $t("auth.login") }}
                                </va-tab>
                                <va-tab name="signup">
                                    {{ $t("auth.createNewAccount") }}
                                </va-tab>
                            </template>
                        </va-tabs>

                        <va-separator class="ml-0 mr-0" />

                        <div class="pa-3">
                            <router-view />
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import DashboardLogo from "../../components/icons/DashboardLogo.vue";

export default {
    components: {
        DashboardLogo,
    },
    data() {
        return {};
    },
    computed: {
        tabIndex: {
            set(tabName) {
                this.$router.replace({ name: tabName });
            },
            get() {
                return this.$route.name;
            },
        },
    },
};
</script>
<style scoped>
.auth-view__card {
    width: 100%;
    max-width: 600px;
}
</style>
