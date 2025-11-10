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

  let hours = dateTime.toLocaleTimeString("en-US", { hour: "2-digit", hour12: true }).split(" ")[0];
  let minutes = dateTime.toLocaleTimeString("en-US", { minute: "2-digit" });
  let seconds = dateTime.toLocaleTimeString("en-US", { second: "2-digit" });
  const ampm = dateTime.toLocaleTimeString("en-US", { hour: "2-digit", hour12: true }).split(" ")[1];
  let days = dateTime.toLocaleDateString("en-US", { day: "numeric" });
  let months = dateTime.toLocaleDateString("en-US", { month: "short" });
  let years = dateTime.toLocaleDateString("en-US", { year: "numeric" });

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (days < 10) {
    days = `0${days}`;
  }

  return (
    <section className="text-center inline-flex flex-col items-center gap-4 mt-5 ms-5 backdrop-blur-lg p-4 rounded-2xl shadow shadow-gray-300/30 select-none">
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
