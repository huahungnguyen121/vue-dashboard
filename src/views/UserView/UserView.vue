<template>
    <div class="layout fluid gutter--xl">
        <va-card>
            <va-card-content>
                <div class="mb-2 d-flex justify--end">
                    <va-popover
                        message="Create user"
                        :hover-out-timeout="0"
                        placement="left"
                    >
                        <va-button icon="add" :to="{ name: 'signup' }" />
                    </va-popover>
                </div>
                <va-inner-loading :loading="loading">
                    <div
                        v-if="pagination.totalPages === 0"
                        class="d-flex justify--center my-4"
                        style="width: 100%"
                    >
                        No data
                    </div>
                    <div v-else class="va-table-responsive">
                        <table
                            class="va-table va-table--hoverable"
                            style="width: 100%"
                        >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th style="text-align: right">
                                        Created at
                                    </th>
                                    <th style="text-align: right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(user, index) in users"
                                    :key="user.id"
                                >
                                    <td>
                                        {{
                                            (pagination.page - 1) *
                                                pagination.pageSize +
                                            index +
                                            1
                                        }}
                                    </td>
                                    <td>{{ user.username }}</td>
                                    <td style="text-align: right">
                                        {{
                                            moment(user.createdAt).format(
                                                "ddd, MMM Do YYYY, hh:mm:ss A"
                                            )
                                        }}
                                    </td>
                                    <td style="text-align: right">
                                        <va-popover
                                            message="Edit"
                                            :hover-out-timeout="0"
                                            placement="right"
                                        >
                                            <va-button
                                                icon="edit"
                                                flat
                                                @click="showModal(user)"
                                            />
                                        </va-popover>
                                        <va-popover
                                            message="Delete"
                                            :hover-out-timeout="0"
                                            placement="right"
                                        >
                                            <va-button
                                                icon="delete"
                                                color="danger"
                                                flat
                                                :disabled="
                                                    user.username ===
                                                    usernameInStorage
                                                "
                                                @click="
                                                    showConfirmModel(() =>
                                                        handleSubmitDelete(user)
                                                    )
                                                "
                                            />
                                        </va-popover>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-4 d-flex justify--end">
                        <va-pagination
                            :visible-pages="5"
                            v-model="pagination.page"
                            :pages="pagination.totalPages"
                            boundary-numbers
                            :page-size="pagination.pageSize"
                            flat
                        />
                    </div>
                </va-inner-loading>
            </va-card-content>
        </va-card>
    </div>
    <va-modal v-model="isModalShow" no-padding no-dismiss>
        <template #content>
            <va-card-title> Edit User </va-card-title>
            <va-card-content>
                <div class="form-label mb-2">Username</div>
                <va-input
                    class="mb-4"
                    v-model="selectedUser.username"
                    placeholder="Username"
                />
                <div class="form-label mb-2">Created date</div>
                <Datepicker v-model="selectedUser.createdAt"></Datepicker>
            </va-card-content>
            <va-card-actions align="between">
                <va-button @click="showConfirmModel(handleSubmitEdit)">
                    Submit
                </va-button>
                <va-button @click="showModal" flat> Cancel </va-button>
            </va-card-actions>
        </template>
    </va-modal>
    <va-modal v-model="isConfirmModalShow" no-padding no-dismiss>
        <template #content>
            <va-card-title> Confirm </va-card-title>
            <va-card-content> Please confirm your action </va-card-content>
            <va-card-actions align="between">
                <va-button @click="showConfirmModel"> Confirm </va-button>
                <va-button
                    @click="isConfirmModalShow = !isConfirmModalShow"
                    flat
                >
                    Cancel
                </va-button>
            </va-card-actions>
        </template>
    </va-modal>
</template>
<script>
import _ from "lodash";
import moment from "moment";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import httpService from "../../services/http-service.js";
import { getStorage } from "../../utils/local-storage.js";

export default {
    components: {
        Datepicker,
    },
    setup() {
        const usernameInStorage = getStorage("user")?.username;

        return { moment, usernameInStorage };
    },
    data() {
        return {
            loading: false,
            pagination: {
                page: 1,
                totalPages: 0,
                pageSize: 5,
            },
            isModalShow: false,
            isConfirmModalShow: false,
            confirmFunction: null,
            selectedUser: null,
            users: [],
        };
    },
    watch: {
        "pagination.page": {
            handler() {
                this.fetchData();
            },
        },
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                const res = await httpService.get(
                    `/users?page=${this.pagination.page}&limit=${this.pagination.pageSize}`
                );
                if (res.status === 200) {
                    this.users =
                        res?.data?.data?.users?.map((user) => {
                            return {
                                id: user._id,
                                username: user.username,
                                createdAt: new Date(user.createdDate),
                            };
                        }) || [];

                    this.pagination.totalPages =
                        res?.data?.metadata?.totalPages || 0;
                }
            } catch (err) {
                if (
                    err.response.status === 500 ||
                    err.response.status === 401 ||
                    err.response.status === 400
                ) {
                    alert(
                        err.response.status === 401 ||
                            err.response.status === 400
                            ? "Please login before accessing data on this page"
                            : err.response.data.message
                    );
                } else {
                    alert("Something went wrong!");
                    console.error(err);
                }
            }
            this.loading = false;
        },
        showModal(user) {
            this.selectedUser = this.isModalShow ? null : _.cloneDeep(user);
            this.isModalShow = !this.isModalShow;
        },
        showConfirmModel(confirmFunction) {
            if (this.confirmFunction !== null) {
                this.confirmFunction();
                this.confirmFunction = null;
            } else {
                this.confirmFunction = this.isConfirmModalShow
                    ? null
                    : confirmFunction;
            }
            this.isConfirmModalShow = !this.isConfirmModalShow;
        },
        async handleSubmitEdit() {
            try {
                const res = await httpService.patch("/users", {
                    id: this.selectedUser.id,
                    username: this.selectedUser.username,
                    createdDate: this.selectedUser.createdAt.toString(),
                });
                if (res.status === 200) {
                    alert("Edit user successfully");
                    this.fetchData();
                    this.showModal();
                }
            } catch (err) {
                console.log(err);
                if (
                    err.response.status === 500 ||
                    err.response.status === 400
                ) {
                    alert(err.response.data.message);
                } else {
                    alert("Something went wrong!");
                    console.error(err);
                }
            }
        },
        async handleSubmitDelete(user) {
            try {
                const res = await httpService.delete("/users", {
                    data: {
                        id: user.id,
                    },
                });
                if (res.status === 204) {
                    alert("Delete user successfully");
                    this.fetchData();
                }
            } catch (err) {
                console.log(err);
                if (
                    err.response.status === 500 ||
                    err.response.status === 400
                ) {
                    alert(err.response.data.message);
                } else {
                    alert("Something went wrong!");
                    console.error(err);
                }
            }
        },
    },
};
</script>
<style scoped>
.form-label {
    user-select: none;
    -webkit-user-select: none;
    color: var(--va-primary);
    font-weight: 550;
    text-transform: uppercase;
    font-size: 0.7rem;
}
</style>
