"use client"
import styled from "styled-components";
import FilterType from "./FilterTypes";

interface FilterBarProps {

}

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`;

const FilterBar = (props: FilterBarProps) => {
  return (
    <FilterWrapper>
      <FilterType />
    </FilterWrapper>
  )
}

export default FilterBar