<script setup>
import { inject, computed } from 'vue'

const context = inject('context')

const greeting = computed(() => {
  return context.locale === 'zh' ? '你好，世界！' : 'Hello, world!'
})
</script>

<template>
  <p>👋 {{ greeting }}</p>
</template>

<style scoped></style>
