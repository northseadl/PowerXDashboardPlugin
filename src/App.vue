<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import useLocale from '@/hooks/locale';
  import { setToken } from '@/utils/auth';

  const { currentLocale } = useLocale();
  const locale = computed(() => {
    switch (currentLocale.value) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return enUS;
    }
  });

  const w = window as any;
  // eslint-disable-next-line no-underscore-dangle
  if (w.__POWERED_BY_WUJIE__) {
    const props = w.$wujie?.props;
    if (props.token) {
      setToken(props.token);
    }
    w.$wujie?.bus.$on('setToken', (arg: any) => {
      setToken(arg);
    });
  }
</script>
