const routes = [
    {
        path: "/",
        redirect: {name : "home"},
        meta: {
            requireAuth : false,
        },
        children: [
            {
                path: "home",
                name: "home",
                meta: {
                  title: "Trang chủ",
                },
                component: () => import("@/pages/client/HomeClient"),
            },
            {
                path: "contact",
                name: "contact",
                meta: {
                  title: "Liên hệ",
                },
                component: () => import("@/pages/client/ContactClient"),
            },
            {
              path: "product",
              name: "product",
              meta: {
                title: "Sản phẩm",
              },
              component: () => import("@/pages/client/ProductClient")
            },
            {
              path: "product/:id",
              name: "product-detail",
              meta: {
                title: "Chi tiết sản phẩm",
              },
              props: true,
              component: () => import("@/pages/client/ProductDetail")
            },
            {
                path: "intro",
                name: "intro",
                meta: {
                  title: "Giới thiệu",
                },
                component: () => import("@/pages/client/IntroClient"),
            },
            {
                path: "news",
                name: "news",
                meta: {
                  title: "Tin tức",
                },
                component: () => import("@/pages/client/NewsClient"),
            },
            {
              path: "cart",
              name: "cart",
              meta: {
                title: "TGiỏ hàng",
                requireAuth: true,
              },
              component: () => import("@/pages/client/CartClient"),
            },
            {
              path: "checkout",
              name: "checkout",
              meta: {
                title: "Thanh toán"
              },
              component: () => import("@/pages/client/CheckoutClient"),
            }
        ]
    }
]

export default routes;