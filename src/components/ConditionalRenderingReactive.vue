<script setup>
import { ref, reactive } from 'vue'
const users = reactive([
  {
    username: 'admin',
    password: '123',
    role: 'admin',
  },
  {
    username: 'Jerry',
    password: '456',
    role: 'user',
  },
  {
    username: 'guest',
    password: '789',
    role: 'guest',
  },
])
const userForm = reactive({
  login: {
    isLoggedIn: false,
    username: '',
    password: '',
    errorMsg: '',
    role: '',
  },
})

const login = () => {
  const findUser = users.find((user) => {
    return user.username === userForm.login.username && user.password === userForm.login.password
  })
  restUserForm()
  if (findUser) {
    userForm.login.isLoggedIn = true
    userForm.login.role = findUser.role
    // Object.assign(userForm.login, { isLoggedIn: true, role: findUser.role, errorMsg: '' })
  } else {
    userForm.login.errorMsg = '登入錯誤'
    // Object.assign(userForm.login, {
    //   isLoggedIn: false,
    //   username: '',
    //   password: '',
    //   role: '',
    //   errorMsg: '登入錯誤',
    // })
  }
}

const logout = () => {
  restUserForm()
  // Object.assign(userForm.login, {
  //   isLoggedIn: false,
  //   username: '',
  //   password: '',
  //   errorMsg: '',
  //   role: '',
  // })
}

// 整合還原初始值
const restUserForm = () => {
  Object.assign(userForm.login, {
    isLoggedIn: false,
    username: '',
    password: '',
    errorMsg: '',
    role: '',
  })
}
</script>

<template>
  <div class="container">
    <!-- 登入表單 -->
    <div v-if="!userForm.login.isLoggedIn">
      <h3>請登入</h3>
      <input v-model="userForm.login.username" placeholder="帳號" />
      <input v-model="userForm.login.password" type="password" placeholder="密碼" />
      <button @click="login">登入</button>
      <p v-if="userForm.login.errorMsg" class="error">{{ userForm.login.errorMsg }}</p>
    </div>

    <!-- 登入成功畫面 -->
    <div v-else>
      <div v-if="userForm.login.role === 'admin'">
        <h2>👑 歡迎管理員 {{ userForm.login.username }}</h2>
        <p>這是管理後台畫面。</p>
      </div>

      <div v-else-if="userForm.login.role === 'user'">
        <h2>👤 歡迎會員 {{ userForm.login.username }}</h2>
        <p>這是會員專區。</p>
      </div>

      <div v-else>
        <p>身份不明，請聯絡客服。</p>
      </div>

      <button @click="logout">登出</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
.error {
  color: red;
}
</style>
