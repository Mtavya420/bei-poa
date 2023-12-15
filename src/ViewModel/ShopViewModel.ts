import {CartItem, Product} from "../assets/interfaces";
import ProductServices from "../services/ProductServices.ts";


export default class ShopViewModel {
    private static instance: null | ShopViewModel = null
    showAddShop = false
    private _productLikeList: Product[] = []
    private _cartList: Product[] = []
    private _products: Product[] = [];

    private constructor() {
            this.loadProducts().then(r =>  console.log(r))
    }



    static getInstance() {
        if (!ShopViewModel.instance) {
            ShopViewModel.instance = new ShopViewModel()
        }
        return ShopViewModel.instance
    }

    addProductLike(product: Product) {
        this._productLikeList.push(product)
    }

    get productLikeList(): Product[] {
        return this._productLikeList
    }

get products(): Product[] {
        return this._products
    }


    async loadProducts() {
        try {
            this._products = await ProductServices.getProducts();
        }
        catch (e) {
            console.error(e)
        }
    }


    deleteProductLike(product: Product) {
        this._productLikeList = this._productLikeList.filter((t) => t.id !== product.id)
    }

    toggleAddShop(): void {
        this.showAddShop = !this.showAddShop
    }

    addToCart(product: Product) {
        this._cartList.push(product)
    }

    get cartList(): CartItem[] {
        return this._cartList
    }




}
