import { ref } from "vue";
import { mapState } from "vuex";

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = 0;
  };

  const setValue = (val) => {
    count.value = val;
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
