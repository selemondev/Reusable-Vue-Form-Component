import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue"
const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },

    {
        path: "/register",
        name: "Register",
        component: () => import("../views/RegisterView.vue")
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL) as any,
    routes
});

export default router;