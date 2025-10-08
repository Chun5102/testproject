<script setup>
import { reactive } from 'vue'

const items = reactive({
  101: { name: '蘋果', price: 5 },
  102: { name: '香蕉', price: 3 },
  103: { name: '橘子', price: 4 },
})
</script>

<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item, key, index) in items" :key="key">
        {{ index + 1 }}. 代碼{{ key }} - {{ item.name }} 單價 {{ item.price }} 元
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
