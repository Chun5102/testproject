<script setup>
import { inject } from 'vue'

const context = inject('context')

function toggleTheme() {
  context.theme = context.theme === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggleTheme">🌗 切換主題（目前：{{ context.theme }}）</button>
</template>

<style scoped></style>
