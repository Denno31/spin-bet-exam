import { ReactNode, createContext, useMemo, useState } from "react";
import matchesData from "../data/sports.json";

import { FilterObject, Match } from "../types/types";
import { getMatchesFilters } from "@/utils/getMatchesFilters";

interface Props {
  children: ReactNode;
}

const matchFilters = getMatchesFilters(matchesData);

const initialState = {
  matches: matchesData,
  handleSetMatchesData: () => {},
  activeMatch: matchesData[0],
  handleSetActiveMatch: () => {},
  handleSetActiveFilter: () => {},
  filters: matchFilters,
  activeFilter: matchFilters[0],
  isMobileMenuOpen: false,
  handleSetIsMobileMenuOpen: () => {},
};

export const MatchesContext = createContext<{
  matches: Match[];
  handleSetMatchesData: (data: Match[]) => void;
  activeMatch: Match;
  handleSetActiveMatch: (match: Match) => void;
  filters: FilterObject[];
  activeFilter: FilterObject;
  handleSetActiveFilter: (filter: FilterObject) => void;
  isMobileMenuOpen: boolean;
  handleSetIsMobileMenuOpen: () => void;
}>(initialState);

export const MatchesContextProvider = ({ children }: Props) => {
  const [matches, setMatchesData] = useState<Match[]>(matchesData);
  const [activeMatch, setActiveMatch] = useState<Match>(matchesData[0]);
  const [activeFilter, setActiveFilter] = useState(initialState.activeFilter);
  const [filters, setFilters] = useState(initialState.filters);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(
    initialState.isMobileMenuOpen
  );

  const handleSetMatchesData = (data: Match[]) => {
    setMatchesData(data);
  };
  const handleSetActiveMatch = (match: Match) => {
    setActiveMatch(match);
  };

  const handleSetActiveFilter = (filter: FilterObject) => {
    setActiveFilter(filter);
  };

  const handleSetIsMobileMenuOpen = () => {
    console.log("clicked");
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const contextValue = useMemo(
    () => ({
      matches,
      handleSetMatchesData,
      activeMatch,
      handleSetActiveMatch,
      filters,
      activeFilter,
      handleSetActiveFilter,
      handleSetIsMobileMenuOpen,
      isMobileMenuOpen,
    }),
    [matches, activeMatch, filters, activeFilter, isMobileMenuOpen]
  );

  return (
    <MatchesContext.Provider value={contextValue}>
      {children}
    </MatchesContext.Provider>
  );
};
