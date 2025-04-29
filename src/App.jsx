import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Pages and components
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#fdfdfd] flex">
        {user && <Sidebar />}

        <div className="flex-grow flex flex-col">
          {user && <Navbar />}
          <div className={`p-4 ${user ? "mt-16 ml-72" : "mt-0 ml-0"}`}>
            <Routes>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/streak" element={user ? <Streak /> : <Navigate to="/login" />} />
              <Route path="/about-us" element={user ? <AboutUs /> : <Navigate to="/login" />} />
              <Route path="/quiz/:level" element={user ? <Quiz /> : <Navigate to="/login" />} />
              <Route path="/solutions/beginner" element={user ? <BeginnerSolutions /> : <Navigate to="/login" />} />
              <Route path="/solutions/pro" element={user ? <ProSolutions /> : <Navigate to="/login" />} />
              <Route path="/solutions/expert" element={user ? <ExpertSolutions /> : <Navigate to="/login" />} />
              <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
            </Routes>
          </div>
        </div>

        {user && <ChatBot />}
      </div>
    </Router>
  );
};

export default App;
