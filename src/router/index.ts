import {createRouter, createWebHistory} from "vue-router";
import CartView from "../Views/CartView.vue";
import ProductLike from "../Views/ProductLike.vue";

const routes = [
    {
        path: '/products',
        name: 'LikableProducts',
        component: ProductLike
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
