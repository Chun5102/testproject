<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const columns = reactive([
  {
    propval: 'name',
    label: 'Name',
  },
  {
    propval: 'price',
    label: 'Price',
  },
  {
    propval: 'description',
    label: 'Description',
    width: 200,
  },
  {
    propval: 'image',
    label: 'Image',
  },
])

const tableData = reactive([])

let apiService = axios.create({
  baseURL: 'http://localhost:8080/',
})

const questProduct = () => {
  // GET
  apiService
    .get('/api/queryAllProducts')
    .then((response) => {
      console.log('🚀 ~ questProduct ~ response:', response)

      Object.assign(tableData, response.data)
    })
    .catch((error) => console.log(error))
}
</script>

<template>
  <div>
    <el-button type="primary" @click="questProduct()">查詢產品</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="id" label="ID" width="150" />
    <el-table-column
      v-for="(column, index) in columns"
      :prop="column.propval"
      :label="column.label"
      :key="index"
      :width="column.width"
    />
    <!-- <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="price" label="Price" width="120" />
    <el-table-column prop="description" label="Description" width="120" />
    <el-table-column prop="image" label="Image" width="120" /> -->
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default>
        <el-button link type="primary" size="small"> Detail </el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped></style>
