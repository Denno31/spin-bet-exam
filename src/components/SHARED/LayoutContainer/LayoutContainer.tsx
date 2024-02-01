import React, { ReactNode } from "react";
import { styled } from "styled-components";
interface Props {
  children: ReactNode;
}

const Container = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0.1rem auto;
`;

export const LayoutContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
