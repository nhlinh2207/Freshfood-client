const routes = [
    {
        path: "/admin",
        redirect: {name : "adminHome"},
        meta: {
            requireAuth : false,
        },
        children: [
            {
                path: "home",
                name: "adminHome",
                meta: {
                  title: "Trang chủ",
                },
                component: () => import("@/pages/client/HomeClient"),
            }
        ]
    }
]

export default routes;