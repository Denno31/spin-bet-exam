import React from "react";
import { styled } from "styled-components";
import { MatchProgress } from "../MatchProgress/MatchProgress";

const CardContainer = styled.div`
  max-width: 33%;
  background-color: ${({ theme: { color } }) => color.spinDarkGray};
  text-align: center;
  color: ${({ theme: { color } }) => color.spinBetWhite};
  padding: 1.2rem 0;
  border-radius: 5px;
`;

const MatchCountryWrapper = styled.small`
  font: medium;
  font-weight: 300;
`;

const CompetitionNameText = styled.h2`
  font-weight: 350;
  font-size: 1.3rem;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1.2rem;
  }
`;

const ScoreBoardMatchStatus = styled.p`
  margin-top: 10px;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    margin-top: 8px;
  }
`;

const ScoreBoardMatchScores = styled.h1`
  font-size: 2rem;
  font-weight: 350;
  margin: 12px 0;
`;

const MatchProgressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

export const ScoreBoardCard = () => {
  return (
    <CardContainer>
      <MatchCountryWrapper>RUSSIA</MatchCountryWrapper>
      <CompetitionNameText>Football National League</CompetitionNameText>
      <ScoreBoardMatchStatus>FT</ScoreBoardMatchStatus>
      <ScoreBoardMatchScores>0 - 0 </ScoreBoardMatchScores>
      <MatchProgressContainer>
        <p>FK Tyumen</p>
        <MatchProgress />
        <p>Luch-Energiya Vladivostok</p>
      </MatchProgressContainer>
    </CardContainer>
  );
};
