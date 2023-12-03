<template>
  <div class="cart">
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <img :src="item.imageUrl" :alt="item.name">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }}</p>
      <p>Quantity: {{ item.quantity }}</p>
    </div>
  </div>
</template>
<script  lang="ts">
import {defineComponent} from "vue";
import ShopViewModel from "../ViewModel/ShopViewModel.ts";

export default defineComponent({
  name: 'CartView',
  setup() {
    const shopViewModel = ShopViewModel.getInstance();
    const cart = shopViewModel.cartList;


    return {
      cart,
    };
  },
});
</script>


<style scoped>
.cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.cart-item {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  flex: 1 1 25rem;
  text-align: center;
}

.cart-item img {
  width: 20rem;
  margin: 0.5rem 0;
}

.cart-item h3 {
  font-size: 3.5rem;
  color: var(--black);
}

.cart-item p {
  font-size: 2rem;
  color: #666;
  padding: 0.5rem 0;
}

</style>
