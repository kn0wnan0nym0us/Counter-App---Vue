<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model="value" />
    <button @click="setValue">Set Value</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCounter } from "../composables/useCounter";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();

    const value = computed({
      get() {
        return count.value;
      },
      set(val) {
        setValue(val);
      },
    });

    return { count, increment, decrement, reset, value, setValue };
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1rem;
}

button {
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.25rem;
  background-color: #4a5568;
  color: #fff;
  border: none;
  cursor: pointer;
}

input {
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin-right: 1rem;
}
</style>

