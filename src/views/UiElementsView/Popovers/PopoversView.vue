<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12 md6">
                <va-card>
                    <va-card-title>
                        {{ $t("popovers.popoverStyle") }}
                    </va-card-title>
                    <va-card-content>
                        <va-select
                            class="mb-4"
                            label="color scheme"
                            :options="colors"
                            v-model="popover.color"
                        >
                        </va-select>
                        <va-select
                            class="mb-4"
                            v-model="popover.icon"
                            label="icon (font-awesome)"
                            :options="icons"
                            track-by="icon"
                        >
                        </va-select>
                        <va-input
                            class="mb-4"
                            label="title"
                            v-model="popover.title"
                        />
                        <va-input
                            class="mb-4"
                            label="message"
                            v-model="popover.message"
                        />
                        <va-popover
                            :hover-out-timeout="0"
                            class="mt-3"
                            placement="right"
                            color="warning"
                        >
                            <va-button>
                                {{
                                    $t("notificationsPage.popovers.showPopover")
                                }}
                            </va-button>
                            <template #icon>
                                <va-icon name="print" />
                            </template>

                            <template #title>
                                {{ popover.title }}
                            </template>

                            <template #body>
                                {{ popover.message }}
                            </template>
                        </va-popover>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 md6">
                <va-card>
                    <va-card-title>
                        {{ $t("popovers.popoverPlacement") }}
                    </va-card-title>
                    <va-card-content>
                        <p class="my-2 mx-2">
                            Any text can be used for
                            <va-popover
                                :hover-out-timeout="0"
                                placement="bottom"
                                message="Bottom tooltip"
                            >
                                <a class="link">
                                    {{
                                        $t(
                                            "notificationsPage.popovers.bottomTooltip"
                                        )
                                    }}
                                </a>
                            </va-popover>
                            tooltip showcase. Just anything you can possibly
                            imagine to test
                            <va-popover
                                :hover-out-timeout="0"
                                placement="right"
                                message="Right tooltip"
                            >
                                <a class="link">
                                    {{
                                        $t(
                                            "notificationsPage.popovers.rightTooltip"
                                        )
                                    }}
                                </a>
                            </va-popover>
                            tooltip. But it can appear on the
                            <va-popover
                                :hover-out-timeout="0"
                                placement="left"
                                message="Left tooltip"
                            >
                                <a class="link">
                                    {{
                                        $t(
                                            "notificationsPage.popovers.leftTooltip"
                                        )
                                    }}
                                </a>
                            </va-popover>
                            . Or just
                            <va-popover
                                :hover-out-timeout="0"
                                placement="top"
                                message="Top tooltip"
                            >
                                <a class="link">
                                    {{
                                        $t(
                                            "notificationsPage.popovers.topTooltip"
                                        )
                                    }}
                                </a>
                            </va-popover>
                            the item.
                        </p>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icons: [
                {
                    icon: "print",
                    text: "print",
                },
                {
                    icon: "star",
                    text: "star",
                },
            ],
            colors: ["success", "info", "danger", "warning", "gray", "dark"],
            popover: {
                title: "Hey folks!",
                message: "This tooltip is amazing:D",
                icon: {
                    icon: "print",
                    text: "print",
                },
                color: "warning",
            },
        };
    },
};
</script>
<style></style>
