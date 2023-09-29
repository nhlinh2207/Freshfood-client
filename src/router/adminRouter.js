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
            {
              path: "cart/:type",
              name: "cart",
              meta: {
                title: "Đơn hàng",
              },
              props: true,
              component: () => import("@/pages/admin/CartAdmin"),
            },
            {
              path: "cartDetail/:id",
              name: "cart-detail",
              meta: {
                title: "Chi tiết đơn hàng",
              },
              props: true,
              component: () => import("@/pages/admin/CartDetail"),
            },
            {
              path: "user",
              name: "user",
              meta: {
                title: "Quản lý người dùng",
              },
              component: () => import("@/pages/admin/UserManage"),
          },
          {
            path: "userProfile/:id",
            name: "user-profile",
            meta: {
              title: "Thông tin người dùng",
            },
            props: true,
            component: () => import("@/pages/admin/UserProfile"),
          },
        ]
    }
]

export default routes;