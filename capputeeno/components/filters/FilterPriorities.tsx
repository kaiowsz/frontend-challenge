import styled from "styled-components"
import ArrowIcon from "../icons/ArrowIcon";
import { useState } from "react";

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--dark-color-apoio);
  }
`;

const PriorityFilter = styled.div`

`

const FilterPriorities = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen)
  }
  
  return (
    <FilterWrapper>
      <p>Organizar por <ArrowIcon/> </p>
    </FilterWrapper>
  )
}

export default FilterPriorities
