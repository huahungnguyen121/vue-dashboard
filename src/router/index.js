import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView/DashboardView.vue";
import ChartsView from "../views/StatisticsView/ChartsView.vue";
import NotFoundViewVue from "../views/NotFoundView/NotFoundView.vue";
import ProgressBarsViewVue from "../views/StatisticsView/ProgressBarsView.vue";
import FormElementsViewVue from "../views/FormsView/FormElements/FormElementsView.vue";
import MediumEditorViewVue from "../views/FormsView/MediumEditor/MediumEditorView.vue";
import ButtonsViewVue from "../views/UiElementsView/Buttons/ButtonsView.vue";
import MarkupTablesViewVue from "../views/TablesView/MarkupTablesView.vue";
import CardsViewVue from "../views/UiElementsView/Cards/CardsView.vue";
import ChatViewVue from "../views/UiElementsView/Chat/ChatView.vue";
import ChipsViewVue from "../views/UiElementsView/Chips/ChipsView.vue";
import CollapsesViewVue from "../views/UiElementsView/Collapses/CollapsesView.vue";
import ColorsViewVue from "../views/UiElementsView/Colors/ColorsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/statistics/charts",
            name: "charts",
            component: ChartsView,
        },
        {
            path: "/statistics/progress-bars",
            name: "progressBars",
            component: ProgressBarsViewVue,
        },
        {
            path: "/forms/form-elements",
            name: "formElements",
            component: FormElementsViewVue,
        },
        {
            path: "/forms/medium-editor",
            name: "mediumEditor",
            component: MediumEditorViewVue,
        },
        {
            path: "/tables/markup-tables",
            name: "markupTables",
            component: MarkupTablesViewVue,
        },
        {
            path: "/ui-elements/buttons",
            name: "buttons",
            component: ButtonsViewVue,
        },
        {
            path: "/ui-elements/cards",
            name: "cards",
            component: CardsViewVue,
        },
        {
            path: "/ui-elements/chat",
            name: "chat",
            component: ChatViewVue,
        },
        {
            path: "/ui-elements/chips",
            name: "chips",
            component: ChipsViewVue,
        },
        {
            path: "/ui-elements/collapses",
            name: "collapses",
            component: CollapsesViewVue,
        },
        {
            path: "/ui-elements/colors",
            name: "colors",
            component: ColorsViewVue,
        },
        {
            path: "/:pathMatch(.*)*", // Page Not Found
            name: "notfound",
            component: NotFoundViewVue,
        },
    ],
});

export default router;
