<template>
  <div>
     <img alt="Vue logo" src="./assets/logo.png" />
     <button @click="increment">увеличить</button>
     <div>
       result - {{ count }}
     </div>

    <router-link to="/">Index</router-link>
    <br>
    <router-link to="/home">Go to Home</router-link>
     <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',

  computed: {
    count(): number {
      return this.$store.state.count;
    },
  },

  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style lang="stylus">
  #app
    font-family: Avenir, Helvetica, Arial, 'sans-serif'
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
