import React from "react";
import { styled } from "styled-components";
import { MatchProgress } from "../MatchProgress/MatchProgress";

const CardContainer = styled.div`
  flex: 1 1 auto;
  line-height: 1.75rem;
  border-radius: 0.375rem;
  overflow: hidden;
  padding: 1.5rem;
  text-align: center;
  background-color: #3d3d3d;
  color: #d1d5db;
  & > h3 {
    font-weight: bold;
    font-size: 1.25rem;
  }
  & > span {
    font-weight: 600;
  }
  & > p {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
  @media (min-width: 1024px) {
    max-width: 33%;
  }
`;

const CountryNameText = styled.small`
  font-size: 0.875rem;
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
      <CountryNameText>RUSSIA</CountryNameText>
      <h3>Football National League</h3>
      <small>ENDED</small>
      <p>0 - 0</p>
      <MatchProgressContainer>
        <span>FK Tyumen</span>
        <MatchProgress />
        <span>FK Tyumen</span>
      </MatchProgressContainer>
    </CardContainer>
  );
};
