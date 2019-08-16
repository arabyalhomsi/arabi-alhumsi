import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from '@/store/index'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => 
        import("./views/Timeline/Timeline.vue")
    },
    {
      path: '/blog',
      name: 'blog',
      component: () =>
        import("./views/Blog/Blog.vue")
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        guest: true
      },
      component: () =>
        import("./views/Auth/Auth.vue"),
      children: [
        {
          path: 'login',
          name: 'authLogin',
          meta: {
            guest: true
          },
          component: () =>
            import("./views/Auth/Login/Login.vue")
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        auth: true
      },
      component: () =>
        import("./views/Admin/Admin.vue"),
      children: [
        {
          path: 'blog',
          name: 'adminBlog',
          meta: {
            auth: true
          },
          component: () =>
            import("./views/Admin/Blog/AdminBlog.vue"),
        },
        {
          path: 'blog/:id',
          name: 'adminBlogPost',
          meta: {
            auth: true
          },
          component: () => 
            import("./views/Admin/Blog/AdminBlogPost.vue")
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta) next()
  else if (to.meta.auth) {
    const authenticated = store.getters['auth/authenticated']

    if (!authenticated) {
      next({
        name: 'authLogin'
      })
    } else {
      next()
    }
  }
  else if (to.meta.guest) {
    const authenticated = store.getters['auth/authenticated']

    if (authenticated) {
      next({
        name: 'admin'
      })
    } else {
      next()
    }
  }
  else {
    next()
  }
})


export default router