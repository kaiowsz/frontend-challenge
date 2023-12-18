import { ProductsFetchResponse } from "@/@types/ProductsFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/@types/FilterType";
import { FilterPriority } from "@/@types/FilterPriority";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function fetchProductsFunction(query: string): AxiosPromise<ProductsFetchResponse> {
    return axios.post(API_URL, {
        query
    })
}

function handleCategoryForQuery(filter: FilterType) {
    if(filter === FilterType.MUG) return "mugs";
    if(filter === FilterType.SHIRT) return "t-shirts";
}

function handlePriorityForQuery(priority: FilterPriority) {
    if(priority === FilterPriority.BIGGEST_PRICE) {
        return {field: "price_in_cents", order: "DSC"}
    }

    if(priority === FilterPriority.LOWEST_PRICE) {
        return {field: "price_in_cents", order: "ASC"}
    } 
    
    if(priority === FilterPriority.NEW) {
        return {field: "created_at", order: "ASC"}
    }

    return {field: "sales", order: "DSC"}
}

const mountQuery = (filter: FilterType, priority: FilterPriority) => {
    const sortSettings = handlePriorityForQuery(priority);
    const categoryFilter = handleCategoryForQuery(filter);

    if(filter === FilterType.ALL && priority === FilterPriority.POPULAR) {
        return `query {
            allProducts(sortField: "sales", sortOrder: "DSC") {
                name,
                price_in_cents,
                id,
                image_url,
            }
        }`
    }

    return `query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ""}) {
            name,
            price_in_cents,
            id,
            image_url
        }
    }`
}

export function useProducts() {
    const { type, priority, search } = useFilter();
    const searchValue = useDeferredValue(search);
    const query = mountQuery(type, priority);

    const { data } = useQuery({
        queryFn: () => fetchProductsFunction(query),
        queryKey: ["products", type, priority]
    })

    const products = data?.data?.data?.allProducts;
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())) 

    return {
        data: filteredProducts
    }
}