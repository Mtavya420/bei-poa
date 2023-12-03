<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="product">
      <img :src="product.imageUrl" :alt="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import ShopViewModel from "../ViewModel/ShopViewModel.ts";

export default defineComponent({
  name: 'ProductLike',
  setup() {
    const shopViewModel = ShopViewModel.getInstance();
    const products = shopViewModel.productLikeList;


    return {
      products,
    };
  },
});
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.product {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  flex: 1 1 25rem;
  text-align: center;
}

.product img {
  width: 20rem;
  margin: 0.5rem 0;
}

.product h3 {
  font-size: 3.5rem;
  color: var(--black);
}

.product p {
  font-size: 2rem;
  color: var(--green);
}


.product .icons a {
  display: block;
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.7rem;
  color: var(--black);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  margin-top: 0.7rem;
}

.product .icons a:hover {
  background: var(--green);
  color: #fff;
}

.product .icons a i {
  padding-right: 0.5rem;
}
</style>
