"use client"

import FilterBar from '@/components/filters/FilterBar'
import { FilterContextProvider } from '@/contexts/FilterContext'
import styles from "./page.module.css"
import ProductsList from '@/components/ProductsList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient();

  return (
    <FilterContextProvider>
      <QueryClientProvider client={client}>
        <main className={styles.main}>
          <FilterBar />
          <ProductsList />
        </main>
      </QueryClientProvider>
    </FilterContextProvider>
  )
}
