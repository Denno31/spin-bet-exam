import { getMatchesDataForScoreBoard } from "@/utils/getMatchesData";
import React, { useContext, useMemo } from "react";
import { MatchesContext } from "@/context/MatchesContextProvider";
import { FilterType, ScoreCardMatch } from "@/types/types";
import sportsData from "@/data/sports.json";
import styled from "styled-components";
import { ScoreBoardCard } from "../ScoreBoardCard/ScoreBoardCard";

const ScoreCardsOuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 74rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
  @media (min-width: 280px) {
    width: 100%;
    padding-right: 0.5px;
    padding-left: 0.5px;
  }
`;

const ScoreCardsContainer = styled.section`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ScoreCardsSection = styled.section`
  resize: both;
  margin-top: 8px;
  height: 100%;
  overflow-y: scroll;
`;

export const ScoreBoardCards = () => {
  const { activeFilter } = useContext(MatchesContext);
  const matchesData: ScoreCardMatch[] = useMemo(
    () =>
      getMatchesDataForScoreBoard(
        sportsData,
        FilterType[activeFilter.filter as keyof typeof FilterType]
      ),
    [activeFilter.filter]
  );

  return (
    <ScoreCardsSection>
      <ScoreCardsOuterWrapper>
        <ScoreCardsContainer>
          {matchesData.map((match) => (
            <ScoreBoardCard key={match.id} scoreCardMatch={match} />
          ))}
        </ScoreCardsContainer>
      </ScoreCardsOuterWrapper>
    </ScoreCardsSection>
  );
};
