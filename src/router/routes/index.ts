import type { RouteRecordNormalized } from 'vue-router';
import { EMPTY_LAYOUT_TAG } from '@/router/constants';
import { cloneDeep } from 'lodash';

const modules = import.meta.globEager('./modules/*.ts');
const externalModules = import.meta.globEager('./externalModules/*.ts');

// 嵌套EMPTY_LAYOUT路由处理, 该操作是为了适配用于缓存的顶层RouteView, 支持路由嵌套children
function filterEmptyRoute(moduleRoute: any) {
  // 如果一个路由的component是EMPTY_LAYOUT_TAG，那么这个路由是空路由, 从叶子向上递归提取children到EMPTY_LAYOUT路由同级别
  const upEmptyLayoutChildren = (route: any) => {
    const { children } = route;
    delete route.children;
    return [route, ...children];
  };

  const deepFilterChildren = (routes: any[]) => {
    const result: any[] = [];
    routes.forEach((route) => {
      if (route.children) {
        route.children = deepFilterChildren(route.children);
        if (route.component.name === EMPTY_LAYOUT_TAG) {
          result.push(...upEmptyLayoutChildren(route));
        } else {
          result.push(route);
        }
      } else {
        result.push(route);
      }
    });
    return result;
  };

  moduleRoute.children = deepFilterChildren(moduleRoute.children);
  return moduleRoute;
}

// 将ModuleRoutes转换为框架应用使用的Routes
function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    let defaultModule = cloneDeep(_modules[key].default);
    if (!defaultModule) return;

    defaultModule = filterEmptyRoute(defaultModule);
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

// 框架应用使用的Routes
export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
