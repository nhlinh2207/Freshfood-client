import ClientRouter from './clientRouter.js'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/login",
        name: "login",
        meta: {
            title: "Đăng nhập",
        },
        component: () => import('@/pages/LoginPage')
    },
    {
        path: "/register",
        name: "register",
        meta: {
            title: "Đăng ký",
        },
        component: () => import('@/pages/RegisterPage')
    },
    ...ClientRouter,
]

const router = createRouter({
    history : createWebHistory(),
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(
        (childRoute) => childRoute.meta.requireAuth
    );
    if(requireAuth){
        next({name: "login"})
    }else{
        next();
    }
})

router.afterEach((to) => {
    document.title = to.meta.title ?? "App";
});

export default router;