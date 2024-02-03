import { getConicGradientDeg } from "@/utils/utils";

describe("getConicGradientDeg function", () => {
  it("calculates conic gradient degree correctly for in-progress status at 45 minutes", () => {
    const liveStatusType = "inprogress";
    const liveStatus = "45";

    const result = getConicGradientDeg(liveStatusType, liveStatus);

    expect(result).toBe((Number(liveStatus) * 360) / 90);
  });

  it("calculates conic gradient degree correctly for finished status", () => {
    const liveStatusType = "finished";
    const liveStatus = "finished";

    const result = getConicGradientDeg(liveStatusType, liveStatus);
    expect(result).toBe(360);
  });

  it("calculates conic gradient degree correctly for match status at 15 minutes", () => {
    const liveStatusType = "inprogress";
    const liveStatus = "15";

    const result = getConicGradientDeg(liveStatusType, liveStatus);

    expect(result).toBe(60);
  });
});
