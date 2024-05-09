<template>
  <div class="about">

      <textarea
        class="write-box"
        v-model = "content1"
        placeholder="내용을 입력하세요!"
        style="width: 500px; height: 300px"
      ></textarea>

      <button @click="send">보내기</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      content1: ''
    }
  },
  methods: {
    send() {
      const tmpContent = this.content1
      this.content1 = ''

      axios.post('http://localhost:8081/post', 
        {
          content: tmpContent
        }
        // {
        //   headers: {
        //     Authorization: localStorage.getItem("jwtToken")
        //   }
        // }
      )
      .then(function (response) {
        alert("글쓰기 완료! ")
      })
      .catch(function (error) {
        alert("글쓰기 실패: " + error)
        console.log(error);
      });
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
