<template>
  <section class="home" id="home">
    <div class="content">
      <span>Original and Great designed Devices</span>
      <h3>Electronics from South Korea</h3>
      <a href="#" class="btn" style="border-radius: 10px;">Get started</a>
    </div>

    <div class="image">
      

      <img src="/s24ultra.png" alt="" style="width:300px; height:350px;">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainHome',
});
</script>

<style scoped>

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.home .image {
  flex: 1 1 40rem;
  padding-top: 5rem;
}

.home .image img {
  width: 100%;
}
.home .content {
  flex: 1 1 40rem;
}

.home .content span{
  font-size: 5rem;
  color: #666;
}

.home .content h3 {
  font-size: 5rem;
  color: var(--black);
}
</style>
