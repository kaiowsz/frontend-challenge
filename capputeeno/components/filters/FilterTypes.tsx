"use client"

import { FilterContext } from "@/contexts/FilterContext";
import { useFilter } from "@/hooks/useFilter";
import { useContext } from "react";
import styled from "styled-components"
import { FilterType } from "@/@types/FilterType";

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 740px) {
    gap: 25px;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  color: ${props => props.selected ? "var(--dark-color-input)" : "var(--dark-color-apoio)"};
  border-bottom: ${props => props.selected ? "4px solid var(--main-orange)" : ""};
  font-weight: ${props => props.selected  ? "600" : "400"};

  text-align: center;
  text-transform: uppercase;
  line-height: 22px;
  list-style: none;
  font-style: normal;
  font-size: 16px;
  color: var(--dark-color-apoio);
  cursor: pointer;

  @media (max-width: 740px) {
    line-height: 18px;
    font-size: 14px;
  }

`;

const FilterTypes = () => {

  const { type, setType } = useFilter();

  function handleChangeType(typeProps: FilterType) {
    setType(typeProps)
  }

  return (
    <FilterList>
        <FilterItem 
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
        >
          Todos os produtos
        </FilterItem>

        <FilterItem
         selected={type === FilterType.SHIRT}
         onClick={() => handleChangeType(FilterType.SHIRT)}
         >
          Camisetas
        </FilterItem>

        <FilterItem 
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
        >
          Canecas
        </FilterItem>
    </FilterList>
  ) 
}

export default FilterTypes