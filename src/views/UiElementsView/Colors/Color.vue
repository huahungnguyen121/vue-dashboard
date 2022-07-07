<template>
    <div class="color-display">
        <va-popover
            color="info"
            placement="right"
            message="Click to copy the color to clipboard"
            :hover-out-timeout="0"
        >
            <div
                class="color-illustration"
                :class="{ 'color-illustration--square': square }"
                :style="computeStyle"
                @click="copyColor"
            ></div>
        </va-popover>
        <div class="color-details">
            <div class="color-name">{{ name }}</div>
            <div class="color-description">{{ description }}</div>
        </div>
        <input type="hidden" ref="hiddenInput" :value="computeColor" />
    </div>
</template>
<script>
import { useColors } from "vuestic-ui";

export default {
    props: {
        color: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        variant: {
            type: Array,
            default: () => [],
        },
        description: {
            type: String,
            default: "",
        },
        square: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        return {
            useColors,
        };
    },
    computed: {
        computeColor() {
            const { getColor, getGradientBackground } = useColors();

            const colorComputed = getColor(this.color);
            if (this.variant.includes("gradient")) {
                return getGradientBackground(colorComputed);
            }
            return colorComputed;
        },
        computeStyle() {
            const computeFilter = () => {
                if (this.variant.includes("hovered")) {
                    return "brightness(115%)";
                }
                if (this.variant.includes("pressed")) {
                    return "brightness(85%)";
                }
            };
            return {
                background: this.computeColor,
                filter: computeFilter(),
            };
        },
    },
    methods: {
        copyColor() {
            navigator.clipboard
                .writeText(this.$refs.hiddenInput.value)
                .then(this.notify("The color's copied to your clipboard"))
                .catch((err) => {
                    console.log(err);
                    this.notify(
                        "Failed to copy color to your clipboard",
                        "danger"
                    );
                });
        },
        notify(msg, color) {
            const toastColor = color ?? "primary";
            this.$vaToast.init({
                message: msg,
                position: "bottom-right",
                closeable: false,
                duration: 2000,
                color: toastColor,
            });
        },
    },
};
</script>
<style scoped>
.color-display {
    display: flex;
    align-items: center;
    margin-bottom: 1.125rem;
}
.color-illustration {
    width: 150px;
    height: 40px;
    margin-right: 1rem;
    cursor: pointer;
}

.color-illustration--square {
    width: 40px;
}

.color-details {
    margin-left: 1rem;
}
</style>
