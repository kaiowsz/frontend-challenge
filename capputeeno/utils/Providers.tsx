"use client"

import { FilterContextProvider } from '@/contexts/FilterContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({children}: ProvidersProps) => {
    const client = new QueryClient();

    return (
    <FilterContextProvider>
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
    </FilterContextProvider>
    )
}

export default Providers