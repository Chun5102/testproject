<script setup>
const event = (e) => {
  alert(e.key)
}
</script>

<template>
  <input @keyup.enter="event" :placeholder="'請按鍵盤enter'" />
  <br />
  <input @keyup.space="event" :placeholder="'請按鍵盤space'" />
  <br />
  <input @keyup.delete="event" :placeholder="'請按鍵盤delete'" />
  <br />
  <input @keyup.page-down="event" :placeholder="'請按鍵盤page-down'" />
  <br />
  <input @keyup.page-up="event" :placeholder="'請按鍵盤page-up'" />
  <br />
  <input @keyup.home="event" :placeholder="'請按鍵盤home'" />
  <br />
  <input @keyup.a="event" :placeholder="'請按鍵盤a'" />
</template>

<style scoped></style>
