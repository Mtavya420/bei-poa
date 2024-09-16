<template>
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <a href="#" class="logo"><font-awesome-icon icon="shopping-basket"  color="#CB3066"/> Bei Poa</a>
        <p>Shop with Bei Poa to get electronics of choice at an affordable Prices. Learn more about us on social medias below</p>
        <div class="share">
          <a href="#" class="btn">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="#" class="btn">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://www.instagram.com/beipoa_korea/" class="btn">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="btn">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>

      </div>

      <div class="box">
        <h3>our location</h3>
        <div class="links">
          <a href="#">Lumumba, Dar es salaam</a>
          <a href="#">Mwanza</a>
          <a href="#">Tanga</a>
          <a href="#">Arusha</a>
        </div>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <div class="links">
          <a href="#">home</a>
          <a href="#">category</a>
          <a href="#">product</a>
          <a href="#">deal</a>
        </div>
      </div>

      <div class="box">
        <h3>download app</h3>
        <div class="links">
          <a href="#">Google Play</a>
          <a href="#">Apple store</a>
        </div>
      </div>
    </div>

    <h1 class="credit"> Created by <span> BeiPoa </span></h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


export default defineComponent({
  name: 'Footer',
  components: {FontAwesomeIcon},

});
</script>

<style scoped>

.footer .box-container{
  display: flex;
  gap:1.5rem;
  flex-wrap: wrap;
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

.footer .box-container .box{
  padding:1rem 0;
  flex:1 1 25rem;
}

.footer .box-container .box .share a{
  padding:0;
  height:4rem;
  width:4rem;
  line-height: 4rem;
  text-align: center;
}

.footer .box-container .box h3{
  font-size: 2.5rem;
  color:var(--black);
}

.footer .box-container .box p{
  font-size: 1.3rem;
  color:#666;
  padding:.7rem 0;
}

.footer .box-container .box .links{
  padding:1rem 0;
}

.footer .box-container .box .links a{
  display: block;
  padding:.5rem 0;
  font-size: 1.7rem;
  color:#333;
}

.footer .box-container .box .links a:hover{
  text-decoration: underline;
  color:var(--green);
}

.footer .credit{
  padding:2.5rem 1rem;
  border-top: .1rem solid rgba(0,0,0,.1);
  margin-top: 1rem;
  text-align: center;
  font-size: 2rem;
}

.footer .credit span{
  color:var(--green);
}

</style>
