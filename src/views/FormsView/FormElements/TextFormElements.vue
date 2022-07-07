<template>
    <div class="flex xs12">
        <va-card :title="$t('forms.inputs.title')">
            <va-card-content>
                <form>
                    <div class="row">
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :placeholder="$t('forms.inputs.textInput')"
                            ></va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :placeholder="$t('forms.inputs.inputWithIcon')"
                            >
                                <template #prepend>
                                    <va-icon name="mail" />
                                </template>
                            </va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :placeholder="
                                    $t('forms.inputs.inputWithButton')
                                "
                            >
                                <template #append>
                                    <va-button>{{
                                        $t("forms.inputs.upload")
                                    }}</va-button>
                                </template>
                            </va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :label="
                                    $t('forms.inputs.emailValidatedSuccess')
                                "
                                v-model="email"
                                success
                            ></va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :placeholder="
                                    $t('forms.inputs.inputWithClearButton')
                                "
                                v-model="name"
                            ></va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :label="$t('forms.inputs.emailValidated')"
                                v-model="email"
                                error
                                error-messages="Field should contain a valid email"
                            ></va-input>
                        </div>
                        <div class="flex md4 sm6 xs12">
                            <va-input
                                :placeholder="
                                    $t('forms.inputs.textInputWithDescription')
                                "
                                messages="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            ></va-input>
                        </div>
                    </div>
                </form>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "Vasili Savitski",
            email: "andrei@dreamsupport.io",
        };
    },
};
</script>
<style></style>
