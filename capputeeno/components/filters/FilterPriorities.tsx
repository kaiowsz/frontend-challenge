import styled from "styled-components"
import ArrowIcon from "../icons/ArrowIcon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { FilterPriority } from "@/@types/FilterPriority";

const FilterWrapper = styled.div`
  position: relative;

  button {
    border: none;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--dark-color-apoio);
    cursor: pointer;

    svg {
      margin-left: 8px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  width: 200px;
  z-index: 10;
  right: 8px;

  li {
    color: var(--dark-color-apoio);
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    padding-top: 4px;
  }

  list-style: none;
`

const FilterPriorities = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  function handleToggleOpen() {
    setIsOpen(!isOpen)
  }

  function handleUpdatePriority(priorityProps: FilterPriority) {
    setPriority(priorityProps);
    handleToggleOpen();
  }
  
  return (
    <FilterWrapper>
      <button onClick={handleToggleOpen}>Organizar por <ArrowIcon/> </button>

      {isOpen && (
      <PriorityFilter>
        <li onClick={() => handleUpdatePriority(FilterPriority.NEW)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.BIGGEST_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.LOWEST_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(FilterPriority.POPULAR)}>Mais vendidos</li>
      </PriorityFilter>)}
    </FilterWrapper>
  )
}

export default FilterPriorities