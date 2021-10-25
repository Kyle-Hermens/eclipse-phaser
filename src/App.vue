<template>
  <div id="app">
    <button @click="greet">Greet</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    async greet() {
      const wasm = import("/wasm/pkg");
      const greet = (await wasm).greet;
      greet();
    }
  }
}
</script>

<style>
#app {
}
</style>
