<script setup>
import { reactive } from 'vue'

const isDropdown = reactive({
  users: false,
})

const openMenu = (menu, state) => {
  isDropdown[menu] = state
}
</script>

<template>
  <nav class="top-navbar">
    <ul>
      <h1>我的網站</h1>
      <li><router-link to="/">首頁</router-link></li>
      |
      <li><router-link to="/about">關於</router-link></li>
      |
      <li
        class="dropdown"
        @mouseenter="openMenu('users', true)"
        @mouseleave="openMenu('users', false)"
      >
        <!-- <li class="dropdown" @click="openMenu('users', !isDropdown.users)"> -->
        <router-link to="/users">使用者</router-link>|
        <ul v-if="isDropdown.users" class="dropdown-menu">
          <li><router-link to="/users/Jerry/posts/1234">使用者資訊</router-link></li>
          <li>
            <router-link :to="{ name: 'userData', params: { id: 'u123' } }">使用者資料</router-link>
          </li>
          <li><router-link to="/users/list">使用者清單</router-link></li>
          <li><router-link to="/users/profile">個人檔案</router-link></li>
        </ul>
      </li>
      <router-link to="/axious">Axios Demo</router-link>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}
nav li {
  display: inline-block;
}
nav .dropdown {
  position: relative;
}
nav .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 0;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  min-width: 113px;
}
nav .dropdown-menu li {
  padding: 8px 5px;
}
nav .dropdown-menu li:hover {
  background-color: #f1f1f1;
}
nav .dropdown a {
  cursor: pointer;
}
nav .dropdown:hover .dropdown-menu {
  display: block;
}
.top-navbar {
  position: fixed;
  top: 0; /* 固定在頂部 */
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 12px;
  display: flex;
  gap: 20px;
}
.router-link-active {
  color: #ffd04b;
}
</style>
