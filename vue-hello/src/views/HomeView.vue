<script setup>
import axios from 'axios'
import { ref } from 'vue'

const arr = ref([])
const arr2 = ref([])

async function f() {
  try {
    const response = await axios.get('http://localhost:8081/arr')
    console.log(response.data)
    arr.value = response.data

    const response2 = await axios.get('http://localhost:8081/json-arr')
    arr2.value = response2.data
    console.log(response2.list)
  } catch (error) {
    console.error(error)
  }
}

f();
</script>

<template>
  <ul>
    <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
  </ul>

  <ul>
    <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
  </ul>
</template>
