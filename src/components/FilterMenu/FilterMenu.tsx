import { MatchesContext } from "@/context/MatchesContextProvider";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";

const FilterButtonsContainer = styled.nav`
  display: flex;
  padding-right: 0.9rem;
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
  const router = useRouter();
  const { filters } = useContext(MatchesContext);
  const filterKey = router.query["filter-key"];

  return (
    <FilterButtonsContainer>
      {filters.map(({ filter, count }) => {
        const isActive = filterKey === filter.toLowerCase();
        return (
          <FilterButton key={filter} $active={isActive}>
            {filter} <span>({count})</span>
          </FilterButton>
        );
      })}
    </FilterButtonsContainer>
  );
};