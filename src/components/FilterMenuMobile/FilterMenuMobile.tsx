import { MatchesContext } from "@/context/MatchesContextProvider";
import React, { Dispatch, SetStateAction, useContext } from "react";

import styled, { keyframes } from "styled-components";

interface Props {
  isOpen: boolean;
}

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
  flex-direction: column;
`;

const FilterMenuMobileBtn = styled.button<{ $active?: boolean }>`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme: { color }, $active }) =>
    $active ? color.spinGreen : color.spinDarkGray};
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: 0.9rem;
  &:hover {
    color: ${({ theme: { color } }) => color.spinGreen};
  }
`;

const FilterNameWrapper = styled.span`
  font-weight: 500;
`;

const CloseButtonWrapper = styled.div`
  text-align: right;
  padding-right: 2.5rem;
  & > button {
    border: none;
    background-color: transparent;
    font-size: large;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
`;

const FilterMenuMobile = ({ isOpen }: Props) => {
  const {
    filters,
    handleSetActiveFilter,
    activeFilter,
    handleSetIsMobileMenuOpen,
  } = useContext(MatchesContext);
  return (
    <FilterMenuWrapper $isOpen={isOpen}>
      <CloseButtonWrapper>
        <CloseButton onClick={handleSetIsMobileMenuOpen}>X</CloseButton>
      </CloseButtonWrapper>
      <FilterMenuInnerWrapper>
        {filters.map(({ filter, count }) => {
          const isActive = filter === activeFilter.filter;
          return (
            <FilterMenuMobileBtn
              key={filter}
              $active={isActive}
              onClick={() => handleSetActiveFilter({ filter, count })}
            >
              <FilterNameWrapper>{filter}</FilterNameWrapper>
              <span>({count})</span>
            </FilterMenuMobileBtn>
          );
        })}
      </FilterMenuInnerWrapper>
    </FilterMenuWrapper>
  );
};

export default FilterMenuMobile;
