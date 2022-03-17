<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="mode === 'Create'" class="mx-2" fab color="primary" dark v-bind="attrs" v-on="on" @click="openDialog">
                <v-icon dark> mdi-plus </v-icon>
            </v-btn>
            <v-list-item-title v-else-if="mode === 'Modify'" class="text-center" v-bind="attrs" v-on="on" @click="openDialog">
                수정
            </v-list-item-title>
        </template>
        <v-card>
            <v-card-title>
                <span v-if="mode === 'Create'" class="text-h5">Todo Title</span>
                <span v-else-if="mode === 'Modify'" class="text-h5">Todo Title Modify</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field ref="title" v-model="title" counter maxlength="25" label="Title" @keypress.enter="EditorHandler" />
                            <v-text-field v-model="description" counter maxlength="50" label="Description" @keypress.enter="EditorHandler" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
                <v-btn color="blue darken-1" text @click="EditorHandler"> Save </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import NewId from "../module/NewId";
export default {
    props: {
        mode: {
            type: String,
        },
        baseTitle: {
            type: String,
            default: "",
        },
        baseDescription: {
            type: String,
            default: "",
        },
    },
    data: () => ({
        dialog: false,
        title: "",
        description: "",
    }),
    methods: {
        EditorHandler() {
            if (this.title === "") {
                alert("Title를 입력해주세요");
                return;
            }
            if (this.mode === "Create") {
                this.PushTodoList();
            } else if (this.mode === "Modify") {
                this.ModifyTodoList();
            }
        },
        PushTodoList() {
            this.dialog = false;
            this.$store.commit("PushTodoList", { id: NewId(), title: this.title, description: this.description, todos: [] });
            this.title = "";
        },
        ModifyTodoList() {
            this.dialog = false;
            this.$emit("ModifyTitle", { title: this.title, description: this.description });
            this.title = "";
        },
        setFocusName() {
            this.$refs.title.focus();
        },

        openDialog() {
            this.title = this.baseTitle;
            this.description = this.baseDescription;
            this.dialog = !this.dialog;
            setTimeout(() => {
                this.setFocusName();
            }, 200);
        },
    },
};
</script>
<style lang=""></style>
