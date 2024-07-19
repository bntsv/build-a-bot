import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartTotal = computed(() => cart.value.reduce((prev, curr) => prev += curr.cost, 0));

  return { cart, cartTotal };
});
