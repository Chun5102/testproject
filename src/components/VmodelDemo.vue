<script setup>
import { ref } from 'vue'

const text = ref('')
const message = ref('')

const interests = ref([])
const interestList = ref([
  { id: 1, name: '閱讀', code: 'Reading' },
  { id: 2, name: '運動', code: 'Sports' },
  { id: 3, name: '旅行', code: 'Travel' },
])
const gender = ref('')
</script>

<template>
  <p>text is: {{ text }}</p>
  <input :value="text" @input="(event) => (text = event.target.value)" placeholder="edit me" />
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <hr />

  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines" rows="4" cols="50"></textarea>
  </div>

  <hr />

  <h3>選擇你的興趣：</h3>

  <label v-for="interest in interestList" :key="interest.id"
    ><input type="checkbox" :value="interest.code" v-model="interests" /> {{ interest.name }}</label
  >

  <label><input type="checkbox" value="閱讀" v-model="interests" /> 閱讀</label>
  <label><input type="checkbox" value="運動" v-model="interests" /> 運動</label>
  <label><input type="checkbox" value="旅行" v-model="interests" /> 旅行</label>

  <p>你選擇的興趣：{{ interests.join(', ') }}</p>

  <hr />
  <h3>選擇性別：</h3>
  <label><input type="radio" value="男" v-model="gender" /> 男</label>
  <label><input type="radio" value="女" v-model="gender" /> 女</label>
  <p>你選擇的性別：{{ gender }}</p>
</template>

<style scoped></style>
