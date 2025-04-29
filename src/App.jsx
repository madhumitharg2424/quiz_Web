import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Components
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Streak from "./components/Streak";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Quiz from "./components/Quiz";
import ChatBot from "./components/ChatBot";

// Solutions
import BeginnerSolutions from "./components/solutions/beginer";
import ProSolutions from "./components/solutions/pro";
import ExpertSolutions from "./components/solutions/expert";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fdfdfd] flex">
        {/* Always show Sidebar */}
        <Sidebar />

        <div className="flex-grow flex flex-col">
          {/* Always show Navbar */}
          <Navbar />

          {/* Content */}
          <div className="p-4 mt-16 ml-72">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/streak" element={<Streak />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/quiz/:level" element={<Quiz />} />

              {/* Solutions */}
              <Route path="/solutions/beginner" element={<BeginnerSolutions />} />
              <Route path="/solutions/pro" element={<ProSolutions />} />
              <Route path="/solutions/expert" element={<ExpertSolutions />} />

              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>

        {/* Always show ChatBot */}
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
