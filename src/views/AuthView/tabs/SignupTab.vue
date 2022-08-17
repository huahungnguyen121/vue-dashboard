<template>
    <form @submit.prevent="onsubmit()">
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
                v-model="agreedToTerms"
                class="mb-0"
                :error="!!agreedToTermsErrors.length"
                :errorMessages="agreedToTermsErrors"
            >
                <template #label>
                    <span class="ml-1">
                        {{ $t("auth.agree") }}
                        <span class="link">{{ $t("auth.termsOfUse") }}</span>
                    </span>
                </template>
            </va-checkbox>
            <router-link class="ml-1 link" :to="{ name: 'dashboard' }">
                {{ $t("auth.recover_password") }}
            </router-link>
        </div>

        <div class="d-flex justify--center mt-3">
            <va-button @click="onsubmit" class="my-0">{{
                $t("auth.sign_up")
            }}</va-button>
        </div>
    </form>
</template>
<script>
import httpService from "../../../services/http-service.js";

export default {
    data() {
        return {
            email: "",
            password: "",
            agreedToTerms: false,
            emailErrors: [],
            passwordErrors: [],
            agreedToTermsErrors: [],
        };
    },
    methods: {
        resetForm() {
            this.email = "";
            this.password = "";
            this.agreedToTerms = false;
            this.emailErrors = [];
            this.passwordErrors = [];
            this.agreedToTermsErrors = [];
        },
        async onsubmit() {
            this.emailErrors = this.email ? [] : ["Email is required"];
            this.passwordErrors = this.password ? [] : ["Password is required"];
            this.agreedToTermsErrors = this.agreedToTerms
                ? []
                : ["You must agree to the terms of use to continue"];
            if (!this.formReady) {
                return;
            }
            try {
                const res = await httpService.post("/auth/register", {
                    username: this.email,
                    password: this.password,
                });

                if (res.status === 201) {
                    this.resetForm();
                    alert(res.data.message);
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
    computed: {
        formReady() {
            return !(
                this.emailErrors.length ||
                this.passwordErrors.length ||
                this.agreedToTermsErrors.length
            );
        },
    },
};
</script>
<style></style>
