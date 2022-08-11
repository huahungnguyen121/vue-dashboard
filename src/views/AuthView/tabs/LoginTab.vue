<template>
    <form @submit.prevent="onsubmit">
        <va-input
            class="mb-3"
            v-model="email"
            type="email"
            :label="$t('auth.email')"
            :error="!!emailErrors.length"
            :error-messages="emailErrors"
        />

        <va-input
            class="mb-3"
            v-model="password"
            type="password"
            :label="$t('auth.password')"
            :error="!!passwordErrors.length"
            :error-messages="passwordErrors"
        />

        <div class="d-flex align--center justify--space-between">
            <va-checkbox
                v-model="keepLoggedIn"
                class="mb-0"
                :label="$t('auth.keep_logged_in')"
            />
            <router-link class="ml-1 link" :to="{ name: 'dashboard' }">{{
                $t("auth.recover_password")
            }}</router-link>
        </div>

        <div class="d-flex justify--center mt-3">
            <va-button @click="onsubmit" class="my-0">{{
                $t("auth.login")
            }}</va-button>
        </div>
    </form>
</template>
<script>
import httpService from "../../../services/http-service.js";
import { setStorage } from "../../../utils/local-storage.js";

export default {
    data() {
        return {
            email: "",
            password: "",
            keepLoggedIn: false,
            emailErrors: [],
            passwordErrors: [],
        };
    },
    computed: {
        formReady() {
            return !this.emailErrors.length && !this.passwordErrors.length;
        },
    },
    methods: {
        async onsubmit() {
            this.emailErrors = this.email ? [] : ["Email is required"];
            this.passwordErrors = this.password ? [] : ["Password is required"];
            if (!this.formReady) {
                return;
            }

            try {
                const res = await httpService.post("/auth/login", {
                    username: this.email,
                    password: this.password,
                });

                if (res.status === 200) {
                    setStorage("user", { username: this.email });
                    this.$router.push({ name: "dashboard" }).then(() => {
                        this.$emitter.emit("loggedin", true);
                    });
                }
            } catch (err) {
                if (err.response.status === 400) {
                    alert(err.response.data.message);
                } else {
                    alert("Something went wrong!");
                    console.error(err);
                }
            }
        },
    },
};
</script>
<style></style>
