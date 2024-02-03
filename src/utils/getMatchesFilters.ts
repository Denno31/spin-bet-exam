import { Match } from "@/types/types";

export const getMatchesFilters = (matches: Match[]) => {
  const allCount = matches.length;

  const resultCount = matches.filter(
    (match) => match.status.type === "finished"
  ).length;

  const liveCount = matches.filter(
    (match) => match.status.type === "inprogress"
  ).length;

  const upcomingCount = matches.filter(
    (match) => match.status.type === "notstarted"
  ).length;

  const filters = [
    { filter: "All", count: allCount },
    { filter: "Live", count: liveCount },
    { filter: "Result", count: resultCount },
    { filter: "Upcoming", count: upcomingCount },
  ];

  return filters;
};
