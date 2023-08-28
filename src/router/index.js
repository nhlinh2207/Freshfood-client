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
    {
        path: "/profile",
        name: "profile",
        meta: {
          title: "Thông tin người dùng"
        },
        component: () => import("@/pages/client/ProfileClient"),
    },
    {
        path: "/changePassword",
        name: "changePassword",
        meta: {
          title: "Đổi mật khẩu"
        },
        component: () => import("@/pages/client/ChangePassword"),
    },
    {
        path: "/forgetPassword",
        name: "forgetPassword",
        meta: {
          title: "Quên mật khẩu"
        },
        component: () => import("@/pages/client/ForgetPassword"),
    },
    {
        path: "/updatePassword",
        name: "updatePassword",
        meta: {
          title: "Cập nhật mật khẩu"
        },
        component: () => import("@/pages/client/UpdatePassword"),
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