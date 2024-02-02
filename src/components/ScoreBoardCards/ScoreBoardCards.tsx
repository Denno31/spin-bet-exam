import { getMatchesDataForScoreBoard } from "@/utils/getMatchesData";
import React, { useContext, useMemo } from "react";
import { MatchesContext } from "@/context/MatchesContextProvider";
import { FilterType, Match } from "@/types/types";
import sportsData from "@/data/sports.json";

export const ScoreBoardCards = () => {
  const { activeFilter } = useContext(MatchesContext);
  const matchesData: Match[] = useMemo(
    () =>
      getMatchesDataForScoreBoard(
        sportsData,
        FilterType[activeFilter.filter as keyof typeof FilterType]
      ),
    [activeFilter.filter]
  );
  console.log(matchesData);
  return <div>ScoreBoardCards</div>;
};
