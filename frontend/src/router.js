import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
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
      path: '/admin',
      name: 'admin',
      component: () =>
        import("./views/Admin/Admin.vue"),
      children: [
        {
          path: 'blog',
          name: 'adminBlog',
          component: () =>
            import("./views/Admin/Blog/AdminBlog.vue"),
        },
        {
          path: 'blog/:id',
          name: 'adminBlogPost',
          component: () => 
            import("./views/Admin/Blog/AdminBlogPost.vue")
        },
      ]
    }
  ]
});
