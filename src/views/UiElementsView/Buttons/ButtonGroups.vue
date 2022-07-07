<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.buttonGroups") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex xs12 xl6">
                    <va-button-group
                        color="secondary"
                        text-color="white"
                        size="large"
                    >
                        <va-button>One</va-button>
                        <va-button>Two</va-button>
                        <va-button>Three</va-button>
                    </va-button-group>
                </div>
                <div class="flex xs12 xl6">
                    <va-button-group color="danger" outline>
                        <va-button icon="palette">One</va-button>
                        <va-button>Two</va-button>
                        <va-button>Three</va-button>
                    </va-button-group>
                </div>
                <div class="flex xs12 xl6">
                    <va-button-group color="gray" flat>
                        <va-button icon="mail">One</va-button>
                        <va-button icon="person">Two</va-button>
                        <va-button icon="alarm">Three</va-button>
                    </va-button-group>
                </div>
                <div class="flex xs12 xl6">
                    <va-button-group color="dark">
                        <va-button>One</va-button>
                        <va-button>Two</va-button>
                        <va-button>Three</va-button>
                        <va-button icon="expand_more"> </va-button>
                    </va-button-group>
                </div>
                <div class="flex xs12 xl6">
                    <va-button-group size="large" outline>
                        <va-button>One</va-button>
                        <va-button icon-right="edit">Two</va-button>
                        <va-button>Three</va-button>
                    </va-button-group>
                </div>
                <div class="flex xs12 xl6">
                    <va-button-group color="warning" size="small" flat>
                        <va-button icon="mail"> </va-button>
                        <va-button icon="person"> </va-button>
                        <va-button icon="alarm"> </va-button>
                    </va-button-group>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script></script>
