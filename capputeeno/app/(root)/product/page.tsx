"use client"
import ReturnButton from "@/components/ReturnButton";
import ShoppingIcon from "@/components/icons/ShoppingIcon";
import { useProduct } from "@/hooks/useProduct";
import formatPrice from "@/utils/formatPrice";
import styled from "styled-components"

const ProductWrapper = styled.div`
  padding: 20px 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;

    img {
      width: 50%;
      max-width: 640px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        padding: 10px;
        text-transform: uppercase;
        font-family: inherit;
        text-align: center;
        font-weight: 500;
        color: var(--shapes-light-bg);
        border: none;
        border-radius: 4px;
        background: #115D8C;
        cursor: pointer;
      }
    }
  }
`;

const ProductDetailsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 12px;
    line-height: 150%;
    color: var(--dark-color-strong);
  }

  h2 + span {
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark);
    padding-top: 4px;
  }

  h2 {
    font-size: 32px;
    line-height: 150%;
    font-weight: 300;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--dark-color-strong);
    margin-top: 16px;
    margin-bottom: 58px;
  }

  div {
    h3 {
      line-height: 150%;
      text-transform: uppercase;
      font-weight: 500;
      color: var(--dark-color-apoio);
      font-size: 16px;
    }

    p {
      color: var(--dark-color-strong);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

const ShoppingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 108px;
  text-transform: uppercase;
  font-family: inherit;
  line-height: 150%;
  font-weight: 500;
  font-size: 16px;
  color: var(--shapes-light-bg);
  border: none;
  border-radius: 4px;
  background: #115D8C;
  cursor: pointer;
`;

const Product = ({searchParams}: {searchParams: {id: string}}) => {
  const { data } = useProduct(searchParams.id)

  return (
    <ProductWrapper>
      <ReturnButton navigate="/" />
      <section>
        <img alt={data?.id || ""} src={data?.image_url || ""} />
        <div>
          <ProductDetailsWrapper>
            <span>{(data?.category)}</span>
            <h2>{data?.name}</h2>
            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$ 100,00.</p>
            <div>
              <h3>Descrição</h3>
              <p>{data?.description}</p>
            </div>
          </ProductDetailsWrapper>
          <ShoppingButton>
            <ShoppingIcon /> Adicionar ao carrinho
          </ShoppingButton>
        </div>
      </section>
    </ProductWrapper>
  )
}

export default Product