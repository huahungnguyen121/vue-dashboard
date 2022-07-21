export default [
    {
        path: "forms/form-elements",
        name: "formElements",
        component: () =>
            import("../../views/FormsView/FormElements/FormElementsView.vue"),
    },
    {
        path: "forms/medium-editor",
        name: "mediumEditor",
        component: () =>
            import("../../views/FormsView/MediumEditor/MediumEditorView.vue"),
    },
];
