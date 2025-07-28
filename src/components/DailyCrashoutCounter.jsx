import React, { useState, useEffect } from "react";

const JOB_END_DATE = new Date("2025-07-01"); // Change to your last job end date

function getDaysWithoutJob() {
  const today = new Date();
  const diffTime = today - JOB_END_DATE;
  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
}

const DailyCrashoutCounter = () => {
  const [days, setDays] = useState(getDaysWithoutJob());

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(getDaysWithoutJob());
    }, 60 * 60 * 1000); // Update every hour
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Days without a job</h2>
      <p>{days}</p>
    </div>
  );
};

export default DailyCrashoutCounter;
