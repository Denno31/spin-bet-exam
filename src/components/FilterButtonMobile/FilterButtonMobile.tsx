import React from "react";
import { IconTemplate } from "../SHARED/IconTemplate/IconTemplate";
import styled from "styled-components";

interface Props {
  handleClick: () => void;
}

const FilterIconWrapper = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: inline-block;
    text-align: center;
  }
`;
const FilterButtonMobile = ({ handleClick }: Props) => {
  return (
    <FilterIconWrapper onClick={handleClick}>
      <IconTemplate
        svgName="fluent:filter-12-filled"
        svgWidth={20}
        svgColor="#44D25C"
      />
    </FilterIconWrapper>
  );
};

export default FilterButtonMobile;
