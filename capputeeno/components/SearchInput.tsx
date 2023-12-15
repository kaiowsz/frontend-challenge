import styled from "styled-components"
import { SearchIcon } from "./SearchIcon";
import { InputHTMLAttributes } from "react";

const SearchWrapper = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const SearchInputStyle = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    line-height: 22px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background: var(--input-bg);
    color: var(--dark-color-apoio); 
    border: none;
`;

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const SearchInput = (props: SearchInputProps) => {
    return (
        <SearchWrapper>
            <SearchInputStyle {...props} />
            <SearchIcon />
        </SearchWrapper>
    )
}