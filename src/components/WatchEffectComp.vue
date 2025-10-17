<script setup>
import { computed, ref, watchEffect } from 'vue'
// 假設猜數字範圍為 0-100
const guess = ref(Math.floor(Math.random() * 100))
const count = ref(0)
// const message = ref('')

// 限制count輸入數字範圍, 0-100
watchEffect(() => {
  if (count.value < 0) {
    count.value = 0
  } else if (count.value > 100) {
    count.value = 100
  }
})

const message = computed(() => {
  if (count.value < guess.value) {
    return 'too low'
  } else if (count.value > guess.value) {
    return 'too high'
  } else {
    return 'Correct'
  }
})
// watchEffect(() => {
//   if (count.value < guess.value) {
//     message.value = 'too low'
//   } else if (count.value > guess.value) {
//     message.value = 'too high'
//   } else {
//     message.value = 'Correct'
//   }
// })
</script>

<template>
  <div>
    <input v-model="count" type="number" />
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
  </div>
  <!-- {{ guess }} -->
</template>

<style scoped></style>
