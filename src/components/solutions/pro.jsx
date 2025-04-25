import React from "react";
import { motion } from "framer-motion";

const proQuestions = [
  {
    question: "You notice a senior developer violating code standards. What’s your action?",
    answer: "Raise the concern politely",
    reason: "Respectfully pointing it out maintains professional standards and encourages accountability without creating conflict."
  },
  {
    question: "Your client changes the requirement after you finished the module. What now?",
    answer: "Understand and adapt",
    reason: "Client needs can evolve. Adapting shows flexibility and commitment to delivering what’s truly needed."
  },
  {
    question: "You’re assigned two high-priority tasks at the same time. What’s your move?",
    answer: "Seek clarity on priority",
    reason: "Getting clarification avoids confusion and ensures the more critical task gets completed first."
  },
  {
    question: "You disagree with your team’s chosen approach. What do you do?",
    answer: "Convince logically",
    reason: "Logical discussion leads to better decision-making while preserving team harmony."
  },
  {
    question: "You’re given a last-minute presentation without preparation. What's your best option?",
    answer: "Quickly prepare key points",
    reason: "Showing initiative and summarizing key ideas helps deliver with confidence under pressure."
  },
  {
    question: "A teammate's poor performance is affecting your work. What do you do?",
    answer: "Help and guide",
    reason: "Supporting them improves team performance and builds a positive work culture."
  },
  {
    question: "The manager is unavailable and a client issue arises. What do you do?",
    answer: "Resolve as per knowledge",
    reason: "Taking ownership and resolving based on your best understanding shows leadership and responsibility."
  },
  {
    question: "You’re mentoring a new intern who keeps making the same mistake. How do you react?",
    answer: "Explain patiently again",
    reason: "Patience is key in mentoring. Repetition and clarity help them grow."
  },
  {
    question: "You spot a data privacy issue in the app. What’s your responsibility?",
    answer: "Report and escalate",
    reason: "Security issues must be formally reported to prevent serious consequences."
  },
  {
    question: "You missed a small requirement in the module, post-deployment. What do you do?",
    answer: "Patch immediately",
    reason: "Fixing it fast reduces user impact and shows accountability."
  },
  {
    question: "You're offered an extra incentive for working weekend. What should you check first?",
    answer: "Clarify expectations",
    reason: "Understanding deliverables avoids overwork or miscommunication."
  },
  {
    question: "You have a better solution than the one proposed. What’s the best way to share it?",
    answer: "Discuss it in the team",
    reason: "Team discussions allow knowledge sharing and better consensus."
  },
  {
    question: "You’re assigned a task that goes beyond your role. What should you do?",
    answer: "Learn and attempt",
    reason: "Trying new things helps in growth and demonstrates initiative."
  },
  {
    question: "You're working remotely and your screen freezes during a client demo. What do you do?",
    answer: "Apologize and restart",
    reason: "Being transparent and quickly recovering shows professionalism."
  },
  {
    question: "You get access to confidential code by mistake. What do you do?",
    answer: "Report it immediately",
    reason: "Maintaining data confidentiality is an ethical responsibility."
  },
  {
    question: "You get negative feedback during a code review. How do you react?",
    answer: "Take it positively",
    reason: "Constructive feedback improves code quality and skills."
  },
  {
    question: "You have back-to-back meetings, and no time to complete work. What should you do?",
    answer: "Prioritize and inform manager",
    reason: "Proactive communication avoids delays and manages expectations."
  },
  {
    question: "You observe the deployment team delaying updates. What’s your move?",
    answer: "Inform calmly",
    reason: "Raising it politely helps resolve issues without conflict."
  },
  {
    question: "Your module failed testing just before release. What should you do?",
    answer: "Debug fast and fix",
    reason: "Quick action ensures deadlines are still met without blaming others."
  },
  {
    question: "Client praises your teammate wrongly for your work. What should you do?",
    answer: "Talk to team later",
    reason: "Clarifying internally maintains team unity while avoiding client embarrassment."
  }
];

const ProSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-[#1E3A8A] flex justify-center items-center p-8">
      <div className="max-w-5xl w-full p-6 bg-white shadow-2xl rounded-lg border border-blue-200">

        {/* ✅ Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-[#1E3A8A] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Pro Level Solutions
        </motion.h2>

        {/* ✅ Intro */}
        <motion.p
          className="text-lg text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Learn to respond like a pro. Below are the real-world scenarios with the best answers and reasons.
        </motion.p>

        {/* ✅ List */}
        <div className="space-y-6">
          {proQuestions.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 border rounded-lg shadow-md bg-white border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                Q{index + 1}: {item.question}
              </h3>
              <p className="mt-2">
                <strong className="text-[#1E3A8A]">✅ Answer:</strong> {item.answer}
              </p>
              <p className="mt-1 text-[#475569]">
                <strong>🔍 Reason:</strong> {item.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProSolutions;
