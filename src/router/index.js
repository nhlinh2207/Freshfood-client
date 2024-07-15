import ClientRouter from './clientRouter.js'
import AdminRouter from './adminRouter.js'
import StaffRouter from './staffRouter.js'
import { createRouter, createWebHistory } from "vue-router"
import { isAuthenticated } from "@/plugins/helpers";

const baseRoute = process.env.NODE_ENV === 'development' ? '/web/' : '/';

const routes = [
    ...ClientRouter,
    ...AdminRouter,
    ...StaffRouter
]

const router = createRouter({
    history : createWebHistory(baseRoute),
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(
        (childRoute) => childRoute.meta.requireAuth
    );
    if(requireAuth && !isAuthenticated()){
        next({name: "login"})
    }else{
        next();
    }
})

router.afterEach((to) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = to.meta.title ?? "Not Found";
});

export default router;