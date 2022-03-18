import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        TodoList: [],
    },
    mutations: {
        // Todo 추가
        PushTodoList(state, Todo) {
            state.TodoList.push(Todo);
        },
        // 각 Todo 별 목록 변경
        UpdateTodos(state, payload) {
            state.TodoList[payload.index].todos = payload.todos;
        },
        // Todo 삭제
        DeleteTodoList(state, id) {
            let index = state.TodoList.findIndex((q) => q.id === id);
            state.TodoList.splice(index, 1);
        },
        //  Todo Title, Description 변경
        ModifyTodoList(state, payload) {
            state.TodoList[payload.index].title = payload.modifyTitle;
            state.TodoList[payload.index].description = payload.modifyDescription;
        },
    },
});
