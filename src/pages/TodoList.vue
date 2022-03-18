<template>
    <v-container fluid>
        <v-layout>
            <v-flex row class="ma-2 align-center" :style="{ gap: '15px' }">
                <TodoCard
                    v-for="(todo, index) in this.$store.state.TodoList"
                    :key="index"
                    :todoInfo="todo"
                    :index="index"
                    :check="checkCnt(index)"
                    :todoCount="totalCnt(index)"
                />
                <div class="dialog-button">
                    <TodoEditDialog :mode="'Create'" />
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import TodoCard from "../components/TodoListCard.vue";
import TodoEditDialog from "../components/TodoEditDialog.vue";
export default {
    name: "TodoList",
    components: { TodoCard, TodoEditDialog },
    methods: {
        totalCnt(index) {
            return this.$store.state.TodoList[index].todos.length;
        },
        checkCnt(index) {
            return this.$store.state.TodoList[index].todos.filter((q) => q.check === true).length;
        },
    },
};
</script>

<style scoped>
.dialog-button {
    height: 170px;
    display: flex;
    align-items: center;
}
</style>
