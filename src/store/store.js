import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        TodoList: [],
    },
    mutations: {
        PushTodoList(state, Todo) {
            state.TodoList.push(Todo);
        },
        UpdateTodos(state, payload) {
            state.TodoList[payload.index].todos = payload.todos;
        },
        DeleteTodoList(state, id) {
            state.TodoList = state.TodoList.filter((q) => q.id !== id);
        },
        ModifyTodoList(state, payload) {
            state.TodoList[payload.index].title = payload.modifyTitle;
            state.TodoList[payload.index].description = payload.modifyDescription;
        },
    },
});
