import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const companies = [
  { name: "Google", location: "Mountain View, CA", owner: "Sundar Pichai", img: "/assets/google.jpg" },
  { name: "Facebook", location: "Menlo Park, CA", owner: "Mark Zuckerberg", img: "/assets/facebook.jpg" },
  { name: "Amazon Web Services (AWS)", location: "Seattle, WA", owner: "Andy Jassy", img: "/assets/awscover.jpg" },
  { name: "Microsoft", location: "Redmond, WA", owner: "Satya Nadella", img: "/assets/microsoft.jpg" },
  { name: "Apple", location: "Cupertino, CA", owner: "Tim Cook", img: "/assets/apple.jpg" },
];

const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];

const interviewTips = [
  {
    tip: "Understand the Company",
    description: "Research the company's mission, values, and recent achievements to tailor your responses."
  },
  {
    tip: "Practice Behavioral Questions",
    description: "Use the STAR method to answer questions about past experiences."
  },
  {
    tip: "Prepare Your Questions",
    description: "Have 2-3 thoughtful questions ready to ask the interviewer."
  },
  {
    tip: "First Impressions Matter",
    description: "Dress appropriately and greet confidently with a smile."
  },
  {
    tip: "Revise Core Concepts",
    description: "Brush up on fundamental technical concepts before technical interviews."
  },
  {
    tip: "Mock Interviews Help",
    description: "Simulate real interviews with a friend or mentor to reduce anxiety."
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 text-[#1E3A8A] p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1E3A8A]">Dashboard</h1>

      {/* Scrolling Banner with Company Details */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full max-w-5xl mx-auto h-[350px] sm:h-[400px] md:h-[450px]"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-cover bg-center rounded-xl shadow-lg" style={{ backgroundImage: `url(${company.img})` }}>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-center p-4 rounded-xl">
                  <h2 className="text-2xl font-bold text-white">{company.name}</h2>
                  <p className="text-md text-blue-100">{company.location}</p>
                  <p className="text-lg font-semibold text-blue-300">CEO: {company.owner}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Motivational Quotes */}
      <h2 className="text-3xl font-semibold mt-12 mb-6 text-center text-[#1E3A8A]">Motivational Quotes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className={`bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-[#1E3A8A] ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            } max-w-md`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg italic text-center">"{quote.text}"</p>
            <p className="text-right mt-2 font-semibold">- {quote.author}</p>
          </motion.div>
        ))}
      </div>

      {/* Case Studies */}
      <h2 className="text-3xl font-semibold mt-12 mb-6 text-center text-[#1E3A8A]">Case Studies</h2>

      {/* Elon Musk Case Study */}
      <motion.div className="bg-blue-50 rounded-xl shadow-lg grid md:grid-cols-2 gap-4 p-6 max-w-5xl mx-auto mb-10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className="order-2 md:order-1">
          <img src="/assets/case-study.jpg" alt="Elon Musk" className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-xl font-bold">Elon Musk – CEO of Tesla & SpaceX</h3>
          <p className="mt-2 font-semibold">Why him?</p>
          <ul className="list-disc list-inside ml-2 mt-1">
            <li>Thinks and makes decisions like a first-principle engineer.</li>
            <li>Great example of complex, real-time thinking under pressure.</li>
            <li>Known for his ability to tackle massive, multi-disciplinary problems under stress.</li>
            <li>Students admire his fearless attitude and intense problem-solving skills.</li>
            <li>Perfect example of tech leadership through disruption and experimentation.</li>
          </ul>
          <p className="mt-4 italic">Motivational Angle:<br/>“Think like an engineer, act like a visionary.”</p>
          <p className="mt-2 font-medium">Perfect Quote:<br/>"I think it is possible for ordinary people to choose to be extraordinary."</p>
        </div>
      </motion.div>

      {/* Sundar Pichai Case Study */}
      <motion.div className="bg-blue-50 rounded-xl shadow-lg grid md:grid-cols-2 gap-4 p-6 max-w-5xl mx-auto" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div>
          <h3 className="text-xl font-bold">Sundar Pichai – CEO of Google and Alphabet</h3>
          <p className="mt-2 font-semibold">Why him?</p>
          <ul className="list-disc list-inside ml-2 mt-1">
            <li>Came from a humble middle-class Indian background.</li>
            <li>Cracked interviews at top global tech companies through deep thinking and calm reasoning.</li>
            <li>Known for his empathy, composure, and real-world problem-solving capabilities.</li>
            <li>Role model for consistent, thoughtful decision-making and leadership style.</li>
            <li>His journey exemplifies growth, adaptability, and intellectual humility.</li>
          </ul>
          <p className="mt-4 italic">Motivational Angle:<br/>“From Chennai to Google CEO – mastering decisions and problem-solving.”</p>
          <p className="mt-2 font-medium">Perfect Quote:<br/>"Wear your failure as a badge of honor."</p>
        </div>
        <div>
          <img src="/assets/case-study2.webp" alt="Sundar Pichai" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </motion.div>

      {/* Interview Tips */}
      <h2 className="text-3xl font-semibold mt-12 mb-6 text-center text-[#1E3A8A]">Top Interview Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviewTips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white border border-blue-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow text-[#1E3A8A]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <h4 className="text-lg font-bold mb-1">{tip.tip}</h4>
            <p className="text-sm">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
