<script setup>
import { ref } from 'vue'

const text = ref('')
const message = ref('')

const interests = ref([])
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
  <label><input type="checkbox" value="閱讀" v-model="interests" /> 閱讀</label>
  <label><input type="checkbox" value="運動" v-model="interests" /> 運動</label>
  <label><input type="checkbox" value="旅行" v-model="interests" /> 旅行</label>

  <p>你選擇的興趣：{{ interests.join(', ') }}</p>
</template>

<style scoped></style>
