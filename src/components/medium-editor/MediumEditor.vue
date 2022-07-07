<template>
    <div class="va-medium-editor textfield" ref="editorElement">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import MediumEditor from "medium-editor";

export default defineComponent({
    name: "va-medium-editor",
    props: {
        editorOptions: {
            type: Object,
            default: () => ({
                autoLink: true,
                toolbar: {
                    buttons: [
                        "bold",
                        "italic",
                        "underline",
                        "anchor",
                        "h1",
                        "h2",
                        "h3",
                    ],
                },
            }),
        },
    },
    setup(props, { emit }) {
        const editorElement = ref(null);
        let editor = null;
        onMounted(() => {
            if (!editorElement.value) {
                return;
            }
            editor = new MediumEditor(editorElement.value, props.editorOptions);
            emit("initialized", editor);
        });
        onBeforeUnmount(() => {
            if (editor) {
                editor.destroy();
            }
        });
        return {
            editorElement,
        };
    },
});
</script>

<style>
@import "medium-editor/dist/css/medium-editor.css";

:root {
    --va-medium-editor-margin-bottom: 2.25rem;
    --va-medium-editor-min-width: 6rem;
    --va-medium-editor-max-width: 600px;

    /* Toolbar */
    --va-medium-editor-toolbar-max-width: 90%;
    --va-medium-editor-toolbar-box-shadow: none;
}

.va-medium-editor {
    margin-bottom: var(--va-medium-editor-margin-bottom);
    min-width: var(--va-medium-editor-min-width);
    max-width: var(--va-medium-editor-max-width);
}

.va-medium-editor:focus {
    outline: none;
}

.va-medium-editor.textfield i {
    font-style: italic;
}

.medium-editor-toolbar,
.medium-editor-toolbar-form,
.medium-editor-toolbar-actions,
.medium-editor-toolbar-anchor-preview {
    box-shadow: var(--va-box-shadow);
    background-color: var(--va-divider);
    border-radius: 1.5rem;
    height: 44px;
    line-height: 42px;
}

.medium-editor-toolbar-anchor-preview a {
    padding: 0 2rem;
    margin: 0;
    line-height: 44px;
}
.medium-editor-toolbar {
    box-shadow: var(--va-box-shadow);
}
.medium-editor-toolbar .medium-editor-toolbar-actions {
    overflow: hidden;
    height: 44px;
}
.medium-editor-toolbar .medium-editor-action {
    margin: 0;
    border: 0;
    padding: 0.375rem 1rem;
    height: 44px;
    background-color: var(--va-divider);
    box-shadow: none;
    border-radius: 0;
}
.medium-editor-toolbar .medium-editor-action i {
    color: var(--va-dark);
}
.medium-editor-toolbar .medium-editor-action.medium-editor-button-active {
    background-color: var(--va-primary);
    color: var(--va-white);
}
.medium-editor-toolbar .medium-editor-action.medium-editor-button-active i {
    color: var(--va-white);
}
.medium-editor-toolbar > .medium-editor-action:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
}
.medium-editor-toolbar > .medium-editor-action + .medium-editor-action {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
}

.medium-editor-toolbar-form {
    color: var(--va-dark);
    overflow: hidden;
}

.medium-editor-toolbar-form a {
    color: var(--va-dark);
    transform: translateY(1px);
}
.medium-editor-toolbar-form input {
    margin-left: 4px !important;
    transform: translateY(-2px);
    border-radius: 13px;
}
.medium-editor-toolbar-form .medium-editor-toolbar-close {
    margin-right: 1rem;
}

.medium-toolbar-arrow-under::after {
    border-color: var(--va-divider) transparent transparent transparent;
    top: 100%;
}
.medium-toolbar-arrow-over::before {
    border-color: transparent transparent var(--va-primary) transparent;
}
.medium-editor-toolbar-anchor-preview .medium-editor-toolbar-anchor-preview {
    margin: 0;
}
.medium-editor-anchor-preview {
    max-width: 50%;
}
.medium-editor-anchor-preview a {
    color: var(--va-dark);
    text-decoration: none;
}
</style>
