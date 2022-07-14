<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12 lg6">
                <va-card class="mb-4">
                    <va-list>
                        <va-list-label color="dark">
                            {{ $t("lists.customers") }}
                        </va-list-label>
                        <template
                            v-for="(customer, index) in customers"
                            :key="customer"
                        >
                            <va-list-item
                                @click="displayNotification(customer)"
                            >
                                <va-list-item-section class="ml-2" avatar>
                                    <va-avatar>
                                        <img :src="customer.img" />
                                    </va-avatar>
                                </va-list-item-section>

                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ customer.name }}
                                    </va-list-item-label>

                                    <va-list-item-label caption>
                                        {{ customer.address }}
                                    </va-list-item-label>
                                </va-list-item-section>

                                <va-list-item-section icon>
                                    <va-icon
                                        name="remove_red_eye"
                                        color="gray"
                                    />
                                </va-list-item-section>
                            </va-list-item>
                            <va-list-separator
                                v-if="index !== customers.length - 1"
                            />
                        </template>
                    </va-list>
                </va-card>
                <va-card>
                    <va-list>
                        <va-list-label color="dark">
                            {{ $t("lists.recentMessages") }}
                        </va-list-label>
                        <template
                            v-for="(customer, index) in customers"
                            :key="customer"
                        >
                            <va-list-item @click="toggleStar(customer)">
                                <va-list-item-section icon>
                                    <va-icon
                                        name="star"
                                        color="warning"
                                        v-if="customer.hasStar"
                                        :size="19"
                                    />
                                </va-list-item-section>

                                <va-list-item-section class="ml-2" avatar>
                                    <va-avatar>
                                        <img :src="customer.img" />
                                    </va-avatar>
                                </va-list-item-section>

                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ customer.name }}
                                    </va-list-item-label>
                                </va-list-item-section>

                                <va-list-item-section icon>
                                    <va-icon
                                        :name="
                                            customer.isMale ? 'male' : 'female'
                                        "
                                        :style="{
                                            color: customer.isMale
                                                ? 'blue'
                                                : 'pink',
                                        }"
                                    />
                                </va-list-item-section>
                            </va-list-item>
                            <va-list-separator
                                v-if="index !== customers.length - 1"
                            />
                        </template>
                        <va-list-separator spaced />
                        <va-list-label color="gray">
                            {{ $t("lists.archieved") }}
                        </va-list-label>
                        <template
                            v-for="(person, index) in archived"
                            :key="person"
                        >
                            <va-list-item>
                                <va-list-item-section icon>
                                </va-list-item-section>

                                <va-list-item-section class="ml-2" avatar>
                                    <va-avatar>
                                        <img :src="person.img" />
                                    </va-avatar>
                                </va-list-item-section>

                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ person.name }}
                                    </va-list-item-label>
                                </va-list-item-section>
                            </va-list-item>
                            <va-list-separator
                                v-if="index !== archived.length - 1"
                            />
                        </template>
                    </va-list>
                </va-card>
            </div>
            <div class="flex xs12 lg6">
                <va-card class="mb-4">
                    <va-list>
                        <va-list-label color="dark">
                            {{ $t("lists.starterKit") }}
                        </va-list-label>
                        <template v-for="item in starterKit" :key="item">
                            <va-list-item class="ml-2">
                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ item.title }}
                                    </va-list-item-label>

                                    <va-list-item-label caption>
                                        {{ item.description }}
                                    </va-list-item-label>
                                </va-list-item-section>
                            </va-list-item>
                        </template>
                        <va-list-separator spaced />
                        <va-list-label color="dark">
                            {{ $t("lists.notifications") }}
                        </va-list-label>
                        <template
                            v-for="setting in notificationSettings"
                            :key="setting"
                        >
                            <va-list-item>
                                <va-checkbox
                                    class="mr-2"
                                    v-model="setting.enable"
                                />

                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ setting.title }}
                                    </va-list-item-label>

                                    <va-list-item-label caption>
                                        {{ setting.description }}
                                    </va-list-item-label>
                                </va-list-item-section>
                            </va-list-item>
                        </template>
                    </va-list>
                </va-card>
                <va-card>
                    <va-list>
                        <va-list-label color="dark">
                            {{ $t("lists.routerSupport") }}
                        </va-list-label>
                        <template v-for="route in routes" :key="route">
                            <va-list-item class="ml-2" :to="route.href">
                                <va-list-item-section icon>
                                    <va-icon
                                        :class="route.icon"
                                        color="danger"
                                    />
                                </va-list-item-section>

                                <va-list-item-section>
                                    <va-list-item-label>
                                        {{ route.name }}
                                    </va-list-item-label>
                                </va-list-item-section>
                            </va-list-item>
                        </template>
                    </va-list>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            customers: [
                {
                    name: "Marcia Neal",
                    address: "642 Overbaugh Place, Loretto, Rhode Island, 3756",
                    img: "https://randomuser.me/api/portraits/women/1.jpg",
                    isMale: false,
                    hasStar: true,
                },
                {
                    name: "Corrine Oliver",
                    address: "532 Colin Place, Talpa, Connecticut, 7461",
                    img: "https://randomuser.me/api/portraits/women/2.jpg",
                    isMale: false,
                    hasStar: false,
                },
                {
                    name: "Tucker Kaufman",
                    address: "887 Winthrop Street, Tryon, Florida, 3912",
                    img: "https://randomuser.me/api/portraits/men/1.jpg",
                    isMale: true,
                    hasStar: true,
                },
                {
                    name: "Daisy Kramer",
                    address: "821 Louise Terrace, Waterview, Indiana, 6960",
                    img: "https://randomuser.me/api/portraits/women/3.jpg",
                    isMale: false,
                    hasStar: false,
                },
                {
                    name: "Mindy Potts",
                    address: "418 Broadway , Whitehaven, New York, 7690",
                    img: "https://randomuser.me/api/portraits/women/4.jpg",
                    isMale: false,
                    hasStar: false,
                },
            ],
            archived: [
                {
                    name: "Dotson Franks",
                    img: "https://randomuser.me/api/portraits/men/2.jpg",
                },
                {
                    name: "Audrey Clay",
                    img: "https://randomuser.me/api/portraits/women/5.jpg",
                },
                {
                    name: "Aguirre Klein",
                    img: "https://randomuser.me/api/portraits/men/3.jpg",
                },
            ],
            starterKit: [
                {
                    title: "Add profile images",
                    description: "You can use PNG or JPG files.",
                },
                {
                    title: "Invite friends",
                    description:
                        "You can send invitations via email or any messenger.",
                },
            ],
            notificationSettings: [
                {
                    title: "Application Banners",
                    description:
                        "You can send invitations via email or any messenger.",
                    enable: false,
                },
                {
                    title: "Banners",
                    description:
                        "You can send invitations via email or any messenger.",
                    enable: false,
                },
                {
                    title: "Midnight Notifications",
                    description: "",
                    enable: true,
                },
            ],
            routes: [
                {
                    name: "Google Maps",
                    icon: "fa fa-google",
                    href: "/maps/google-maps",
                },
                {
                    name: "Yandex Maps",
                    icon: "fa fa-map",
                    href: "/maps/yandex-maps",
                },
                {
                    name: "Leaflet Maps",
                    icon: "fa fa-map-marker",
                    href: "/maps/leaflet-maps",
                },
            ],
        };
    },
    methods: {
        toggleStar(item) {
            if (item.hasStar !== undefined) item.hasStar = !item.hasStar;
        },
        displayNotification(item) {
            this.$vaToast.init({
                message: `Clicked ${item?.name}`,
                position: "bottom-right",
                duration: 2000,
                color: "primary",
            });
        },
    },
};
</script>

<style scoped>
/* override css */
.va-list-item:focus {
    outline: none !important;
}
</style>
