import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      components: {
        default: () => import('../pages/home/index.vue'),
        headerRoute: () => import('../pages/headerMenus/index.vue')
      },
      meta: { title: '首页' },
      redirect: '/home/recommend',
      children: [
        
        {
          path: 'live',
          component: () => import('../pages/live/index.vue'),
          meta: { title: '直播' }
        },
        {
          path: 'recommend',
          component: () => import('../pages/recommend/index.vue'),
          meta: { title: '推荐' }
        },
        {
          path: 'hot',
          component: () => import('../pages/hot/index.vue'),
          meta: { title: '热门' }
        },
        {
          path: 'followAnime',
          component: () => import('../pages/followAnime/index.vue'),
          meta: { title: '追番' }
        },
        {
          path: 'movies',
          component: () => import('../pages/movies/index.vue'),
          meta: { title: '影视' }
        }
      ]
    },
    {
      path: '/selected',
      component: () => import('../pages/selected/index.vue'),
      meta: { title: '精选' }
    },
    {
      path: '/updates',
      components: {
        default: () => import('../pages/updates/index.vue'),
        headerRoute: () => import('../pages/headerMenus/index.vue')
      },
      meta: { title: '动态' },
      redirect: '/updates/comprehensive',
      children: [
        {
          path: 'comprehensive',
          component: () => import('../pages/comprehensive/index.vue'),
          meta: { title: '综合' }
        },
        {
          path: 'video',
          component: () => import('../pages/video/index.vue'),
          meta: { title: '视频' }
        }
      ]
    },
    {
      path: '/mine',
      component: () => import('../pages/mine/index.vue'),
      meta: { title: '我的' }
    },
    {
      path: '/space',
      component: () => import('../pages/space/index.vue'),
      meta: { title: '空间' }
    },
    {
      path: '/setting',
      component: () => import('../pages/setting/index.vue'),
      meta: { title: '设置' }
    }
  ]
})

console.log('Router routes:', router.options.routes) // 添加调试信息
export default router
