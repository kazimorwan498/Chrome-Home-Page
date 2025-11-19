import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timeInter = setInterval(() => {
      setDateTime(new Date());
    }, 500);

    return () => {
      clearInterval(timeInter);
    };
  }, []);
  let hours, minutes, seconds, days, months, years, ampm;

  // Use a single Intl.DateTimeFormat and formatToParts to avoid multiple toLocale* calls
  const dtf = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

  const parts = dtf.formatToParts(dateTime);
  const partMap = Object.fromEntries(parts.map((p) => [p.type, p.value]));

  hours = partMap.hour ?? "";
  minutes = partMap.minute ?? "";
  seconds = partMap.second ?? "";
  ampm = partMap.dayPeriod ?? "";
  days = partMap.day ?? "";
  months = partMap.month ?? "";
  years = partMap.year ?? "";

  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }
  // if (seconds < 10) {
  //   seconds = `0${seconds}`;
  // }
  // if (days < 10) {
  //   days = `0${days}`;
  // }

  return (
    <section className="text-center inline-flex flex-col items-center gap-4 backdrop-blur-lg p-4 rounded-2xl shadow shadow-gray-300/30 select-none">
      <div className="text-white text-5xl flex -space-x-1">
        <p>{hours}</p>
        <span className="animate-fade">&nbsp;:&nbsp;</span>
        <p>{minutes}</p>
        <span className="animate-fade">&nbsp;:&nbsp;</span>
        <p>{seconds}</p>
        <span className="animate-fade">&nbsp;</span>
        <p>{ampm}</p>
      </div>
      <div className="text-white text-4xl flex">
        <p>{days}</p>
        <span>-</span>
        <p>{months}</p>
        <span>-</span>
        <p>{years}</p>
      </div>
    </section>
  );
};

export default CurrentTime;
