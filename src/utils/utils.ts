export const getDateFormatted = (date?: number) => {
  const dateObj = new Date(date || "");
  const day = dateObj.getDate();
  let formattedDaySuffix;

  if ((day > 3 && day < 21) || day % 10 > 3) {
    formattedDaySuffix = "TH";
  } else {
    formattedDaySuffix = ["st", "nd", "rd"][(day % 10) - 1];
  }

  const formattedDay = day + formattedDaySuffix;
  const formattedMonth = dateObj.toLocaleString("en-US", { month: "short" });
  const formattedDate = `${formattedMonth.toUpperCase()} ${formattedDay}`;

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return `${formattedDate} ${formattedTime}`;
};

export const getConicGradientDeg = (
  liveStatusType: string,
  liveStatus: string
) => {
  switch (liveStatusType) {
    case "inprogress":
      const statusValue =
        liveStatus === "HT" ? 45 : liveStatus?.replace(/[^0-9|.]/, "");
      return (Number(statusValue) * 360) / 90;
    case "finished":
      return 360;
    default:
      return 0;
  }
};
