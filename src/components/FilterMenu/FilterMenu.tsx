import { MatchesContext } from "@/context/MatchesContextProvider";
import React, { useContext } from "react";
import styled from "styled-components";

const FilterButtonsContainer = styled.nav`
  display: flex;
  padding-right: 0.9rem;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  font-weight: 545;
  background: transparent;
  color: ${({ theme: { color }, $active }) =>
    $active ? color.spinGreen : color.spinDarkGray};
  border: none;
  border-bottom: 2px solid
    ${({ theme: { color }, $active }) =>
      $active ? color.spinGreen : "transparent"};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.75rem;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${({ theme: { color } }) => color.spinGreen};
    color: ${({ theme: { color } }) => color.spinGreen};
  }
  & > span {
    margin-left: 5px;
    font-weight: 500;
  }
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.7rem !important;
  }
  @media (min-width: ${({ theme: { screen } }) =>
      screen.md}) and (max-width: ${({ theme: { screen } }) => screen.xl}) {
    margin-right: 3px;
  }
`;

export const FilterMenu = () => {
  const { filters, handleSetActiveFilter, activeFilter } =
    useContext(MatchesContext);

  return (
    <FilterButtonsContainer>
      {filters.map(({ filter, count }) => {
        const isActive = filter === activeFilter.filter;
        return (
          <FilterButton
            key={filter}
            $active={isActive}
            onClick={() => handleSetActiveFilter({ filter, count })}
          >
            {filter} <span>({count})</span>
          </FilterButton>
        );
      })}
    </FilterButtonsContainer>
  );
};
