import React from "react";
import styled from "styled-components";

interface Props {
  matchStatus: string | undefined;
  liveStatus: string | undefined;
}

const OuterBox = styled.div<{ $deg: number }>`
  width: 84px;
  height: 84px;
  position: relative;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme: { color } }) => color.spinGreen} 0turn ${({ $deg }) => $deg}deg,
    #4a535f 0turn
  );
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 82px;
    height: 82px;
  }
`;
const InnerBox = styled.div`
  position: absolute;
  width: 81px;
  height: 81px;
  background-color: #3d3d3d;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  @media (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1.2rem;
    width: 79px;
    height: 79px;
  }
`;

export const MatchProgress = () => {
  return (
    <OuterBox $deg={90} data-testid="outer-box">
      <InnerBox>FT</InnerBox>
    </OuterBox>
  );
};
