import { Product } from "./Products"

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
    }
}