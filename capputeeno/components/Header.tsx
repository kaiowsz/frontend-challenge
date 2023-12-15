"use client"

import { saira, saira_stencil_one } from "@/app/layout";
import React from "react"
import { styled } from "styled-components"
import { SearchInput } from "./SearchInput";
import CartControl from "./CartControl";

const HeaderWrapper = styled.header`
    font-family: var(--font-saira);
    width: 100vw;
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 160px;

    @media screen and (max-width: 900px) {
      padding: 20px 40px;
    }

    @media screen and (max-width: 400px) {
      justify-content: center;
    }
`;

const HeaderTitle = styled.h1`
  font-weight: 400;
  color: var(--title-color);
`

const HeaderContent = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 400px) {
    display: none;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderTitle className={saira_stencil_one.className}>Capputeeno</HeaderTitle>
        <HeaderContent>
          <SearchInput placeholder="Procurando por algo específico?" />
          <CartControl />
        </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header