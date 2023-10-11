import { createRouter, createWebHistory } from 'vue-router'
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {
      path: '/',
      component: () => import('@/layouts/default/Header.vue'),
      children: [
        {
          path:'customer_orders',
          name:'customer-orders',
          component:()=>import('@/views/Custmer_Orders.vue')
        },
        {
          path:'customer_orders-top',
          name:'customer-orders-top',
          component:() =>import('@/views/Customet_Order-TOP.vue')
        },
        {
          path: 'customer-orders-top_shirt',
          name: 'customer-orders-top_shirt',
          component: () => import('@/views/Customer_Order-TOP-SHIRT.vue'),
        },
        {
          path: 'customer-orders-top_knit',
          name: 'customer-orders-top_knit',
          component: () => import('@/views/Customer_Order-TOP-KNIT.vue'),
        },
        {
          path: 'customer-orders-top_vest',
          name: 'customer-orders-top_vest',
          component: () => import('@/views/Customer_Order-TOP-VEST.vue'),
        },
        {
          path: 'customer-orders-outer',
          name: 'customer-orders-outer',
          component: () => import('@/views/Customer_Order-OUTER.vue'),
        },
        {
          path: 'customer-orders-outer_blazer',
          name: 'customer-orders-outer_blazer',
          component: () => import('@/views/Customer_Order-OUTER-BLAZER.vue'),
        },
        {
          path: 'customer-orders-outer_jacket',
          name: 'customer-orders-outer_jacket',
          component: () => import('@/views/Customer_Order-OUTER-JACKET.vue'),
        },
        {
          path: 'customer-orders-outer_overcoat',
          name: 'customer-orders-outer_overcoat',
          component: () => import('@/views/Customer_Order-OUTER-OVERCOAT.vue'),
        },
        {
          path: 'customer-orders-bottom',
          name: 'customer-orders-bottom',
          component: () => import('@/views/Customer_Order-BOTTOM.vue'),
        },
        {
          path: 'customer-orders-bottom_jeans',
          name: 'customer-orders-bottom_jeans',
          component: () => import('@/views/Customer_Order-BOTTOM-JEANS.vue'),
        },
        {
          path: 'customer-orders-bottom_slacks',
          name: 'customer-orders-bottom_slacks',
          component: () => import('@/views/Customer-Order-BOTTOM-SLACKS.vue'),
        },
        {
          path: 'customer-orders-bottom_short_pants',
          name: 'customer-orders-bottom_short-pants',
          component: () => import('@/views/Customer-Order-BOTTOM-SHORT_PANTS.vue'),
        },
        {
          path: 'customer-orders-acc',
          name: 'customer-orders-acc',
          component: () => import('@/views/Customer-Order-ACC.vue'),
        },
        {
          path: 'customer-orders-acc_bags',
          name: 'customer-orders-acc_bags',
          component: () => import('@/views/Customer-Order-ACC-BAGS.vue'),
        },
        {
          path: 'customer-orders-acc_hat',
          name: 'customer-orders-acc_hat',
          component: () => import('@/views/Customer_Order-ACC-HAT.vue'),
        },
        {
          path: 'customer-orders-acc_shoes',
          name: 'customer-orders-acc_shoes',
          component: () => import('@/views/Customer-Order-ACC-SHOES.vue'),
        },
        {
          path:'product-list',
          name:'product-list',
          component:()=>import('@/views/ProductList.vue'),
          meta: {requiresAuth: true},
        },
        {
          path:'order-list',
          name:'order-list',
          component:() =>import('@/views/OrderList.vue'),
          meta: {requiresAuth: true},
        },
        {
          path:'coupon-list',
          name:'coupon-list',
          component:() =>import('@/views/CouponList.vue'),
          meta: {requiresAuth: true},
        },
        {
          path:'carts',
          name:'carts',
          component:() =>import('@/views/Carts.vue')
        },
        {
          path:'confirm-order',
          name:'confirm-order',
          component:() =>import('@/views/ConfirmOrder.vue')
        },
        {
          path: 'checkout/:orderId',
          name: 'checkout',
          component: () => import('@/views/Checkout.vue'),
        },
      ],
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/Login.vue')
    },
    {
      path: '/:domain(.*)*',
      name: '404',
      component: () => import('@/views/404.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from)
  //...
  if (to.meta.requiresAuth) {
    axios.post('https://vue-course-api.hexschool.io/api/user/check')
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          next();
        } else {
          next({path: '/login'});
          console.log('請驗證')
        }
      })
  } else {
    next();
  }
})

export default router
