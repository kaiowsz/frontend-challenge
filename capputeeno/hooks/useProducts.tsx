import { ProductFetchResponse } from "@/@types/ProductFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function fetchProductsFunction(): AxiosPromise<ProductFetchResponse> {
    return axios.post(API_URL, {
        query: `query {
            allProducts {
                name,
                price_in_cents,
                id,
                image_url,
            }
        }`
    })
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetchProductsFunction,
        queryKey: ["products"]
    })

    return {
        data: data?.data?.data?.allProducts
    }
}