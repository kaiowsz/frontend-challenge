import useLocalStorage from "@/hooks/useLocalStorage"
import CartIcon from "./icons/CartIcon"
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
    const {value} = useLocalStorage("cart-items", []);

    return (
        <CartCountWrapper>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount> }
        </CartCountWrapper>
    )
}

export default CartControl