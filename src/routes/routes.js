import Vue from "vue";
import VueRouter from "vue-router";

import TodoList from "../pages/TodoList.vue";
import TodoPage from "../pages/TodoPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: TodoList },
    { path: "/todo/:id", name: "/todo/:id", component: TodoPage, props: true },
    { path: "/login", component: LoginPage },
    { path: "*", component: NotFound },
];

const router = new VueRouter({
    routes: routes,
    mode: "history",
});

router.beforeEach(function (to, from, next) {
    // to : 이동할 url
    // from : 현재 url
    // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
    if (to.fullPath === "/") {
        if (localStorage.getItem("isLogin") === "false" || localStorage.getItem("isLogin") === null) {
            next("/login");
        } else next();
    } else if (to.fullPath === "/login") {
        if (localStorage.getItem("isLogin") === "true") {
            next("/");
        } else next();
    } else next();
});

export default router;
