<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex lg6 xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("treeView.basic") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tree-root>
                            <va-tree-category label="Electronics">
                                <va-tree-node>Cellphones</va-tree-node>
                                <va-tree-node>Camera Body Kits</va-tree-node>
                                <va-tree-node>External HDDs</va-tree-node>
                            </va-tree-category>
                            <va-tree-category isOpen label="Products">
                                <va-tree-category label="Cables">
                                    <va-tree-node>Audio</va-tree-node>
                                    <va-tree-node>Video</va-tree-node>
                                    <va-tree-node>Optical</va-tree-node>
                                </va-tree-category>
                                <va-tree-node>Monitors</va-tree-node>
                                <va-tree-node>Keyboards</va-tree-node>
                            </va-tree-category>
                            <va-tree-category label="Apparel">
                                <va-tree-node>Jackets</va-tree-node>
                                <va-tree-node>Pants</va-tree-node>
                                <va-tree-node>Skirts</va-tree-node>
                            </va-tree-category>
                        </va-tree-root>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex lg6 xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("treeView.icons") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tree-root>
                            <va-tree-category label="Images" icon="image">
                                <va-tree-node icon="image">
                                    sick_catz_cuddling.jpg
                                </va-tree-node>
                                <va-tree-node icon="image">
                                    pins-and-needles.jpg
                                </va-tree-node>
                                <va-tree-node icon="image">
                                    avatar_50x50.jpg
                                </va-tree-node>
                            </va-tree-category>
                            <va-tree-category
                                label="Music"
                                isOpen
                                icon="star_outline"
                            >
                                <va-tree-node icon="music_note">
                                    Taylor_swift_hello.mp3
                                </va-tree-node>
                                <va-tree-node icon="music_note">
                                    straight_to_the_bank.wav
                                </va-tree-node>
                                <va-tree-node icon="music_note">
                                    imagine_dragons_promo.mp3
                                </va-tree-node>
                            </va-tree-category>
                            <va-tree-category label="Miscellaneous" icon="sort">
                                <va-tree-node icon="grid_on">
                                    dump.sql
                                </va-tree-node>
                                <va-tree-node icon="question_mark">
                                    unknown-file
                                </va-tree-node>
                                <va-tree-node icon="key">
                                    secure.key
                                </va-tree-node>
                            </va-tree-category>
                        </va-tree-root>
                    </va-card-content>
                </va-card>
            </div>
        </div>
        <div class="row">
            <div class="flex lg6 xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("treeView.advanced") }}
                    </va-card-title>
                    <va-card-content>
                        <div class="tree-view-advanced">
                            <div class="tree-view-advanced__buttons">
                                <va-button @click="$refs.treeView.expand()">
                                    EXPAND ALL
                                </va-button>
                                <va-button @click="$refs.treeView.collapse()">
                                    COLLAPSE ALL
                                </va-button>
                            </div>

                            <va-tree-root ref="treeView">
                                <va-tree-category label="Electronics">
                                    <va-tree-node>Cellphones</va-tree-node>
                                    <va-tree-node
                                        >Camera Body Kits</va-tree-node
                                    >
                                    <va-tree-node>External HDDs</va-tree-node>
                                </va-tree-category>
                                <va-tree-category isOpen label="Products">
                                    <va-tree-category label="Cables">
                                        <va-tree-node>Audio</va-tree-node>
                                        <va-tree-node>Video</va-tree-node>
                                        <va-tree-node>Optical</va-tree-node>
                                    </va-tree-category>
                                    <va-tree-node>Monitors</va-tree-node>
                                    <va-tree-node>Keyboards</va-tree-node>
                                </va-tree-category>
                                <va-tree-category label="Apparel">
                                    <va-tree-node>Jackets</va-tree-node>
                                    <va-tree-node>Pants</va-tree-node>
                                    <va-tree-node>Skirts</va-tree-node>
                                </va-tree-category>
                            </va-tree-root>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex lg6 xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("treeView.editable") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tree-root>
                            <va-tree-category label="Electronics">
                                <va-tree-node
                                    v-for="electronic in electronics"
                                    :key="electronic.id"
                                >
                                    <va-input
                                        v-model="electronic.name"
                                        class="mb-0"
                                    />
                                </va-tree-node>
                            </va-tree-category>

                            <va-tree-category isOpen label="Products">
                                <va-tree-node
                                    v-for="product in products"
                                    :key="product.id"
                                >
                                    <div class="flex row align--center">
                                        <va-input
                                            v-model="product.name"
                                            class="mb-0"
                                        />
                                        <va-icon
                                            name="close"
                                            color="info"
                                            class="ml-2 pa-1 shrink"
                                            style="cursor: pointer"
                                            @click="removeProduct(product)"
                                        />
                                    </div>
                                </va-tree-node>
                                <va-tree-node>
                                    <va-button
                                        class="mb-2"
                                        @click="addProduct()"
                                    >
                                        Add new product
                                    </va-button>
                                </va-tree-node>
                            </va-tree-category>
                        </va-tree-root>
                    </va-card-content>
                </va-card>
            </div>
        </div>
        <div class="row">
            <div class="flex lg6 xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("treeView.selectable") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tree-root>
                            <va-tree-category label="Products">
                                <va-tree-node
                                    v-for="product in products"
                                    :key="product.id"
                                >
                                    <template #checkbox>
                                        <va-checkbox
                                            v-model="product.selected"
                                            :label="product.name"
                                        />
                                    </template>
                                </va-tree-node>
                            </va-tree-category>
                            <va-tree-category isOpen label="Electronics">
                                <va-tree-node
                                    v-for="electronic in electronics"
                                    :key="electronic.id"
                                >
                                    <template #checkbox>
                                        <va-checkbox
                                            v-model="electronic.selected"
                                            :label="electronic.name"
                                        />
                                    </template>
                                </va-tree-node>
                            </va-tree-category>
                        </va-tree-root>
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
            electronics: [
                { id: 1, name: "Cellphones", selected: false },
                { id: 2, name: "Camera Body Kits", selected: false },
                { id: 3, name: "External HDDs", selected: false },
            ],
            products: [
                { id: 4, name: "Cables", selected: false },
                { id: 5, name: "Monitors", selected: false },
                { id: 6, name: "Keyboards", selected: false },
            ],
        };
    },
    methods: {
        removeProduct(product) {
            this.products = this.products.filter(
                (element) => element.id !== product.id
            );
        },
        addProduct() {
            this.products.push({
                id: this.products[this.products.length - 1].id + 1,
                name: "New product",
            });
        },
    },
};
</script>
<style scoped>
.tree-view-advanced__buttons {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
}
</style>
