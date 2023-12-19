import styled from "styled-components"
import ReturnIcon from "./icons/ReturnIcon"
import { useRouter } from "next/navigation";

const ReturnButtonStyle = styled.button`
    display: flex;
    align-items: center;
    border: none;
    gap: 8px;
    color: var(--dark-color-texts);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    font-family: inherit;
    cursor: pointer;
`

interface ReturnButtonProps {
    navigate: string;
}

const ReturnButton = ({navigate}: ReturnButtonProps) => {

    const router = useRouter();
    function handleNavigate() {
        router.push(navigate);
    }

    return (
    <ReturnButtonStyle onClick={handleNavigate}>
        <ReturnIcon /> Voltar
    </ReturnButtonStyle>
    )
}

export default ReturnButton