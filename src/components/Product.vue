<template>
  <section class="product" id="product">
    <h1 class="heading">latest <span>products</span></h1>

    <div class="box-container">
      <div class="box" v-for="product in products" :key="product.id">
        <span class="discount">{{ product.discount }}</span>
        <div class="icons">
          <a  class="icon" @click="addProductLike(product)">
            <font-awesome-icon :icon="['fas', 'heart']" />
          </a>
          <a href="#" class="icon">
            <font-awesome-icon :icon="['fas', 'share']" />
          </a>
          <a href="#" class="icon">
            <font-awesome-icon :icon="['fas', 'eye']" />
          </a>
        </div>
        <img :src="product.imageUrl" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <div class="stars">
          <!-- Render stars based on product.rating -->
        </div>
        <div class="price">  {{ product.price }} <span> {{ product.originalPrice }} </span> </div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1">
        </div>
        <a class="btn" @click="addToCart(product)">add to cart</a>
      </div>
      <!-- End of product div -->
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {Product} from "../assets/interfaces";
import ShopViewModel from "../ViewModel/ShopViewModel.ts";

export default defineComponent({
  name: 'Product',

  setup() {
    const shopViewModel = ShopViewModel.getInstance();
    const products = ref(shopViewModel.products);

    const addToCart = (product: Product) => {
      shopViewModel.addToCart(product);
    };
    const addProductLike = (product: Product) => {
      shopViewModel.addProductLike(product);
    };



    onMounted(async () => {
      await shopViewModel.loadProducts();
      products.value = shopViewModel.products;
    });

    return {
      products,
      addToCart,
      addProductLike,
    };
  },


});
</script>

<style scoped>
.product .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.product .box-container .box{
  flex:1 1 30rem;
  text-align: center;
  padding:2rem;
  border:.1rem solid rgba(0,0,0,.3);
  border-radius: .5rem;
  overflow: hidden;
  position: relative;
}

.product .box-container .box img{
  height: 20rem;
}

.product .box-container .box .discount{
  position: absolute;
  top:1rem; left: 1rem;
  background:rgba(0,255,0,.1);
  color:var(--green);
  padding:.7rem 1rem;
  font-size: 2rem;
}

.product .box-container .box .icons{
  position: absolute;
  top:.5rem; right:-6rem;
}

.product .box-container .box:hover .icons{
  right:1rem;
}

.product .box-container .box .icons a{
  display: block;
  height:4.5rem;
  width:4.5rem;
  line-height: 4.5rem;
  font-size: 1.7rem;
  color:var(--black);
  background:rgba(0,0,0,.05);
  border-radius: 50%;
  margin-top: .7rem;
}

.product .box-container .box .icons a:hover{
  background:var(--green);
  color:#fff;
}

.product .box-container .box h3{
  color:var(--black);
  font-size: 2.5rem;
}

.product .box-container .box .stars i{
  padding:1rem .1rem;
  font-size: 1.7rem;
  color:gold;
}

.product .box-container .box .price{
  font-size: 2rem;
  color:#333;
  padding:.5rem 0;
}

.product .box-container .box .price span{
  font-size: 1.5rem;
  color:#999;
  text-decoration: line-through;
}

.product .box-container .box .quantity{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: .5rem;
}

.product .box-container .box .quantity span{
  padding:0 .7rem;
  font-size: 1.7rem;
}

.product .box-container .box .quantity input{
  border:.1rem solid rgba(0,0,0,.3);
  font-size: 1.5rem;
  font-weight: bolder;
  color:var(--black);
  padding:.5rem;
  background:rgba(0,0,0,.05);
}

.product .box-container .box .btn{
  display: block;
}
</style>
