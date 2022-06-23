<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      return this.count > 0 && this.count--;
    },
    resetCount() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <h2>Count: {{ count }}</h2>
    <div class="command">
      <button @click="decreaseCount">Decrease</button>
      <button @click="increaseCount">Increase</button>
      <button @click="resetCount">Reset</button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .command {
    display: flex;
    margin-top: 1rem;
  }

  .command > button {
    border: 0;
    margin-right: 1rem;
    padding: 0.5rem;
    font-size: 1.1rem;
  }
}
</style>
