const routes = [
    {
        path: "/",
        redirect: {name : "home"},
        component: () => import("@/pages/client/MainClient"),
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
                title: "Giỏ hàng",
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
            },
            {
              path: "login",
              name: "login",
              meta: {
                  title: "Đăng nhập",
              },
              component: () => import('@/pages/LoginPage')
          },
          {
              path: "register",
              name: "register",
              meta: {
                  title: "Đăng ký",
              },
              component: () => import('@/pages/RegisterPage')
          },
          {
              path: "profile",
              name: "profile",
              meta: {
                title: "Thông tin người dùng"
              },
              component: () => import("@/pages/client/ProfileClient"),
          },
          {
              path: "changePassword",
              name: "changePassword",
              meta: {
                title: "Đổi mật khẩu"
              },
              component: () => import("@/pages/client/ChangePassword"),
          },
          {
              path: "forgetPassword",
              name: "forgetPassword",
              meta: {
                title: "Quên mật khẩu"
              },
              component: () => import("@/pages/client/ForgetPassword"),
          },
          {
              path: "updatePassword",
              name: "updatePassword",
              meta: {
                title: "Cập nhật mật khẩu"
              },
              component: () => import("@/pages/client/UpdatePassword"),
          },
          {
              path: "history",
              name: "history",
              meta: {
                title: "Lịch sử mua hàng",
                requireAuth: true,
              },
              component: () => import("@/pages/client/CartHistory"),
          },
          {
              path: "cartDetail/:id",
              name: "cartDetail",
              meta: {
                title: "Chi tiết đơn hàng",
                requireAuth: true,
              },
              props: true,
              component: () => import("@/pages/client/CartDetail")
          },
          {
            path: "payment_success",
            name: "payment_success",
            meta: {
              title: "Thanh toán đơn hàng thành công",
              requireAuth: true,
            },
            props: true,
            component: () => import("@/pages/client/PaymentSuccess")
        },
        ]
    }
]

export default routes;