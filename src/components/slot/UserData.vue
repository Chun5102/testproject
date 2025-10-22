<script setup>
import UserList from './UserList.vue'
</script>

<template>
  <UserList>
    <!-- ✅ 接收子元件傳來的 user 變數 -->
    <template #default="{ u1 }">
      <strong>{{ u1.name }}</strong>
      （{{ u1.email }})
    </template>
  </UserList>
</template>

<style scoped></style>
