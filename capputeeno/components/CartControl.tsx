import useLocalStorage from "@/hooks/useLocalStorage"
import CartIcon from "./icons/CartIcon"
import styled from "styled-components"
import { useRouter } from "next/navigation";

const CartCountWrapper = styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
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

    const router = useRouter();

    function handleNavigate() {
        router.push("/cart")
    }

    return (
        <CartCountWrapper onClick={handleNavigate}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount> }
        </CartCountWrapper>
    )
}

export default CartControl