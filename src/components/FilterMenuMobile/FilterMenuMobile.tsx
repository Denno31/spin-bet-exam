import { MatchesContext } from "@/context/MatchesContextProvider";
import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const FilterMenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
`;
const FilterMenuInnerWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterMenuMobile = () => {
  const { filters } = useContext(MatchesContext);
  return (
    <FilterMenuWrapper $isOpen={true}>
      {filters.map(({ filter, count }) => (
        <FilterMenuInnerWrapper key={filter}>
          <button>{filter}</button>
          <span>({count})</span>
        </FilterMenuInnerWrapper>
      ))}
    </FilterMenuWrapper>
  );
};

export default FilterMenuMobile;
