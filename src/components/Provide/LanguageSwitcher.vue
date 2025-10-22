<script setup>
import { inject } from 'vue'

const context = inject('context')

function toggleLocale() {
  context.locale = context.locale === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <button @click="toggleLocale">🌍 切換語系（目前：{{ context.locale }}）</button>
</template>

<style scoped></style>
