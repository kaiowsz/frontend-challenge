import { ProductCart } from "@/@types/Product";
import formatPrice from "@/utils/formatPrice";
import { ChangeEvent } from "react";
import styled from "styled-components";
import DeleteIcon from "./icons/DeleteIcon";

interface CartItemProps {
  product: ProductCart;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleDelete: (id: string) => void;
}


const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  height: 210px;
  position: relative;

  svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
    g {
      path {
        stroke: #c51c1c;
      }
    }
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    padding: 16px 24px;
    color: var(--dark-color-strong);
    line-height: 150%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      font-weight: 300;
      font-size: 20px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      p {
        font-size: 16px;
      }

      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid var(--border-dark);
  border-radius: 8px;
  background-color: var(--input-bg);
  color: var(--dark-color-apoio);
  font-size: 16px;
  font-weight: 400;
`;

const CartItem = ({ product, handleUpdateQuantity, handleDelete }: CartItemProps) => {

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    handleUpdateQuantity(product.id, Number(event.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-aria-label="Delete Button">
        <DeleteIcon />
      </button>
      <img src={product.image_url} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <Select value={product.quantity} onChange={(e) =>  handleChange(e)}>
            <option value={1}>1</option>            
            <option value={2}>2</option>            
            <option value={3}>3</option>            
            <option value={4}>4</option>            
            <option value={5}>5</option>            
          </Select>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}

export default CartItem