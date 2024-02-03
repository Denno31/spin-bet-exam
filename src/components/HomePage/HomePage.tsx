import React, { useContext } from "react";
import { LayoutContainer } from "../SHARED/LayoutContainer/LayoutContainer";
import { styled } from "styled-components";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { ScoreBoardCards } from "../ScoreBoardCards/ScoreBoardCards";
import { MatchesContext } from "@/context/MatchesContextProvider";
import dynamic from "next/dynamic";

const FilterButtonMobile = dynamic(
  () => import("@/components/FilterButtonMobile/FilterButtonMobile")
);

const Header = styled.h1`
  font-size: medium;
  color: ${({ theme: { color } }) => color.spinLightGray};
  font-weight: 500;
  margin: 10px 0px;
`;

const HeaderMobile = styled(Header)`
  @media (min-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

const HeaderDesktop = styled(Header)`
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

const TopSection = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  justify-content: center;
`;

const TopSectionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0.2rem 1.4rem 0.2rem 1.4rem;
  margin: 0 auto;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 100%;
  }
`;

export const HomePage = () => {
  const {
    activeFilter: { filter },
    handleSetIsMobileMenuOpen,
  } = useContext(MatchesContext);
  return (
    <LayoutContainer>
      <TopSection>
        <TopSectionContentWrapper>
          <HeaderDesktop>Football live scores and schedule</HeaderDesktop>
          <HeaderMobile>{filter} Matches</HeaderMobile>
          <FilterMenu />
          <FilterButtonMobile handleClick={handleSetIsMobileMenuOpen} />
        </TopSectionContentWrapper>
      </TopSection>
      <ScoreBoardCards />
    </LayoutContainer>
  );
};
