import { Match } from "@/types/types";
import { transFormMatchesData } from "@/utils/getMatchesData";
import matchesData from "@/data/sports.json";

const mockMatches: Match[] = [matchesData[0]];

test("transFormMatchesData transforms matches data correctly", () => {
  const transformedData = transFormMatchesData(mockMatches);

  expect(transformedData).toHaveLength(mockMatches.length);

  expect(transformedData[0]).toEqual({
    homeTeam: { name: "FK Tyumen", score: 0 },
    awayTeam: { name: "Luch-Energiya Vladivostok", score: 0 },
    country: "Russia",
    timestamp: 1470484800,
    id: "hbaffaf",
    competition: "Football National League",
    status: { type: "finished", label: "ENDED" },
    liveStatus: "FT",
  });
});
