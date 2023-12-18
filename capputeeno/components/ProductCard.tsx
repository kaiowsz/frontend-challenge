import Image from "next/image";
import styled from "styled-components";

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
}

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0 0 4px 4px;
    width: 256px;

    img {
        object-fit: cover;
        border-radius: 4px 4px 0 0;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--dark-color-strong);
        padding: 8px 12px 0 12px;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        padding: 0px 12px 8px;
    }

    > div {
        width: 228px;
        height: 1px;
        background: var(--shapes);
        margin: 8px auto;
    }
`;

const ProductCard = ({image, price, title}: ProductCardProps) => {

    function formatPrice(price: number) {
        return (price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    return (
    <Card>
        <Image src={image} alt={title} width={256} height={300} />
        <h3>{title}</h3>
        <div />
        <p>{formatPrice(price)}</p>
    </Card>
    )
}

export default ProductCard