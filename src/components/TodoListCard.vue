<template>
    <v-card
        height="280"
        min-width="250"
        max-width="160"
        :style="{ border: '1px solid lightgray', cursor: 'pointer' }"
        @click="MoveTodoPage"
        class="d-flex flex-column"
    >
        <v-card-title>
            <v-row>
                <v-col cols="9">
                    <span class="text-h5 text-break">{{ title }}</span>
                    <br />
                    <v-divider />
                    <span class="text-subtitle-1">{{ description }}</span>
                </v-col>
                <v-col cols="3">
                    <v-menu bottom left :close-on-content-click="closeOnContentClick" :value="shown">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" color="black" @click="shown = true">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>

                        <v-list width="120" outlined>
                            <v-list-item class="kebab">
                                <v-list-item-title class="text-center" @click="Delete"> 삭제</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="kebab">
                                <TodoEditDialog
                                    :mode="'Modify'"
                                    :baseTitle="title"
                                    :baseDescription="description"
                                    @ModifyTitle="ModifyTodoList"
                                />
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-progress-linear color="primary" :value="knowledge" height="25">
                <strong>{{ knowledge }}%</strong>
            </v-progress-linear>
        </v-card-actions>
    </v-card>
</template>
<script>
import TodoEditDialog from "./TodoEditDialog.vue";
export default {
    components: { TodoEditDialog },
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        id: {
            type: String,
        },
        index: {
            type: Number,
        },
        knowledge: {
            type: String,
        },
    },
    data() {
        return {
            menuItems: ["삭제", "수정"],
            closeOnContentClick: true,
            shown: false,
        };
    },
    methods: {
        Delete() {
            this.$store.commit("DeleteTodoList", this.id);
        },
        MoveTodoPage() {
            this.$router.push({
                path: "/todo/" + this.id,
                query: { todoIdx: this.index },
            });
        },
        ModifyTodoList(data) {
            this.shown = false;
            this.$store.commit("ModifyTodoList", { index: this.index, modifyTitle: data.title, modifyDescription: data.description });
        },
    },
};
</script>
<style>
.kebab {
    cursor: pointer;
}

.kebab:hover {
    background: rgba(80, 80, 80, 0.2);
}
</style>
