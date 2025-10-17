<script setup>
import { onMounted, ref } from 'vue'

const items = ref([
  { id: 1, name: '蘋果', placeholder: '請輸入數量' },
  { id: 2, name: '橘子', placeholder: '請輸入數量' },
  { id: 3, name: '香蕉', placeholder: '請輸入數量' },
])
// 設置每個輸入框的 ref
const inputData = ref([])

// 設置輸入框的 ref
const setInputRef = (idx, el) => {
  inputData.value[idx] = el
}

const submit = () => {
  inputData.value.forEach((ipt, index) => {
    console.log(`${items.value[index].name} 數量 ${ipt.value}`)
  })
}

const focusFirstInput = () => {
  inputData.value.forEach((ipt) => {
    ipt.value = ''
  })

  if (inputData.value[0]) {
    inputData.value[0].focus()
  }
}

onMounted(() => {
  if (inputData.value[0]) {
    inputData.value[0].focus()
  }
})
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="item.id">
      <label> {{ item.name }}</label>
      <input type="text" :ref="(el) => setInputRef(index, el)" :placeholder="item.placeholder" />
    </div>
    <button @click="focusFirstInput">重新輸入(聚焦第一個輸入框)</button>
    <button @click="submit">送出</button>
  </div>
</template>

<style scoped>
/* 添加一些樣式 */
input {
  margin: 5px;
}
</style>
