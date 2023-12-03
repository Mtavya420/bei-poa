<template>
  <header>
    <div class="header-1">
      <a href="#" class="logo"><font-awesome-icon icon="shopping-basket"  color="#CB3066"/> Bei Poa</a>
      <form action="" class="search-box-container">
        <input type="search" id='search-box' placeholder="Search here...">
        <label for="search-box" class="search-icon"><font-awesome-icon icon="search" /></label>
      </form>
      <div class="icons">
        <a href="#" class="icon" @click="toggleCartVisibility">
          <font-awesome-icon icon="shopping-cart" />
        </a>
        <a href="#" class="icon" @click="toggleLikeProductView"><font-awesome-icon icon="heart" />
        </a>
        <a href="#" class="icon"><font-awesome-icon icon="user-circle" /></a>
        <font-awesome-icon icon="fa-bars" />
      </div>
    </div>
    <div class="nav-container" :class="{ active: isMenuActive }">
      <div id="menu-bar" @click="toggleMenu"><font-awesome-icon icon="bars" />
      </div>
      <nav class="nav-bar">
        <a href="#home">Home</a>
        <a href="#category">Category</a>
        <a href="#product">Products</a>
      </nav>
    </div>
    <div v-if="isCartVisible" class="cart-overlay">
      <CartView />
    </div>
    <div v-if="isLikeProductView" class="cart-overlay">
      <ProductLike />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CartView from "../Views/CartView.vue";
import ProductLike from "../Views/ProductLike.vue";

export default defineComponent({
  name: 'HeaderComponent',
  components: {ProductLike, CartView, FontAwesomeIcon},
  setup() {
    const isMenuActive = ref(false);
    const isCartVisible = ref(false);
    const isLikeProductView = ref(false);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const toggleLikeProductView = () => {
      isLikeProductView.value = !isLikeProductView.value;
    };

    const toggleCartVisibility = () => {
      isCartVisible.value = !isCartVisible.value;
    };

    return {
      isMenuActive,
      toggleMenu,
      isCartVisible,
      isLikeProductView,
      toggleCartVisibility,
      toggleLikeProductView,
    };
  },
});
</script>

<style scoped>
.header-1 {
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
}

.logo {
  color: var(--black);
  font-weight: bolder;
  font-size: 3rem;
}

.logo i {
  padding-right: .5rem;
  color: var(--green);
}

.header-1 .search-box-container {
  display: flex;
  height: 5rem;
}
.header-1 .search-box-container #search-box{
  height: 100%;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: #333;
  border: .1rem solid rgba(0,0,0, .3);
  text-transform: none;
}

.header-1 .search-box-container label {
  height: 100%;
  width: 8rem;
  font-size: 2.5rem;
  line-height: 5rem;
  color: #fff;
  background:var(--green);
  text-align: center;
  cursor: pointer;
}

.header-1 .search-box-container label:hover{
  background: var(--black);
}

.nav-container {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 2rem 9%;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
  position: relative;
}

.nav-container.active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}

.nav-container .nav-bar a{
  padding:.5rem 1.5rem;
  font-size: 2rem;
  border-radius: .5rem;
  color:var(--black);
}
.nav-container .nav-bar a:hover{
  background: var(--green);
  color: #fff;
}
.header-1 .icons a{
  font-size: 2.5rem;
  color:var(--black);
  padding-left: 1rem;
}

.header-1 .icons a:hover{
  color: var(--green);
}

#menu-bar{
  font-size: 3rem;
  border-radius: .5rem;
  border:.1rem solid var(--black);
  padding:.8rem 1.5rem;
  color:var(--black);
  cursor: pointer;
  display: none;
}
</style>

