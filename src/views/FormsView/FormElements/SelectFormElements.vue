<template>
    <div class="flex xs12">
        <va-card :title="$t('forms.selects.title')">
            <va-card-content>
                <form>
                    <div class="row">
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.simple')"
                                v-model="values.simple"
                                :options="simpleOptions"
                            />
                        </div>
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.multi')"
                                v-model="values.multiple"
                                :options="simpleOptions"
                                multiple
                            />
                        </div>
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.country')"
                                v-model="values.country"
                                :options="countriesList"
                            />
                        </div>
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.countryMulti')"
                                v-model="values.multiCountries"
                                :options="countriesList"
                                multiple
                            />
                        </div>
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.searchable')"
                                v-model="values.searchable"
                                :options="simpleOptions"
                                searchable
                            />
                        </div>
                        <div class="flex md6 xs12">
                            <va-select
                                :label="$t('forms.selects.searchableMulti')"
                                v-model="values.searchableMultiCountries"
                                :options="countriesList"
                                searchable
                                multiple
                            />
                        </div>
                    </div>
                </form>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
import countriesList from "../../../data/countriesList";

export default {
    data() {
        return {
            simpleOptions: ["First option", "Second option", "Third option"],
            values: {
                simple: "",
                multiple: "",
                country: "",
                multiCountries: "",
                searchable: "",
                searchableMultiCountries: "",
            },
            countriesList,
        };
    },
};
</script>
<style></style>
