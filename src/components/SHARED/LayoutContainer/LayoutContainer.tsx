import React, { ReactNode } from "react";
import { styled } from "styled-components";
interface Props {
  children: ReactNode;
}

const Container = styled.main`
  margin: 0.1rem auto;
  height: 88vh;
`;

export const LayoutContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
