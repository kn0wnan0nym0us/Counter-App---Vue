<template>
  <div class="home">
    <h1>Welcome to Home!</h1>
    <router-link to="/counter">
      <button class="counter-button">Counter</button>
    </router-link>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue';

export default {
  name: 'Home',
  components: {
    Counter,
  },
};
</script>

  <style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  