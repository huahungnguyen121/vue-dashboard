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
import FileUploadViewVue from "../views/UiElementsView/FileUpload/FileUploadView.vue";
import GridViewVue from "../views/UiElementsView/Grid/GridView.vue";
import IconsViewVue from "../views/UiElementsView/Icons/IconsView.vue";
import IconsSetViewVue from "../views/UiElementsView/Icons/IconsSetView.vue";
import ListsViewVue from "../views/UiElementsView/Lists/ListsView.vue";
import ModalsViewVue from "../views/UiElementsView/Modals/ModalsView.vue";
import NotificationsViewVue from "../views/UiElementsView/Notifications/NotificationsView.vue";
import PopoversViewVue from "../views/UiElementsView/Popovers/PopoversView.vue";
import RatingViewVue from "../views/UiElementsView/Rating/RatingView.vue";
import SlidersViewVue from "../views/UiElementsView/Sliders/SlidersView.vue";
import SpacingViewVue from "../views/UiElementsView/Spacing/SpacingView.vue";
import SpinnersViewVue from "../views/UiElementsView/Spinners/SpinnersView.vue";

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
            path: "/ui-elements/file-upload",
            name: "fileUpload",
            component: FileUploadViewVue,
        },
        {
            path: "/ui-elements/grid",
            name: "grid",
            component: GridViewVue,
        },
        {
            path: "/ui-elements/icons",
            name: "icons",
            component: IconsViewVue,
        },
        {
            path: "/ui-elements/icons/:set",
            name: "icons-set",
            component: IconsSetViewVue,
        },
        {
            path: "/ui-elements/lists",
            name: "lists",
            component: ListsViewVue,
        },
        {
            path: "/ui-elements/modals",
            name: "modals",
            component: ModalsViewVue,
        },
        {
            path: "/ui-elements/notifications",
            name: "notifications",
            component: NotificationsViewVue,
        },
        {
            path: "/ui-elements/popovers",
            name: "popovers",
            component: PopoversViewVue,
        },
        {
            path: "/ui-elements/rating",
            name: "rating",
            component: RatingViewVue,
        },
        {
            path: "/ui-elements/sliders",
            name: "sliders",
            component: SlidersViewVue,
        },
        {
            path: "/ui-elements/spacing",
            name: "spacing",
            component: SpacingViewVue,
        },
        {
            path: "/ui-elements/spinners",
            name: "spinners",
            component: SpinnersViewVue,
        },
        {
            path: "/pages/404-pages",
            name: "404-pages",
            component: NotFoundViewVue,
        },
        {
            path: "/:pathMatch(.*)*", // Page Not Found
            name: "notfound",
            redirect: { name: "dashboard" }, // Redirect to home page
        },
    ],
});

export default router;
