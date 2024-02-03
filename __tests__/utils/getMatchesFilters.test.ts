import { Match } from "@/types/types";
import { getMatchesFilters } from "@/utils/getMatchesFilters";
import matchesData from "@/data/sports.json";

test("getMatchesFilters returns correct filter counts", () => {
  const filters = getMatchesFilters(matchesData);

  expect(filters).toHaveLength(4);

  expect(filters).toEqual([
    { filter: "All", count: 179 },
    { filter: "Live", count: 18 },
    { filter: "Result", count: 93 },
    { filter: "Upcoming", count: 65 },
  ]);
});
