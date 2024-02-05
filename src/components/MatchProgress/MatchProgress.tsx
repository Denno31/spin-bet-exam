import { getConicGradientDeg } from "@/utils/utils";
import React from "react";
import styled from "styled-components";

interface Props {
  matchStatus: string;
  liveStatus: string;
}

const OuterBox = styled.div<{ $deg: number }>`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme: { color } }) => color.spinGreen} 0turn ${({ $deg }) => $deg}deg,
    #4a535f 0turn
  );
  @media (max-width: 280px) {
    width: 3.6rem;
    height: 3.6rem;
  }
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
  @media (max-width: 280px) {
    width: 3.4rem;
    height: 3.4rem;
    font-size: 1rem;
  }
`;

export const MatchProgress = ({ matchStatus, liveStatus }: Props) => {
  const conicGradientPercentage = getConicGradientDeg(matchStatus, liveStatus);
  const getTextToShowOnCircularProgress = () => {
    switch (matchStatus) {
      case "finished":
        return "FT";
      case "inprogress":
        return `${liveStatus}'`;
      default:
        return "";
    }
  };

  return (
    <OuterBox $deg={conicGradientPercentage} data-testid="outer-box">
      <InnerBox>{getTextToShowOnCircularProgress()}</InnerBox>
    </OuterBox>
  );
};
