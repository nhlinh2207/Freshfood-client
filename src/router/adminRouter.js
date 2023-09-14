const routes = [
    {
        path: "/admin",
        redirect: {name : "adminHome"},
        component: () => import("@/pages/admin/MainAdmin"),
        meta: {
            requireAuth : false,
        },
        children: [
            {
                path: "home",
                name: "adminHome",
                meta: {
                  title: "Trang chủ Admin",
                },
                component: () => import("@/pages/admin/HomeAdmin"),
            },
            {
                path: "product",
                name: "productAdmin",
                meta: {
                  title: "Sản phẩm Admin",
                },
                component: () => import("@/pages/admin/ProductAdmin"),
            },
            {
                path: "category",
                name: "categoryAdmin",
                meta: {
                  title: "Danh mục Admin",
                },
                component: () => import("@/pages/admin/CategoryAdmin"),
            },
            {
                path: "addProduct",
                name: "addProduct",
                meta: {
                  title: "Thêm mới sản phẩm",
                },
                component: () => import("@/pages/admin/AddProduct"),
            },
            {
              path: "updateProduct/:id",
              name: "updateProduct",
              meta: {
                title: "Cập nhật sản phẩm",
              },
              props: true,
              component: () => import("@/pages/admin/UpdateProduct"),
            },
        ]
    }
]

export default routes;