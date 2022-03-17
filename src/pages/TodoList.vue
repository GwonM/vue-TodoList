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
                    :knowledge="test(index)"
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
    methods: {
        test(index) {
            let TotalCnt = this.$store.state.TodoList[index].todos.length;
            let CheckCnt = this.$store.state.TodoList[index].todos.filter((q) => q.check === true);

            console.log(CheckCnt.length);
            let percent = (CheckCnt.length / TotalCnt) * 100;
            if (isNaN(percent)) return "0";
            return percent.toFixed(1);
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
