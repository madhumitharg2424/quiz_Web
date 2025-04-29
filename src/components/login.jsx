import React from "react";
import { signInWithGoogle } from "../firebase";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-hidden">
      {/* 💧 Glowy Animated Splash Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full top-24 left-10 blur-3xl animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full bottom-20 right-10 blur-3xl animate-ping"></div>
        <div className="absolute w-[200px] h-[200px] bg-indigo-400 opacity-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 blur-2xl animate-bounce"></div>
      </div>

      {/* ✨ Brand Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-6xl font-extrabold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-center mb-10"
      >
        REAL-MIND
      </motion.h1>

      {/* 🔐 Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 bg-[#ffffff0d] backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border border-blue-200/10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Enter the Mindzone 🧠
        </motion.h2>

        <p className="text-gray-300 mb-6 text-sm">
          Quizzes. Streaks. Real-time decisions. Just one click away.
        </p>

        {/* 🔘 Google Sign-In Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={signInWithGoogle}
          className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          <FaGoogle className="mr-3" />
          Sign in with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;
