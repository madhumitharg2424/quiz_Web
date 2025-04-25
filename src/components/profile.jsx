import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    photoURL: "",
    bio: "",
    age: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser((prev) => ({
        ...prev,
        name: storedUser.name || "",
        email: storedUser.email || "",
        photoURL: storedUser.photoURL || "/assets/default-profile.png",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, photoURL: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-blue-200"
      >
        {/* Profile Picture */}
        <motion.img
          src={user.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-300 shadow-md object-cover"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Upload & Take Photo */}
        <div className="flex justify-center space-x-4 mt-4">
          <label className="cursor-pointer bg-blue-200 hover:bg-blue-300 text-[#1E3A8A] font-semibold py-2 px-4 rounded-lg transition">
            Upload Photo
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>

          <label className="cursor-pointer bg-pink-200 hover:bg-pink-300 text-[#1E3A8A] font-semibold py-2 px-4 rounded-lg transition">
            Take Photo
            <input type="file" accept="image/*" capture="user" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-bold mt-4 text-[#1E3A8A]">{user.name || "Your Name"}</h2>
        <p className="text-sm text-blue-600">{user.email}</p>

        {/* Bio */}
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Write your bio..."
          className="mt-4 w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:ring focus:ring-blue-300 text-[#1E3A8A]"
        />

        {/* Age */}
        <motion.input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Your Age"
          className="mt-4 w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:ring focus:ring-blue-300 text-[#1E3A8A]"
          whileFocus={{ scale: 1.05 }}
        />

        {/* Save Button */}
        <motion.button
          className="mt-6 bg-blue-300 hover:bg-blue-400 text-[#1E3A8A] font-bold py-2 px-6 rounded-lg shadow-md transition"
          whileTap={{ scale: 0.9 }}
        >
          Save Profile
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;
