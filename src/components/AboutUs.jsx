import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerImages = [
  "/assets/about-banner.jpg",
  "/assets/banner.jpeg",
  "/assets/banner3.jpg",
  "/assets/student.jpg",
  "/assets/impact.jpeg",
  "/assets/team.jpg",
];

const aboutSections = [
  {
    title: "Our Mission",
    text: `To empower engineering students with a smart, interactive quiz platform\nthat enhances real-time decision-making, interview readiness, and critical thinking\nthrough fun and challenging quizzes.`,
    img: "/assets/mission.jpeg"
  },
  {
    title: "Our Vision",
    text: `To become the leading platform for placement-driven learning\nby transforming the way students prepare for interviews—\nfocusing on real-world judgment, not just aptitude or code.`,
    img: "/assets/vission.jpeg"
  },
  {
    title: "Why Choose Us?",
    text: `✅ Designed by students, for students, who understand placement pressure.\n✅ Focuses on real-time decision-making & company-level interview scenarios.\n✅ Unique streak system & leaderboard to keep you consistent.\n✅ Clean UI with difficulty levels: Beginner, Intermediate & Expert.`,
    img: "/assets/chooseus.jpeg"
  },
  {
    title: "Our Team",
    text: `Built with 💙 by 3 passionate B.Tech IT students of Meenakshi Sundararajan Engineering College:\n\n Harinishree – Frontend Developer & UI/UX Designer\n Madhumitha.R.G – Backend & Database Developer\n S. Rajitha – Quiz Content Curator & Logic Builder\n\nWe built REAL-MIND with creativity and a mission to empower every student’s placement journey.`,
    img: "/assets/team.jpg"
  },
  {
    title: "Our Impact",
    text: `✅ Helped students simulate real interview scenarios.\n✅ Over 100+ quiz attempts during our internal testing.\n✅ Inspired more students to build tools that blend tech and learning.`,
    img: "/assets/impact.jpeg"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-[#1E3A8A]">
      {/* ✅ Scrolling Banner */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full max-w-5xl mx-auto h-[350px] sm:h-[400px] md:h-[450px] mt-6 rounded-xl shadow-xl"
        >
          {bannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* ✅ About Us Sections */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-24 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={section.img}
              alt={section.title}
              className="w-full lg:w-1/2 rounded-xl shadow-lg border-2 border-blue-200"
              whileHover={{ scale: 1.05 }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h2
                className="text-3xl font-bold text-[#1E3A8A]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 mt-4 whitespace-pre-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {section.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Contact & Social Section */}
      <motion.div
        className="bg-white text-[#1E3A8A] py-16 px-8 text-center shadow-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Connect with Us</h2>
        <p className="text-lg mt-2 text-gray-600">Follow us on social media and stay updated!</p>

        <div className="flex justify-center mt-6 gap-8">
          <motion.a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A8A] text-3xl hover:text-blue-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A8A] text-3xl hover:text-pink-400 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="tel:+919876543210"
            className="text-[#1E3A8A] text-3xl hover:text-green-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaPhoneAlt />
          </motion.a>
        </div>

        <p className="mt-6 text-gray-500">Contact: +91 98765 43210</p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
