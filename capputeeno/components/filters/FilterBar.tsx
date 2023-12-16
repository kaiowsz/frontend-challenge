"use client"
import styled from "styled-components";
import FilterType from "./FilterTypes";
import FilterPriorities from "./FilterPriorities";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: start;
  padding: 20px 160px;
`;

const FilterBar = () => {
  return (
    <FilterWrapper>
      <FilterType />
      <FilterPriorities />
    </FilterWrapper>
  )
}

export default FilterBar