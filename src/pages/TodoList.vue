<template>
    <v-container fluid>
        <v-layout>
            <v-flex row class="ma-2 align-center" :style="{ gap: '15px' }">
                <TodoCard
                    v-for="(item, index) in this.$store.state.TodoList"
                    :key="index"
                    :title="item.title"
                    :description="item.description"
                    :id="item.id"
                    :index="index"
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
    data: () => ({
        TodoList: [],
    }),
    methods: {},
};
</script>

<style scoped>
.dialog-button {
    height: 170px;
    display: flex;
    align-items: center;
}
</style>
