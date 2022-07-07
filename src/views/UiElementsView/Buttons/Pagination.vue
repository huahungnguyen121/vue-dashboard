<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.pagination") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex xs12 xl6">
                    <va-pagination
                        v-model="value"
                        :pages="pageLimitStep * 4"
                        :visible-pages="visiblePage - 2"
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-pagination
                        v-model="value"
                        :pages="pageLimitStep * 3"
                        :visible-pages="visiblePage - 1"
                        color="danger"
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-pagination
                        v-model="value"
                        :pages="pageLimitStep * 1"
                        :visible-pages="visiblePage"
                        disabled
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-pagination
                        v-model="value"
                        :pages="pageLimitStep * 2"
                        :visible-pages="visiblePage - 2"
                        color="success"
                    />
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 4,
            visiblePage: 5,
            pageLimitStep: 5,
        };
    },
};
</script>
