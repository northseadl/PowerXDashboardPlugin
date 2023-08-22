import { RouteRecordRaw } from 'vue-router';

const Example = {
  path: '/example',
  name: 'example',
  redirect: '/example/index',
  meta: {
    requiresAuth: true,
    title: 'Example',
    icon: 'el-icon-s-help',
  },
  children: [
    {
      path: 'index',
      name: 'exampleIndex',
      component: () => import('@/views/plugin/index.vue'),
    },
  ],
} as RouteRecordRaw;

export default Example;
