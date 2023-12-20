"use client"

import { Product, ProductCart } from "@/@types/Product";
import CartItem from "@/components/CartItem";
import ReturnButton from "@/components/ReturnButton";
import useLocalStorage from "@/hooks/useLocalStorage";
import formatPrice from "@/utils/formatPrice";
import styled from "styled-components"

const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0 160px;
    gap: 32px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
    
    @media screen and (max-width: 1024px) {
        padding: 0 20px;
    }
    `;

const CartListInfo = styled.div`
    margin-top: 24px; 

    h3 {
        font-size: 24px;
        font-weight: 500;
        color: var(--dark-color-strong);
        margin-top: 24px;

    }

    p {
        color: var(--dark-color-strong);
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 24px;

        span {
            font-weight: 600;
        }

    }

`;

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
`;

const CartResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;
    height: 100%;

    h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--dark-color-strong);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`;

interface TotalItemProps {
    isBold: boolean;
}

const TotalItem = styled.div<TotalItemProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    font-size: 16px;
    line-height: 150%;

    font-weight: ${props => props.isBold ? "600" : "400"};
`;

const Divider = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 1px;
    background-color: var(--shapes);    
    margin: 16px auto 10px auto;
`;

const ShopBtn = styled.button`
    text-transform: uppercase;
    background-color: #51b853;
    border-radius: 4px;
    color: white;
    padding: 12px 12px;
    line-height: 150%;
    width: 100%;
    border: none;
    font-family: inherit;
    cursor: pointer;
    font-size: 16px;
    margin-top: 40px;
`;

const Cart = () => {

    const { value, updateLocalStorage } = useLocalStorage<ProductCart[]>("cart-items", [])

    function calculateTotalPrice(value: ProductCart[]) {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
    }
    
    function handleUpdateQuantity(id: string, quantity: number) {
        const newValue = value.map(item => {
            if(item.id !== id) {
                return item 
            }
            
            return {...item, quantity: quantity}
        })
        
        updateLocalStorage(newValue)
    }
    
    function handleDelete(id: string) {
        const newValue = value.filter(item => {
            if(item.id !== id) {
                return item
            }
        });

        updateLocalStorage(newValue);
    }


    const cartTotal = calculateTotalPrice(value);
    const deliveryFee = 2000;
    const totalPrice = formatPrice(cartTotal + deliveryFee);

    
    return (
    <CartWrapper>
        <CartListInfo>
            <ReturnButton navigate="/" />
            <h3>SEU CARRINHO</h3>
            <p>Total ({value.length} produtos): <span>{formatPrice(cartTotal)}</span></p>
            <CartList>
                {value.map(item => <CartItem handleDelete={handleDelete} handleUpdateQuantity={handleUpdateQuantity} key={item.id} product={item} />)}
            </CartList>

        </CartListInfo>
        <CartResult>
            <h3>Resumo do pedido</h3>
            <TotalItem isBold={false}>
                <p>Subtotal de produtos</p>
                <p>{formatPrice(cartTotal)}</p>
            </TotalItem>
            <TotalItem isBold={false}>
                <p>Entrega</p>
                <p>{formatPrice(2000)}</p>
            </TotalItem>
            <Divider />
            <TotalItem isBold>
                <p>Total</p>
                <p>{totalPrice}</p>
            </TotalItem>
            <ShopBtn>Finalizar Compra</ShopBtn>
        </CartResult>
    </CartWrapper>
    )
}

export default Cart