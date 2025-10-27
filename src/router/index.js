// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import UserPost from '@/views/UserPost.vue'
import Users from '@/views/Users.vue'
import UsersList from '@/views/UsersList.vue'
import UsersProfile from '@/views/UsersProfile.vue'
import UsersData from '@/views/UsersData.vue'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/about', component: (About) => import('@/views/About.vue') },
  { path: '/users/:username/posts/:postId', component: UserPost },
  {
    path: '/users',
    component: Users,
    children: [
      { path: ':id', name: 'userData', component: UsersData, props: true }, // ✅ 啟用 props
      { path: '/users/list', component: UsersList },
      { path: '/users/profile', name: 'profile', component: UsersProfile },
    ],
  },
  {
    path: '/user/:username',
    name: 'UserDetail',
    component: () => import('@/views/UserDetail.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
