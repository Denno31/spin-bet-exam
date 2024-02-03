import React from "react";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { ScoreBoardCard } from "@/components/ScoreBoardCard/ScoreBoardCard";
import { MatchStatusType } from "@/types/types";
import { ThemeProvider } from "styled-components";
import { theme } from "@/Theme/theme";

const mockScoreCardMatch = {
  homeTeam: { name: "FK Tyumen", score: 0 },
  awayTeam: { name: "Luch-Energiya Vladivostok", score: 0 },
  country: "Russia",
  timestamp: 1470484800,
  id: "hbaffaf",
  competition: "Football National League",
  status: { type: "finished" as MatchStatusType, label: "ENDED" },
  liveStatus: "FT",
};

describe("ScoreCard Component", () =>
  test("renders ScoreBoardCard component", async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <ScoreBoardCard scoreCardMatch={mockScoreCardMatch} />
        </ThemeProvider>
      );
    });

    expect(screen.getByText(/Russia/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Football National League/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/ENDED/i)).toBeInTheDocument();
    expect(screen.getByText(/0 - 0/i)).toBeInTheDocument();
    expect(screen.getByText(/FK Tyumen/i)).toBeInTheDocument();
    expect(screen.getByText(/Luch-Energiya Vladivostok/i)).toBeInTheDocument();
  }));
