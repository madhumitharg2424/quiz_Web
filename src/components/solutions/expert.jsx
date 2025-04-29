import React from "react";
import { motion } from "framer-motion";

const expertQuestions = [
  {
    question: "You discover a serious vulnerability in the live system just before an important client demo. What’s your best move?",
    answer: "Inform the team immediately",
    reason: "Immediate action allows the team to assess the impact and apply a temporary fix or workaround before it affects stakeholders.",
  },
  {
    question: "Two critical modules are behind schedule. You can only finish one before the deadline. What do you do?",
    answer: "Finish the one with more impact",
    reason: "Focusing on impact ensures the most value is delivered, and the client or business gets the maximum benefit in limited time.",
  },
  {
    question: "During crisis management, your solution differs from leadership's direction. What do you do?",
    answer: "Propose your plan with data",
    reason: "Data-backed decisions gain more trust and might change leadership’s mind when evidence supports your solution.",
  },
  {
    question: "Your junior reported harassment by another team. What’s your role as a senior?",
    answer: "Report to HR and guide the junior",
    reason: "You have a responsibility to uphold workplace ethics and ensure a safe environment by escalating the issue professionally.",
  },
  {
    question: "You find the project timeline unrealistic due to external dependencies. What do you do?",
    answer: "Raise a risk report and suggest revisions",
    reason: "Proactively flagging risks prevents future project failures and helps manage expectations with stakeholders.",
  },
  {
    question: "A competitor replicates your feature after launch. What is the best team decision?",
    answer: "Innovate a new feature fast",
    reason: "Staying ahead by continuous innovation helps retain market leadership and shows your team’s agility.",
  },
  {
    question: "You’re leading a team and one member consistently underperforms. What’s your approach?",
    answer: "Coach and monitor their progress",
    reason: "Supportive leadership helps underperformers improve while maintaining morale and accountability.",
  },
  {
    question: "In a client meeting, your teammate shares false metrics. What do you do?",
    answer: "Correct gently during the meeting",
    reason: "Correcting in real-time maintains transparency without embarrassing the teammate, preserving team trust.",
  },
  {
    question: "You’re offered a leadership position in a crisis project with a high chance of failure. What’s your call?",
    answer: "Accept and strategize risk mitigation",
    reason: "Taking ownership and addressing risks head-on shows leadership potential and resilience.",
  },
  {
    question: "A deployment fails and your team blames the DevOps team wrongly. You realize it's your code. What do you do?",
    answer: "Own the mistake and fix it",
    reason: "Owning up builds integrity and trust in cross-functional teams, reducing blame culture.",
  },
  {
    question: "The client demands an unethical workaround. What's your best move?",
    answer: "Refuse and offer a legal alternative",
    reason: "Compromising ethics can lead to legal and reputational issues—offering alternatives shows responsibility.",
  },
  {
    question: "You're chosen to lead a merger integration project, but you lack domain knowledge. What do you do?",
    answer: "Accept and upskill rapidly",
    reason: "Leadership is about adaptability; learning fast ensures you're still adding value while handling responsibilities.",
  },
  {
    question: "Two of your team members are in conflict, affecting productivity. How should you act?",
    answer: "Facilitate a resolution discussion",
    reason: "Mediation encourages healthy communication and team cohesion without taking sides.",
  },
  {
    question: "The product release is tomorrow. You found a rare but high-impact crash bug. What's your call?",
    answer: "Report and delay release",
    reason: "User trust is hard to regain; delaying release for quality is a mature and long-term-focused decision.",
  },
  {
    question: "You’re under pressure to deliver a project while your mental health is suffering. What’s the wise action?",
    answer: "Take a break and inform manager",
    reason: "Burnout leads to poor outcomes. Managing health ensures long-term sustainability and better performance.",
  },
  {
    question: "A new AI tool can automate part of your team's work but may lead to downsizing. What do you do?",
    answer: "Propose it with reskilling plan",
    reason: "Ethical innovation involves upskilling and supporting employees during tech transitions.",
  },
  {
    question: "A high-value client offers you a personal contract to work outside your company. What’s ethical?",
    answer: "Inform your company and decline",
    reason: "Accepting it would be a conflict of interest and breach of trust. Transparency maintains professionalism.",
  },
  {
    question: "Your manager resigns mid-project and the client starts panicking. What should you do as acting lead?",
    answer: "Reassure and take interim charge",
    reason: "Leadership is about taking charge in uncertainty, calming stakeholders, and providing continuity.",
  },
  {
    question: "You’re asked to present quarterly metrics but your data is incomplete. What do you do?",
    answer: "Present with disclaimers",
    reason: "Being honest about data limitations maintains credibility while still delivering insight.",
  },
  {
    question: "You must choose between finishing a high-value project or helping a struggling teammate on a low-value one. What’s the priority?",
    answer: "Complete high-value project first",
    reason: "Prioritizing value ensures business goals are met; the teammate can be helped afterward or redirected.",
  }
];

const ExpertSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-[#1E3A8A] flex justify-center items-center p-6 sm:p-8">
      <div className="max-w-5xl w-full p-6 sm:p-8 bg-white shadow-md rounded-xl border border-blue-200">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#1E3A8A]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Expert Level Situational Solutions
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-center mb-6 text-[#1E3A8A]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          20 expert-level situational judgment questions with ideal solutions and reasoning for IT placement.
        </motion.p>

        <div className="space-y-6 sm:space-y-8">
          {expertQuestions.map((q, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-5 border rounded-lg shadow-sm bg-white border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#1E3A8A]">
                Q{index + 1}: {q.question}
              </h3>
              <p className="mt-2 text-[#1E3A8A]">
                <strong>Best Response:</strong> {q.answer}
              </p>
              <p className="mt-1 text-sm italic text-gray-600">
                Reason: {q.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertSolutions;
