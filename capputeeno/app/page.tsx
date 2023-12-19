"use client"

import FilterBar from "@/components/filters/FilterBar"
import ProductsList from "@/components/ProductsList"
import styled from "styled-components"

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <MainWrapper>
      <FilterBar />
      <ProductsList />
    </MainWrapper>
  )
}
