import React from "react";
import { LayoutContainer } from "../SHARED/LayoutContainer/LayoutContainer";
import { styled } from "styled-components";
import { ScoreBoardCard } from "../ScoreBoardCard/ScoreBoardCard";

const Header = styled.h1`
  font-size: medium;
  color: ${({ theme: { color } }) => color.spinLightGray};
  font-weight: 500;
  margin: 10px 0px;
  @media (max-width: ${({ theme: { screen } }) => screen.xl}) {
    display: none;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background: transparent;
  color: ${({ theme: { color }, $active }) =>
    $active ? color.spinGreen : color.spinBetWhite};
  border: 1px solid
    ${({ theme: { color }, $active }) =>
      $active ? color.spinGreen : color.spinBetWhite};
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  font-weight: 400;
  font-size: small;
  margin-right: 5px;
  cursor: pointer;
  & > span {
    margin-left: 5px;
  }
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.7rem !important;
  }
  @media (min-width: ${({ theme: { screen } }) =>
      screen.md}) and (max-width: ${({ theme: { screen } }) => screen.xl}) {
    margin-right: 3px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const FilterButtonsContainer = styled.nav`
  display: flex;
`;

const ScoreCardsContainer = styled.section`
  margin-top: 12px;
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ScoreCardsSection = styled.section`
  height: 88vh;
`;

export const HomePage = () => {
  return (
    <LayoutContainer>
      <TopSection>
        <Header>Football live scores and schedule</Header>
        <FilterButtonsContainer>
          <FilterButton $active>ALL 179</FilterButton>
          <FilterButton $active>RESULT 179</FilterButton>
          <FilterButton $active>LIVE 179</FilterButton>
          <FilterButton $active>UPCOMING 179</FilterButton>
        </FilterButtonsContainer>
      </TopSection>
      <ScoreCardsSection>
        <ScoreCardsContainer>
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
          <ScoreBoardCard />
        </ScoreCardsContainer>
      </ScoreCardsSection>
    </LayoutContainer>
  );
};
