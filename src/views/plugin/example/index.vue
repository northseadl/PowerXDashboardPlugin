<template>
  <a-card>
    <p>Hello Plugin</p>
    <a-button type="primary" @click="onClick">Click me</a-button>
  </a-card>
</template>

<script lang="ts" setup>
  import { Message } from '@arco-design/web-vue';

  const onClick = () => {
    Message.success('Hello Plugin');
  };
</script>
