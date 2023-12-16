"use client"

import { useProducts } from "@/hooks/useProducts"

const ProductsList = () => {
  
  const { data } = useProducts();
  console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default ProductsList