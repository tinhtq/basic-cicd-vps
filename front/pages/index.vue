<template>
  <div id="container">
    <h1>Hello There</h1>
    <p>We have <span id="total">{{ total.clicks }}</span> clicks.</p>
    <button @click="increment">Add your click!</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total: {},
        clientUrl: this.$config.clientUrl
      }
    },
    async fetch() {
      this.total = await fetch(
        `${this.$config.backendUrl}/api/clicks`
      ).then(res => res.json())
    },
    methods: {
      increment () {
        fetch(`${this.clientUrl}/api/clicks/incr`)
          .then(response => response.json())
          .then(data => document.querySelector('#total').innerHTML = data.clicks);
      }
    }
  }
</script>

<style>
body {
  background: #eee;
}
#container {
  background: #fff;
  border: solid 1px #999;
  border-radius: 1ex;
  font-family: 'Lucida Sans', Geneva, Verdana, sans-serif;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  text-align: center;
  width: 500px;
}
</style>
