import { FilterType, Match, MatchStatusType } from "@/types/types";

const getFilterStatus = (
  statusType: string,
  filterType: FilterType
): string => {
  switch (filterType) {
    case FilterType.Live:
      return MatchStatusType.Inprogress;
    case FilterType.Upcoming:
      return MatchStatusType.NotStarted;
    case FilterType.Result:
      return MatchStatusType.Finished;
    default:
      return statusType;
  }
};

export const getTransformedMatchesForScoreBoard = (
  matches: Match[],
  activeFilter: FilterType
) => {
  const filteredData = Array.from(matches).filter(
    (match) =>
      match.status.type === getFilterStatus(match.status.type, activeFilter)
  );
  return filteredData;
};
