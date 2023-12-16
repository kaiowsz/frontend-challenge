import FilterBar from '@/components/filters/FilterBar'
import { FilterContextProvider } from '@/contexts/FilterContext'
import styles from "./page.module.css"

export default function Home() {
  return (
    <FilterContextProvider>
      <main className={styles.main}>
        <FilterBar />
      </main>
    </FilterContextProvider>
  )
}
