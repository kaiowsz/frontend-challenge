"use client"

import { FilterType } from "@/@types/FilterTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    page: 0,
    search: "",
    type: FilterType.ALL,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

export function FilterContextProvider({children}: { children: ReactNode }) {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            setPage,
            setSearch,
            setType,
        }}>
            {children}
        </FilterContext.Provider>
    )
}