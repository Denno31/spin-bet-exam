import React from "react";
import styled from "styled-components";

interface Props {
  matchStatus: string | undefined;
  liveStatus: string | undefined;
}

const OuterBox = styled.div<{ $deg: number }>`
  width: 5rem;
  height: 5rem;
  position: relative;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme: { color } }) => color.spinGreen} 0turn ${({ $deg }) => $deg}deg,
    #4a535f 0turn
  );
`;
const InnerBox = styled.div`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  background-color: #3d3d3d;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.4rem;
`;

export const MatchProgress = () => {
  return (
    <OuterBox $deg={90} data-testid="outer-box">
      <InnerBox>FT</InnerBox>
    </OuterBox>
  );
};
