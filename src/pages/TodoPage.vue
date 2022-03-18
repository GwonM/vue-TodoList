<template>
    <v-container>
        <v-layout>
            <v-card width="600" class="mx-auto mt-16" :style="{ border: '1px solid lightgray', height: '70vh' }" min-height="700">
                <v-card-title class="text-h4 text-break">{{ title }}</v-card-title>
                <v-card-subtitle>{{ description }}</v-card-subtitle>
                <v-card-text>
                    <v-row>
                        <v-col cols="10">
                            <v-text-field ref="myTextArea" v-model="Todo" counter maxlength="20" label="Todo" @keypress.enter="AddTodo" />
                        </v-col>
                        <v-col cols="2">
                            <v-btn class="mt-3" color="primary" @click="AddTodo"> add </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-virtual-scroll :items="todos" :item-height="65" :style="{ height: 'calc(70vh - 230px)' }" min-height="470">
                    <template v-slot:default="{ item }">
                        <v-list-item class="mt-3" :key="item.id">
                            <v-list-item-action>
                                <v-checkbox v-model="item.check"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title :class="{ 'text-decoration-line-through': item.check }">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn depressed small @click="DeleteTodo(item.id)">
                                    Delete
                                    <v-icon color="orange darken-4" right> mdi-delete </v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </template>
                </v-virtual-scroll>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import NewId from "../module/NewId";
export default {
    data() {
        return {
            CurrentTodoID: "",
            title: "",
            Todo: "",
            description: "",
            todos: [],
            checkbox: false,
        };
    },
    methods: {
        AddTodo() {
            if (this.Todo !== "") {
                this.todos.push({ id: NewId(), title: this.Todo, check: false });
                this.Todo = "";
                this.UpdataTodo();
            } else {
                alert("Todo를 입력해주세요");
            }
        },
        DeleteTodo(deleteTodoId) {
            this.todos = this.todos.filter((q) => q.id !== deleteTodoId);
            this.UpdataTodo();
        },
        UpdataTodo() {
            this.$store.commit("UpdateTodos", { index: this.CurrentTodoID, todos: this.todos });
        },
    },
    mounted() {
        try {
            this.CurrentTodoID = this.$route.query.todoIdx;
            this.title = this.$store.state.TodoList[this.CurrentTodoID].title;
            this.description = this.$store.state.TodoList[this.CurrentTodoID].description;
            this.todos = this.$store.state.TodoList[this.CurrentTodoID].todos;
        } catch (error) {
            console.log(error);
            this.$router.push("/");
        }
    },
};
</script>
