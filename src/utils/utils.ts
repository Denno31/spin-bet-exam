import { Match, ScoreCardMatch } from "@/types/types";

export const getTextToStatusToShowOnScoreboard = (match: ScoreCardMatch) => {
  if (match.status.type === "inprogress") {
    return "LIVE";
  } else if (match.status.type === "finished") {
    return "ENDED";
  } else if (match.liveStatus.toLowerCase() === "canceled") {
    return "CANCELLED";
  } else if (!isNaN(match.timestamp)) {
    return getDateFormatted(match.timestamp);
  } else {
    return "";
  }
};

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
