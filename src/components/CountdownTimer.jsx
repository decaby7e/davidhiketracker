import React, { useEffect, useState } from "react";

const calculateTimeLeft = (tillDate) => {
  let difference = +tillDate - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer = ({ tillDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(tillDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tillDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <p className="text-[2rem]">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </p>
    </>
  );
};

export default CountdownTimer;
