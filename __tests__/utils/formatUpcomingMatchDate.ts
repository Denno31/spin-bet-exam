import { getDateFormatted } from "@/utils/utils";

const TIMESTAMP1 = 1672546721;
const FORMATTED_TIMESTAMP1 = "JAN 20TH 11:35";

const TIMESTAMP2 = 1470580200;
const FORMATTED_TIMESTAMP2 = "JAN 18TH 03:29";

const TIMESTAMP3 = 1697331985;
const FORMATTED_TIMESTAMP3 = "JAN 20TH 18:28";

const TIMESTAMP4 = 1482289961;
const FORMATTED_TIMESTAMP4 = "JAN 18TH 06:44";

describe("formatTime Function", () => {
  it("should set the correct month", () => {
    expect(getDateFormatted(TIMESTAMP1)).toContain("JAN");
    expect(getDateFormatted(TIMESTAMP2)).toContain("JAN");
    expect(getDateFormatted(TIMESTAMP3)).toContain("JAN");
    expect(getDateFormatted(TIMESTAMP4)).toContain("JAN");
  });

  it("should set the correct nth day", () => {
    expect(getDateFormatted(TIMESTAMP1)).toContain("20TH");
    expect(getDateFormatted(TIMESTAMP2)).toContain("18TH");
    expect(getDateFormatted(TIMESTAMP3)).toContain("20TH");
    expect(getDateFormatted(TIMESTAMP4)).toContain("18TH");
  });

  it("should set the correct time", () => {
    expect(getDateFormatted(TIMESTAMP1)).toContain("11:35");
    expect(getDateFormatted(TIMESTAMP2)).toContain("03:29");
    expect(getDateFormatted(TIMESTAMP3)).toContain("18:28");
    expect(getDateFormatted(TIMESTAMP4)).toContain("06:44");
  });

  it("should set the correct FORMATTED_ time", () => {
    expect(getDateFormatted(TIMESTAMP1)).toBe(FORMATTED_TIMESTAMP1);
    expect(getDateFormatted(TIMESTAMP2)).toBe(FORMATTED_TIMESTAMP2);
    expect(getDateFormatted(TIMESTAMP3)).toBe(FORMATTED_TIMESTAMP3);
    expect(getDateFormatted(TIMESTAMP4)).toBe(FORMATTED_TIMESTAMP4);
  });
});
