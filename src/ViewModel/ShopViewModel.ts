import {CartItem, Product} from "../assets/interfaces";


export default class ShopViewModel {
    private static instance: null | ShopViewModel = null
    showAddShop = false
    private _productLikeList: Product[] = []
    private _cartList: Product[] = []

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
