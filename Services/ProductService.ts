import axios from "axios"
export class ProductService {
    private static URL: string = "https://dummyjson.com"

    public static getAllProducts() {
        let ProductURL: string = `${this.URL}/products`
        return axios.get(ProductURL)
    }
}
