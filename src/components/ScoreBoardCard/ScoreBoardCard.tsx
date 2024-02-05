import React from "react";
import { styled } from "styled-components";
import { MatchProgress } from "../MatchProgress/MatchProgress";
import { ScoreCardMatch } from "@/types/types";
import { getDateFormatted } from "@/utils/utils";

interface Props {
  scoreCardMatch: ScoreCardMatch;
}

const CardContainer = styled.div`
  box-sizing: border-box;
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
    max-width: 49%;
  }
  @media (min-width: 1024px) {
    max-width: 33%;
  }
  @media (min-width: 280px) {
    width: 100%;
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
  @media (max-width: 280px) {
    & > span {
      font-size: small;
      display: inline-block;
    }
    text-overflow: ellipsis;
  }
`;

const ScoreBoardMatchStatus = styled.small<{ $matchStatus: string }>`
  margin-top: 10px;
  color: ${({ theme: { color }, $matchStatus }) => {
    switch ($matchStatus) {
      case "ENDED":
        return color.spinGreen;
      case "LIVE":
        return color.spinBetYellow;
      case "CANCELLED":
        return color.spinBetRed;
      default:
        return color.default;
    }
  }};
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    margin-top: 8px;
  }
`;

export const ScoreBoardCard = ({ scoreCardMatch }: Props) => {
  const {
    competition,
    country,
    status,
    homeTeam,
    awayTeam,
    timestamp,
    liveStatus,
  } = scoreCardMatch;
  const label =
    status.label === "UPCOMING" ? getDateFormatted(timestamp) : status.label;

  return (
    <CardContainer>
      <CountryNameText>{country}</CountryNameText>
      <h3>{competition}</h3>
      <ScoreBoardMatchStatus $matchStatus={label}>
        {label}
      </ScoreBoardMatchStatus>
      <p>
        {homeTeam.score} - {awayTeam.score}
      </p>
      <MatchProgressContainer>
        <span>{homeTeam.name}</span>
        <MatchProgress liveStatus={liveStatus} matchStatus={status.type} />
        <span>{awayTeam.name}</span>
      </MatchProgressContainer>
    </CardContainer>
  );
};
