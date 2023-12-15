import FilterBar from '@/components/filters/FilterBar'
import { FilterContextProvider } from '@/contexts/FilterContext'

export default function Home() {
  return (
    <FilterContextProvider>
      <main>
        <FilterBar />
      </main>
    </FilterContextProvider>
  )
}
