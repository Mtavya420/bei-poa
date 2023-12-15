
export interface CartItem  extends Product{
    quantity: number;
}

export interface Product  {
    id: number;
    discount: string;
    name: string;
    price: string;
    originalPrice?: string;
    image: string;
    rating: number;
    like: boolean;
    quantity: number;
}
