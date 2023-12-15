import {Product} from "../assets/interfaces";
import axios from "axios";

const API_URL = 'http://localhost:3000/api/products'

class ProductService {
    async getProducts(): Promise<Product[]> {
        const response = await axios.get(API_URL)
        return response.data
    }

    async postProduct(product: Product): Promise<Product> {
        const response = await axios.post(API_URL, product)
        return response.data
    }

    async updateProduct(product: Product): Promise<Product> {
        const response = await axios.put(API_URL, product)
        return response.data
    }

    async deleteProduct(id: number): Promise<Product> {
        const response = await axios.delete(API_URL + '/' + id)
        return response.data
    }
}

export default new ProductService()



