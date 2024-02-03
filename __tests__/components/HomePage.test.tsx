import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { MatchesContextProvider } from "@/context/MatchesContextProvider";
import { HomePage } from "@/components/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "@/Theme/theme";

describe("The home page component should exist in the DOM", () =>
  test("renders HomePage component", async () => {
    await act(async () => {
      render(
        <MatchesContextProvider>
          <ThemeProvider theme={theme}>
            <HomePage />
          </ThemeProvider>
        </MatchesContextProvider>
      );
    });

    expect(
      screen.getByText(/Football live scores and schedule/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Matches/i })
    ).toBeInTheDocument(); // Replace "Matches" with the actual text you expect for HeaderMobile
  }));
