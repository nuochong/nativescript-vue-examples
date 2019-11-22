// 原生Vue-router
import Vue from 'nativescript-vue';
import Router from 'vue-router';
import Example from '~/components/example/main';
import Project from '~/components/project/main';
import World from '~/components/example/public/world';
Vue.use(Router);

let router = new Router({
  mode: 'abstract',
  // base: '/',
  // saveScrollPosition: true,
  // transitionOnLoad: true,
  routes: [
    {
      path: '/example',
      name: 'Example',
      component: Example,
      meta: { title: '示例', keepAlive: true }
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      meta: { title: '实例', keepAlive: true }
    },
    {
      path: '/world',
      name: 'World',
      component: World,
      meta: { title: 'World', keepAlive: false }
    }
  ]
});

export default router;
