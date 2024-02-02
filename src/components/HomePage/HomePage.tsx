import React, { useMemo } from "react";
import { LayoutContainer } from "../SHARED/LayoutContainer/LayoutContainer";
import { styled } from "styled-components";
import { ScoreBoardCard } from "../ScoreBoardCard/ScoreBoardCard";
import { getMatchesFilters } from "@/utils/getMatchesFilters";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { ScoreBoardCards } from "../ScoreBoardCards/ScoreBoardCards";

const Header = styled.h1`
  font-size: medium;
  color: ${({ theme: { color } }) => color.spinLightGray};
  font-weight: 500;
  margin: 10px 0px;
  @media (max-width: ${({ theme: { screen } }) => screen.xl}) {
    display: none;
  }
`;

const TopSection = styled.div`
  background-color: #e5e7eb;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: space-between;
    min-width: 1280px;
  }
`;

const TopSectionContentWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0.2rem 3.5rem 0.2rem 3.5rem;
`;

export const HomePage = () => {
  return (
    <LayoutContainer>
      <TopSection>
        <TopSectionContentWrapper>
          <Header>Football live scores and schedule</Header>
          <FilterMenu />
        </TopSectionContentWrapper>
      </TopSection>

      <ScoreBoardCards />
    </LayoutContainer>
  );
};
