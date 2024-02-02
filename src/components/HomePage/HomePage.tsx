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

const FilterButton = styled.button<{ $active?: boolean }>`
  font-weight: 545;
  background: transparent;
  color: ${({ theme: { color }, $active }) =>
    $active ? color.spinGreen : color.spinDarkGray};
  border: none;
  border-bottom: 2px solid
    ${({ theme: { color }, $active }) =>
      $active ? color.spinGreen : "transparent"};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.75rem;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${({ theme: { color } }) => color.spinGreen};
    color: ${({ theme: { color } }) => color.spinGreen};
  }
  & > span {
    margin-left: 5px;
    font-weight: 500;
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
  background-color: #e5e7eb;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: space-between;
    min-width: 1280px;
  }
`;

const FilterButtonsContainer = styled.nav`
  display: flex;
  padding-right: 0.9rem;
`;

const ScoreCardsOuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 74rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
`;

const ScoreCardsContainer = styled.section`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const ScoreCardsSection = styled.section`
  resize: both;
  margin-top: 8px;
  height: 100%;
  overflow-y: scroll;
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
          <FilterButtonsContainer>
            <FilterButton $active>
              ALL <span>(179)</span>
            </FilterButton>
            <FilterButton>
              RESULT <span>(179)</span>
            </FilterButton>
            <FilterButton>
              LIVE <span>(179)</span>
            </FilterButton>
            <FilterButton>
              UPCOMING <span>(179)</span>
            </FilterButton>
          </FilterButtonsContainer>
        </TopSectionContentWrapper>
      </TopSection>
      <ScoreCardsSection>
        <ScoreCardsOuterWrapper>
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
            <ScoreBoardCard />
            <ScoreBoardCard />
            <ScoreBoardCard />
          </ScoreCardsContainer>
        </ScoreCardsOuterWrapper>
      </ScoreCardsSection>
    </LayoutContainer>
  );
};
