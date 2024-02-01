import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: yellow;
  color: #fff;
`;

export const Button = () => {
  return <StyledButton>styled button</StyledButton>;
};
