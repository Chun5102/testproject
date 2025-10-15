<script setup>
import { ref } from 'vue'
import TimerComponent from './TimerComponent.vue'

const showTimer = ref(true)
</script>

<template>
  <div>
    <button @click="showTimer = !showTimer">
      {{ showTimer ? '隱藏計時器' : '顯示計時器' }}
    </button>

    <TimerComponent v-if="showTimer" />
  </div>
</template>

<style scoped></style>
