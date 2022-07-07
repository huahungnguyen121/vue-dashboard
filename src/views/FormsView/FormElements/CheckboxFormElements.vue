<template>
    <div class="flex xs12">
        <va-card :title="$t('forms.controls.title')">
            <va-card-content>
                <form>
                    <div class="row">
                        <div class="flex md3">
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[0]"
                                :label="$t('forms.controls.unselected')"
                            />
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[1]"
                                :label="$t('forms.controls.selected')"
                            />
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[2]"
                                :label="$t('forms.controls.readonly')"
                            />
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[3]"
                                :label="$t('forms.controls.disabled')"
                                disabled
                            />
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[4]"
                                :label="$t('forms.controls.error')"
                                error
                            />
                            <va-checkbox
                                class="mb-2"
                                v-model="checkboxes[5]"
                                :label="$t('forms.controls.errorMessage')"
                            />
                        </div>
                        <div class="flex md3">
                            <va-radio
                                v-for="(option, index) in radioOptions"
                                :key="index"
                                v-model="selectedRadio"
                                :option="option"
                                :label="$t('forms.controls.radio')"
                            />
                            <va-radio
                                v-model="selectedDisabledRadio"
                                option="1"
                                :label="$t('forms.controls.radioDisabled')"
                                disabled
                            />
                            <va-radio
                                v-model="selectedDisabledRadio"
                                option="2"
                                :label="$t('forms.controls.radioDisabled')"
                                disabled
                            />
                        </div>
                        <div class="flex mb3">
                            <va-switch
                                class="mr-3"
                                v-model="toggles.selected"
                                label="Selected toggle"
                            />
                            <va-switch
                                class="mr-3"
                                v-model="toggles.unselected"
                                label="Unselected toggle"
                            />
                            <va-switch
                                class="mr-3"
                                v-model="toggles.disabled"
                                label="Disabled toggle"
                            />
                            <va-switch
                                class="mr-3"
                                v-model="toggles.small"
                                size="small"
                                label="Small toggle"
                            />
                            <va-switch
                                class="mr-3"
                                v-model="toggles.large"
                                size="large"
                                label="Large toggle"
                            />
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
            checkboxes: [false, true, true, true, false, true],
            radioOptions: ["1", "2"],
            selectedRadio: "1",
            selectedDisabledRadio: "1",
            toggles: {
                selected: true,
                unselected: false,
                disabled: true,
                small: true,
                large: true,
            },
        };
    },
};
</script>
