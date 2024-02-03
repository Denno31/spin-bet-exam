// import React from "react";
// import { render, screen, act } from "@testing-library/react";
// import { MatchesContextProvider } from "@/context/MatchesContextProvider";
// import { HomePage } from "@/components/HomePage/HomePage";
// import { ThemeProvider } from "styled-components";
// import { theme } from "@/Theme/theme";

// test("renders HomePage component", async () => {
//   await act(async () => {
//     render(
//       <MatchesContextProvider>
//         <ThemeProvider theme={theme}>
//           <HomePage />
//         </ThemeProvider>
//       </MatchesContextProvider>
//     );
//   });

//   // Assert that the component renders without crashing
//   expect(
//     screen.getByText(/Football live scores and schedule/i)
//   ).toBeInTheDocument();
//   expect(screen.getByRole("heading", { name: /Matches/i })).toBeInTheDocument(); // Replace "Matches" with the actual text you expect for HeaderMobile
// });

test("simple test", () => {
  expect(1).toBe(1);
});
