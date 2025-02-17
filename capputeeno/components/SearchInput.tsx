import styled from "styled-components"
import { SearchIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";
import { useFilter } from "@/hooks/useFilter";

const SearchWrapper = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-width: 740px) {
        width: 250px;
    }
`

const SearchInputStyle = styled.input`
    width: 100%;
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

    @media (max-width: 740px) {
        line-height: 18px;
        font-size: 12px;
    }

`;

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const SearchInput = (props: SearchInputProps) => {
    const {setSearch, search} = useFilter();
    return (
        <SearchWrapper>
            <SearchInputStyle {...props} onChange={(event) => setSearch(event.target.value)} value={search} />
            <SearchIcon />
        </SearchWrapper>
    )
}