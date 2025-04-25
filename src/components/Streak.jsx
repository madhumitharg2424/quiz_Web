import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Image paths (public folder)
const streakIcon = "/assets/streakfire.jpeg";
const trophyIcon = "/assets/trophy.jpeg";

const TOTAL_DAYS = 30; // Customize this goal

const Streak = () => {
  const [streak, setStreak] = useState(0);
  const [lastPlayed, setLastPlayed] = useState(null);

  useEffect(() => {
    const storedStreak = localStorage.getItem("streak");
    const storedLastPlayed = localStorage.getItem("lastPlayed");

    if (storedStreak) setStreak(parseInt(storedStreak, 10));
    if (storedLastPlayed) setLastPlayed(storedLastPlayed);

    checkStreak();
  }, []);

  const checkStreak = () => {
    const today = new Date().toISOString().split("T")[0];
    if (lastPlayed === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let newStreak = 1;
    if (lastPlayed === yesterdayStr) newStreak = streak + 1;

    setStreak(newStreak);
    localStorage.setItem("streak", newStreak);
    localStorage.setItem("lastPlayed", today);
    setLastPlayed(today);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center text-[#1E3A8A]">
        {/* 🔥 Title */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔥 Streak Tracker
        </motion.h2>

        {/* 🔥 Streak Fire Icon */}
        <motion.img
          src={streakIcon}
          alt="Streak Fire Icon"
          className="mx-auto w-24 h-24 mb-4 rounded-xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* 🧮 Current Streak */}
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          You’ve completed{" "}
          <span className="font-bold text-[#1E3A8A]">{streak} days</span> out of{" "}
          <span className="font-bold text-blue-400">{TOTAL_DAYS}</span>!
        </motion.p>

        {/* ✅ Completed & Remaining Days */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <motion.div
            className="bg-blue-100 border border-blue-300 p-4 rounded-xl shadow text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ✅ Completed: <br /> {streak} days
          </motion.div>
          <motion.div
            className="bg-red-100 border border-red-300 p-4 rounded-xl shadow text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ❌ Remaining: <br /> {Math.max(0, TOTAL_DAYS - streak)} days
          </motion.div>
        </div>

        {/* 🏆 Trophy for 7+ streak */}
        {streak >= 7 && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-green-600 font-semibold text-lg">You're on fire! 🔥 Keep the streak alive!</p>
            <img
              src={trophyIcon}
              alt="Trophy Icon"
              className="mx-auto w-16 h-16 mt-2 rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Streak;
