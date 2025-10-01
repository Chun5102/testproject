<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 0) count.value--
}

const reset = () => {
  count.value = 0
}
</script>

<template>
  <p>Count:{{ count }}</p>
  <button @click="increment">+</button>
  <!-- <button @click="count++">+</button> -->
  <button @click="decrement">-</button>
  <!-- <button @click="count > 0 ? count-- : count">-</button> -->
  <button @click="reset">Reset</button>
  <!-- <button @click="count = 0">Reset</button> -->
</template>

<style scoped></style>
