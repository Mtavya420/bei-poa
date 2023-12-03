<template>
  <section class="category" id="category">
    <h1 class="heading">shop by <span>category</span></h1>

    <div class="box-container">
      <div class="box">
        <h3>Samsung Phones</h3>
        <p>upto 50% off</p>
        <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2020/02/Press-Thumbnail-1000x563-Galaxy-Z-Flip.jpg" alt="">
        <a href="#" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Samsung Earbuds</h3>
        <p>upto 44% off</p>
        <img src="https://i.ebayimg.com/images/g/7HMAAOSw9xJhErlx/s-l1600.jpg" alt="">
        <a href="#" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Apple iPhones Original</h3>
        <p>upto 35% off</p>
        <img src="https://images.macrumors.com/t/jiIRguBAWDObtAWJ1gBs-5wCi_o=/800x0/smart/https://images.macrumors.com/article-new/2019/10/iphone12-lineup-wide.jpg?lossy" alt="">
        <a href="#" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Apple Macbooks</h3>
        <p>upto 12% off</p>
        <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/397930677089402-49883464-9768-4489-b9e0-eff2b83c6a27.jpg" alt="">
        <a href="#" class="btn">shop now</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Category',
});
</script>

<style scoped>
/* Add your CSS styles for the CategorySection component here */
.category .box-container{
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1rem;
}

.category .box-container .box{
  border:.1rem solid rgba(0,0,0,.3);
  border-radius: .5rem;
  text-align: center;
  padding:2rem;
  flex:1 1 25rem;
  position: relative;
}
.category .box-container .box a {
  position: absolute;
  bottom: 5px;
  left: 25%;
}

.category .box-container .box img{
  width: 20rem;
  margin:.5rem 0;
  margin-bottom: 10px;
}

.category .box-container .box h3{
  font-size: 3.5rem;
  color:var(--black);
}

.category .box-container .box p{
  font-size: 2rem;
  color:#666;
  padding:.5rem 0;
}

.category .box-container .box .btn{
  display: block;
}

/* ... additional styles ... */
</style>
