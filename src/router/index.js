import ClientRouter from './clientRouter.js'
import AdminRouter from './adminRouter.js'
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    ...ClientRouter,
    ...AdminRouter
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