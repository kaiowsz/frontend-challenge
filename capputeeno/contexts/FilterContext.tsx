"use client"

import { FilterPriority } from "@/@types/FilterPriority";
import { FilterType } from "@/@types/FilterType";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    page: 0,
    search: "",
    type: FilterType.ALL,
    priority: FilterPriority.NEW,
    setPage: (value: number) => {},
    setSearch: (value: string) => {},
    setType: (value: FilterType) => {},
    setPriority: (value: FilterPriority) => {},
})

export function FilterContextProvider({children}: { children: ReactNode }) {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(FilterPriority.NEW)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            priority,
            setPriority,
            setPage,
            setSearch,
            setType,
        }}>
            {children}
        </FilterContext.Provider>
    )
}