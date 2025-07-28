import React from "react";
import { useState, useEffect } from "react";
import BackToProjectsButton from "../components/BackToProjectsButton.jsx";
const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState("work"); // 'work' or 'break'
  const [workTime, setWorkTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [workMinutes, setWorkMinutes] = useState("25");
  const [breakMinutes, setBreakMinutes] = useState("5");
  useEffect(() => {
    if (!isRunning) return; // If not running, do nothing
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0; // Stop the timer at 0
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  const switchSession = () => {
    if (currentSession === "work") {
      setCurrentSession("break");
      setTime(breakTime);
    } else {
      setCurrentSession("work");
      setTime(workTime);
    }
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(25 * 60); // Reset to default 25 minutes
  };

  return (
    <>
      <BackToProjectsButton />

      <div className="container mx-auto p-4 max-w-md">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center flex flex-col items-center">
            <h2 className="card-title justify-center text-3xl mb-4">
              Pomodoro Timer
            </h2>

            {/* Session Indicator */}
            {currentSession === "work" ? (
              <>
                <div className="badge badge-lg badge-primary mb-4">
                  Work Time{" "}
                </div>
                {/* Timer Display */}
                <div className="text-6xl font-mono font-bold mb-6 text-primary">
                  {formatTime(time)}
                </div>
              </>
            ) : (
              <>
                <div className="badge badge-lg badge-secondary mb-4">
                  Break Time
                </div>
                {/* Timer Display */}
                <div className="text-6xl font-mono font-bold mb-6 text-secondary">
                  {formatTime(time)}
                </div>
              </>
            )}

            {/* Progress Bar */}
            <progress
              className="progress progress-primary w-full mb-4"
              value={
                currentSession === "work" ? workTime - time : breakTime - time
              }
              max={currentSession === "work" ? workTime : breakTime}
            ></progress>

            {/* Controls */}
            <div className="flex gap-2 justify-center mb-4">
              <button className="btn btn-primary" onClick={handleStart}>
                {isRunning ? "Pause" : "Start"}
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                Reset
              </button>
              <button className="btn btn-accent" onClick={switchSession}>
                Switch to {currentSession === "work" ? "Break" : "Work"}
              </button>
            </div>

            {/* Settings */}
            <div className="collapse collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Settings</div>
              <div className="collapse-content space-y-2">
                <div>
                  <label className="label">Work Duration (minutes)</label>
                  <input
                    type="number"
                    value={workMinutes}
                    onChange={(e) => {
                      setWorkMinutes(e.target.value);
                      const minutes = parseInt(e.target.value) || 25;
                      setWorkTime(minutes * 60);
                      if (currentSession === "work") {
                        setTime(minutes * 60);
                      }
                    }}
                    className="input input-bordered w-full"
                    min="1"
                    max="60"
                  />
                </div>
                <div>
                  <label className="label">Break Duration (minutes)</label>
                  <input
                    type="number"
                    value={breakMinutes}
                    onChange={(e) => {
                      setBreakMinutes(e.target.value);
                      const minutes = parseInt(e.target.value) || 5;
                      setBreakTime(minutes * 60);
                      if (currentSession === "break") {
                        setTime(minutes * 60);
                      }
                    }}
                    className="input input-bordered w-full"
                    min="1"
                    max="30"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroTimer;
