import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { IconTemplate } from "../SHARED/IconTemplate/IconTemplate";

export const Nav = styled.nav`
  background-color: ${({ theme: { color } }) => color.spinDarkGray};
  padding: 5px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }
`;

export const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavLogo = styled.div`
    font-size: ${({ theme: { font } }) => font.xxxl}
    font-weight: 600;
    padding: 10px 0 10px;
`;

export const NavSearchInput = styled.div`
  width: 35%;
  position: relative;
  margin: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: ${({ theme: { color } }) => color.spinBetDark};
  & > input {
    width: 100%;
    font-size: large;
    background-color: ${({ theme: { color } }) => color.spinBetDark};
    outline: none;
    padding: 0.7rem;
    margin-left: 2rem;
    border: none;
    color: ${({ theme: { color } }) => color.spinBetWhite};
  }
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
`;
export const SearchIconContainer = styled.div`
  position: absolute;
  margin-left: 5px;
  color: ${({ theme: { color } }) => color.spinBetWhite};
`;

export const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <NavLogo>
          <Image
            src="/assets/spinbet-logo.svg"
            width="120"
            height={27}
            alt="Spinbet"
          />
        </NavLogo>
        <NavSearchInput>
          <input type="text " placeholder="Search match" />
          <SearchIconContainer>
            <IconTemplate svgName="ic:baseline-search" svgWidth={28} />
          </SearchIconContainer>
        </NavSearchInput>
        <NavMenu>
          <IconTemplate label="BLOG" svgName="carbon:blog" />
          <IconTemplate
            label="Gifts"
            svgName="material-symbols:featured-seasonal-and-gifts-rounded"
          />
          <IconTemplate label="DROPING ODDS" svgName="ph:trend-down" />
          <IconTemplate label="NOTIFICATION" svgName="ep:notification" />
        </NavMenu>
      </NavContent>
    </Nav>
  );
};
