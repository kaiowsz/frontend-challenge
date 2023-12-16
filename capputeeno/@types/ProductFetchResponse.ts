import { Product } from "./Products"

export interface ProductFetchResponse {
    data: {
        allProducts: Product[]
    }
}