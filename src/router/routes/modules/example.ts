import { AppRouteRecordRaw } from '@/router/routes/types';
import { PLUGIN_LAYOUT } from '@/router/routes/base';

const Example: AppRouteRecordRaw = {
  path: '/example',
  name: 'Example',
  component: PLUGIN_LAYOUT,
  meta: {
    locale: 'menu.exmaple',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 3,
  },
  children: [
    {
      path: '/example/index',
      name: 'ExampleIndex',
      component: () => import('@/views/example/index.vue'),
      meta: {
        locale: 'menu.exmaple',
        requiresAuth: true,
      },
    },
  ],
};

export default Example;
