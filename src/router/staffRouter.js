const routes = [
    {
        path: "/staff",
        redirect: {name : "staffHome"},
        component: () => import("@/pages/staff/MainStaff"),
        meta: {
            requireAuth : false,
        },
        children: [
            {
                path: "home",
                name: "staffHome",
                meta: {
                  title: "Trang chủ Nhaân viên",
                },
                component: () => import("@/pages/staff/HomeStaff"),
            },
            {
              path: "cartStaff",
              name: "cartStaff",
              meta: {
                title: "Quản lý đơn hàng",
              },
              props: true,
              component: () => import("@/pages/staff/CartStaff"),
            },
            {
              path: "cartDetail/:id",
              name: "cart-detail",
              meta: {
                title: "Chi tiết đơn hàng",
              },
              props: true,
              component: () => import("@/pages/staff/CartDetail"),
            },
            {
              path: "userProfile/:id",
              name: "user-profile",
              meta: {
                title: "Thông tin người dùng",
              },
              props: true,
              component: () => import("@/pages/staff/UserProfile"),
            },
        ]
    }
]

export default routes;