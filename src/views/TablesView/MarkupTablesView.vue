<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card :title="$t('tables.basic')">
                    <va-card-content>
                        <div class="table-wrapper">
                            <table class="va-table" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>
                                            {{ $t("tables.headings.name") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.email") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.country") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.status") }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row in table1Data" :key="row.id">
                                        <td>{{ row.name }}</td>
                                        <td>{{ row.email }}</td>
                                        <td>{{ row.country }}</td>
                                        <td>
                                            <va-badge>
                                                {{ row.status }}
                                            </va-badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card :title="$t('tables.stripedHoverable')">
                    <va-card-content>
                        <div class="table-wrapper">
                            <table
                                class="va-table va-table--striped va-table--hoverable"
                                style="width: 100%"
                            >
                                <thead>
                                    <tr>
                                        <th>
                                            {{ $t("tables.headings.name") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.email") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.country") }}
                                        </th>
                                        <th>
                                            {{ $t("tables.headings.status") }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row in table1Data" :key="row.id">
                                        <td>{{ row.name }}</td>
                                        <td>{{ row.email }}</td>
                                        <td>{{ row.country }}</td>
                                        <td>
                                            <va-badge>
                                                {{ row.status }}
                                            </va-badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import data from "@/data/markup-tables/data.json";

export default {
    setup() {
        let table1Data = data.splice(0, 8);
        return {
            table1Data,
        };
    },
};
</script>
<style>
.table-wrapper {
    overflow: auto;
}
</style>
