<template>
  <div>
    <a-card>
      <p>Hello Plugin</p>
      <a-button type="primary" @click="onClick">Click me</a-button>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { Message, Card, Button } from '@arco-design/web-vue';

  const onClick = () => {
    Message.success('Hello Plugin');
  };
</script>
