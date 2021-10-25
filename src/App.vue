<template>
  <div id="app-main">
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
#app-main {
}
</style>
