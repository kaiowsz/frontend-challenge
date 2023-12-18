"use client"

import { useProducts } from "@/hooks/useProducts"
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 24px 32px;
  max-width: 100%;
  margin-top: 32px;

`

const ProductsList = () => {
  const { data } = useProducts();
  console.log(data)

  return (
    <ListContainer>
      {data?.map(product => (
        <ProductCard image={product.image_url} price={product.price_in_cents} title={product.name} key={product.id} />
      ))}
    </ListContainer>
  )
}

export default ProductsList