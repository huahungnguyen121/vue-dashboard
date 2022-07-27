<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("fileUpload.advancedMediaGallery") }}
                    </va-card-title>
                    <va-card-content>
                        <va-file-upload
                            :upload-button-text="$t('fileUpload.uploadFile')"
                            v-model="specificTypes"
                            type="gallery"
                            dropzone
                            :drop-zone-text="$t('fileUpload.dragNdropFiles')"
                            file-types=".png, .jpg, .jpeg, .gif"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("fileUpload.advancedUploadList") }}
                    </va-card-title>
                    <va-card-content>
                        <va-file-upload
                            :upload-button-text="$t('fileUpload.uploadFile')"
                            v-model="uploadList"
                            dropzone
                            :drop-zone-text="$t('fileUpload.dragNdropFiles')"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("fileUpload.single") }}
                    </va-card-title>
                    <va-card-content>
                        <va-file-upload
                            :upload-button-text="$t('fileUpload.uploadFile')"
                            v-model="single"
                            type="single"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("fileUpload.mediaGallery") }}
                    </va-card-title>
                    <va-card-content>
                        <va-file-upload
                            :upload-button-text="$t('fileUpload.uploadFile')"
                            v-model="singleGallery"
                            type="gallery"
                            file-types=".png, .jpg, .jpeg, .gif"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("fileUpload.uploadList") }}
                    </va-card-title>
                    <va-card-content>
                        <va-file-upload
                            :upload-button-text="$t('fileUpload.uploadFile')"
                            v-model="list"
                        />
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
            specificTypes: [],
            uploadList: [],
            single: [],
            singleGallery: [],
            list: [],
        };
    },
};
</script>
<style></style>
