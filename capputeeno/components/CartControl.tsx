import useLocalStorage from "@/hooks/useLocalStorage"
import React from "react"
import CartIcon from "./CartIcon"
import styled from "styled-components"

const CartCountWrapper = styled.div`

`;

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 2px 7px;
    font-size: 10px;
    color: white;
    background: var(--delete-color);
    margin-left: -10px;
`;

const CartControl = () => {

    const {value} = useLocalStorage("cart-items")

    return (
        <CartCountWrapper>
            <CartIcon />
            {value.length && <CartCount>{value.length}</CartCount> }
        </CartCountWrapper>
    )
}

export default CartControl