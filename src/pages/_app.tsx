import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { MatchesContextProvider } from "@/context/MatchesContextProvider";
import { theme } from "@/Theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MatchesContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MatchesContextProvider>
  );
}
