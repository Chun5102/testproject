<script setup>
import { ref } from 'vue'

const message = ref('')

const onInput = (e) => {
  message.value = e.target.value
}
</script>

<template>
  <div>
    <input @input="onInput" placeholder="輸入文字" />
    <p>你輸入了：{{ message }}</p>
  </div>
</template>

<style scoped></style>
