import React, { useEffect, useState, useRef } from "react";
import { trees } from "./constants/Trees.js";
import { axes } from "./constants/Axes.js";
import { calculateXPforLevel } from "../lib/calculations/xpCalculations";
import {
  calculateLevel,
  canChopTree,
} from "../lib/calculations/levelCalculations";

const Woodcutting = () => {
  const [logs, setLogs] = useState(0);
  const [xp, setXp] = useState(0);
  const [levelUp, setLevelUp] = useState(false);
  const [treeLogs, setTreeLogs] = useState(
    trees.reduce((acc, tree) => ({ ...acc, [tree.name]: 0 }), {})
  );
  const [selectedAxe, setSelectedAxe] = useState(axes[0]);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [autoChop, setAutoChop] = useState(false);
  const [autoChopInterval, setAutoChopInterval] = useState(null);
  const playerLevel = calculateLevel(xp);

  //refs to store latest values
  const cooldownRef = useRef(cooldown);
  const cooldownTimeRef = useRef(cooldownTime);
  const autoChopRef = useRef(autoChop);
  const autoChopIntervalRef = useRef(autoChopInterval);

  // Update refs whenever state changes
  useEffect(() => {
    cooldownRef.current = cooldown;
    cooldownTimeRef.current = cooldownTime;
    autoChopRef.current = autoChop;
    autoChopIntervalRef.current = autoChopInterval;
  }, [cooldown, cooldownTime, autoChop, autoChopInterval]);

  useEffect(() => {
    setLevelUp(true);
    const timeout = setTimeout(() => setLevelUp(false), 1500);
    return () => clearTimeout(timeout);
  }, [playerLevel]);

  const handleAutoChopToggle = () => {
    if (!autoChop) {
      setAutoChop(true);
      const intervalId = setInterval(() => {
        if (!cooldown) {
          // Respect cooldown state
          const availableTrees = trees.filter((tree) =>
            canChopTree(playerLevel, tree.level)
          );
          if (availableTrees.length > 0) {
            // Find the tree with the highest experience
            const bestTree = availableTrees.reduce((maxTree, currentTree) =>
              currentTree.exp > maxTree.exp ? currentTree : maxTree
            );
            chopTree(bestTree); // Use chopTree to handle cooldown logic
          }
        }
      }, selectedAxe.speed); // Ensure interval respects axe speed
      setAutoChopInterval(intervalId);
    } else {
      setAutoChop(false);
      clearInterval(autoChopInterval); // Stop AutoChop
      setAutoChopInterval(null);
    }
  };
  const chopTree = (tree) => {
    if (cooldown) return; // Prevent chopping during cooldown

    if (canChopTree(playerLevel, tree.level)) {
      setCooldown(true); // Start cooldown
      setLogs((prevLogs) => prevLogs + 1);
      setXp((prevXp) => prevXp + tree.exp);
      setTreeLogs((prevLogs) => ({
        ...prevLogs,
        [tree.name]: prevLogs[tree.name] + 1,
      }));

      // Start cooldown timer
      let remainingTime = selectedAxe.speed;
      setCooldownTime(remainingTime);

      const interval = setInterval(() => {
        remainingTime -= 100; // Decrease by 100ms
        setCooldownTime(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(interval);
          setCooldown(false); // Reset cooldown
          setCooldownTime(0); // Reset cooldown time
        }
      }, 100);
    } else {
      alert(`You need level ${tree.level} to chop this tree.`);
    }
  };
  const handleAxeChange = (axe) => {
    if (playerLevel >= axe.level) {
      setSelectedAxe(axe);
    } else {
      alert(`You need level ${axe.level} to use this axe.`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/*Level Up Notification */}
      {levelUp && (
        <div className="toast toast-top alert alert-success shadow-lg mb-4 ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Congratulations! You've reached level {playerLevel}!</span>
          </div>
        </div>
      )}
      {/* Header Section */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Woodcutting</h1>
        <p className="text-lg">Logs collected: {logs}</p>
        <p className="text-lg">Experience: {xp}</p>
        <h3 className="text-xl font-semibold">Current Level: {playerLevel}</h3>
      </header>

      {/* Progress Section */}
      <section className="mb-6">
        <p className="text-center">
          {xp - calculateXPforLevel(playerLevel)}/
          {calculateXPforLevel(playerLevel + 1)} XP to next level
        </p>
        <progress
          className="progress progress-success w-full"
          value={xp - calculateXPforLevel(playerLevel)}
          max={
            calculateXPforLevel(playerLevel + 1) -
            calculateXPforLevel(playerLevel)
          }
        />
      </section>

      {/* Tree Logs Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Tree Logs</h2>
        <ul className="list-disc pl-6">
          {Object.entries(treeLogs).map(([treeName, count]) => (
            <li key={treeName}>
              {treeName}: {count} logs
            </li>
          ))}
        </ul>
      </section>

      {/* Axe Selection Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Select an Axe</h2>
        <details className="dropdown dropdown-center w-full max-w-xs">
          <summary className="btn btn-outline w-full flex justify-between items-center">
            <span className="truncate">
              {selectedAxe.name} (Lvl {selectedAxe.level})
            </span>
          </summary>
          <ul className="dropdown-content menu p-0 shadow-lg bg-base-100 rounded-box w-full mt-1 border border-base-300">
            {axes.map((axe) => (
              <li key={axe.name} className="p-2 hover:bg-base-200">
                <button
                  onClick={() => handleAxeChange(axe)}
                  disabled={playerLevel < axe.level}
                  className={`btn ${
                    playerLevel < axe.level ? "btn-disabled" : "btn-primary"
                  } w-full`}
                >
                  Use {axe.name}
                </button>
              </li>
            ))}
          </ul>
        </details>
      </section>

      {/* AutoChop Section */}
      <section className="mb-6">
        <button
          className="btn btn-primary w-full"
          onClick={handleAutoChopToggle}
        >
          {autoChop ? "Stop AutoChop" : "Start AutoChop"}
        </button>
        {autoChop && (
          <p className="text-green-500 text-center mt-2">AutoChop is active!</p>
        )}

        <div className="cooldown-progress mt-4">
          <p>Cooldown in progress...</p>
          <progress
            className="progress progress-warning w-full"
            value={
              ((selectedAxe.speed - cooldownTime) / selectedAxe.speed) * 100
            }
            max={100}
          />
          <p>{(cooldownTime / 1000).toFixed(1)} seconds remaining</p>
        </div>
      </section>

      {/* Available Trees Section */}
      <section>
        <h2 className="text-xl font-semibold">Available Trees</h2>
        <ul className="flex flex-col gap-2">
          {trees.map((tree) => (
            <li key={tree.name} className="flex justify-between items-center">
              <span className="w-2/3">
                {tree.name} (Level: {tree.level}, XP: {tree.exp})
              </span>
              {canChopTree(playerLevel, tree.level) ? (
                <span className="text-green-500 w-1/3">Available</span>
              ) : (
                <span className="text-red-500 w-1/3">Unavailable</span>
              )}
              <button
                className="btn btn-outline w-1/3"
                onClick={() => chopTree(tree)}
                disabled={!canChopTree(playerLevel, tree.level)}
              >
                Chop {tree.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Woodcutting;
