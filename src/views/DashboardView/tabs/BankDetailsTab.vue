<template>
    <div class="pt-2">
        <div class="row">
            <div class="flex sm12 md6">
                <div class="title mb-3">
                    {{ $t("dashboard.tabs.bankDetails.detailsFields") }}
                </div>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.bankDetails.bankName')"
                    v-model="form.bankName"
                ></va-input>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.bankDetails.accountName')"
                    v-model="form.accountName"
                ></va-input>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.bankDetails.sortCode')"
                    v-model="form.sortCode"
                ></va-input>
            </div>
            <div class="flex sm12 md6">
                <div
                    class="title mb-3"
                    style="color: transparent !important; user-select: none"
                >
                    Padding
                </div>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.bankDetails.accountNumber')"
                    v-model="form.accountNumber"
                ></va-input>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.bankDetails.notes')"
                    v-model="form.notes"
                ></va-input>
            </div>
        </div>
        <div class="row justify--center">
            <va-button>{{
                $t("dashboard.tabs.bankDetails.sendDetails")
            }}</va-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                bankName: "Raiffeisen Bank",
                accountName: "GoalSaver",
                sortCode: "6558912",
                accountNumber: "000876432",
                notes: "",
            },
        };
    },
};
</script>
<style></style>
