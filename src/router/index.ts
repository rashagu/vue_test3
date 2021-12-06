import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Def2 from "../layout/Def2"
import Def from "../layout/Def";


declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    title?: string,
    keepAlive: boolean,
  }
}

//
const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      name: 'home0',
      component: Def2,
      children: [
        {
          path: 'medicalRecordInput',
          meta: {
            keepAlive: true,
          },
          component: Def,
          children: [
            {
              path: 'index',
              component: () => import("../view/CaseInput"),
              meta: {
                keepAlive: true,
              },
            },
          ]
        },
        {
          path: ':pathMatch(.*)*',
          name: 'home_index',
          meta: {title: '404', keepAlive: true},
          component: () => import("../view/Page404")
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: import('../view/Page404'),
    },
  ]
})

export default router


