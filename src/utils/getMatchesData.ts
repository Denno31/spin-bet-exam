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

export const StatusObject = {
  finished: { type: MatchStatusType.Finished, label: "ENDED" },
  inprogress: { type: MatchStatusType.Inprogress, label: "LIVE" },
  notstarted: { type: MatchStatusType.NotStarted, label: "UPCOMING" },
  canceled: { type: MatchStatusType.Canceled, label: "CANCELLED" },
};

export const transFormMatchesData = (matches: Match[]) => {
  const transformedData = matches?.map(
    ({
      id,
      competition,
      country,
      timestamp,
      status,
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      liveStatus,
    }) => ({
      homeTeam: {
        name: homeTeam.name,
        score: homeScore.current ?? 0,
      },
      awayTeam: {
        name: awayTeam.name,
        score: awayScore.current ?? 0,
      },
      country,
      timestamp,
      id,
      competition,
      status: StatusObject[status.type as keyof typeof StatusObject],
      liveStatus,
    })
  );

  return transformedData;
};

export const getMatchesDataForScoreBoard = (
  matches: Match[],
  activeFilter: FilterType
) => {
  const filteredData = Array.from(matches).filter(
    (match) =>
      match.status.type === getFilterStatus(match.status.type, activeFilter)
  );
  return transFormMatchesData(filteredData);
};
