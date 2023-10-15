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
              path: "cartDetailStaff/:id",
              name: "cart-detail-staff",
              meta: {
                title: "Chi tiết đơn hàng",
              },
              props: true,
              component: () => import("@/pages/staff/CartDetail"),
            }
        ]
    }
]

export default routes;