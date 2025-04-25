import React from "react";
import { motion } from "framer-motion";

const beginnerSolutions = [
  {
    question: "You are in a team meeting and your senior asks you a question you don't know. What should you do?",
    solution: "Say you’ll get back after checking.",
    reason:
      "Admitting when you don’t know something and committing to follow up shows honesty and a willingness to learn — qualities valued in a team setting.",
  },
  {
    question: "You receive two tasks due tomorrow. One is easy and short, and the other is complex and takes time. What will you do?",
    solution: "Do the hard one first.",
    reason:
      "Handling the harder task first ensures you utilize your energy and focus early on, reducing last-minute pressure.",
  },
  {
    question: "Your manager asks you to present a module you didn’t work on. What do you do?",
    solution: "Ask for time to understand it.",
    reason:
      "It’s better to be thorough and informed before presenting. Asking for time shows responsibility and a desire to deliver quality.",
  },
  {
    question: "A teammate takes credit for your idea during a group presentation. What should you do?",
    solution: "Talk to them privately later.",
    reason:
      "Addressing the issue calmly and privately maintains professionalism while asserting your contribution.",
  },
  {
    question: "You found a minor bug that won’t affect the output immediately. What do you do?",
    solution: "Inform and log it immediately.",
    reason:
      "Even small bugs can cause bigger issues later. Reporting them builds trust and helps with long-term stability.",
  },
  {
    question: "In a client meeting, you’re asked a technical question unrelated to your domain. How should you respond?",
    solution: "Politely redirect to an expert.",
    reason:
      "Redirecting to someone more knowledgeable ensures accurate information is shared while showing team coordination.",
  },
  {
    question: "You are done with your work early. What do you do?",
    solution: "Help your team.",
    reason:
      "Offering help improves teamwork and shows initiative. It builds a cooperative and reliable team culture.",
  },
  {
    question: "During a team discussion, a junior suggests a wrong approach. What do you do?",
    solution: "Correct politely and explain.",
    reason:
      "Correcting them respectfully helps them learn without embarrassment and fosters a positive learning environment.",
  },
  {
    question: "Your internet goes down during a WFH meeting. What’s your first step?",
    solution: "Inform in group chat.",
    reason:
      "Quick communication helps others understand your absence and shows responsibility in remote working situations.",
  },
  {
    question: "You’re working on an urgent task but feeling tired. What should you do?",
    solution: "Take a short break.",
    reason:
      "Short breaks refresh your mind and prevent burnout, leading to better focus and fewer mistakes.",
  },
  {
    question: "You made a mistake that caused a delay. What should you do?",
    solution: "Inform the team and fix it.",
    reason:
      "Being transparent helps the team plan better and builds trust, while fixing it shows accountability.",
  },
  {
    question: "You are assigned a tool you've never used before. What do you do?",
    solution: "Learn it quickly.",
    reason:
      "Taking initiative to learn new tools shows adaptability, a key skill in fast-changing tech environments.",
  },
  {
    question: "In a team of 5, only you completed your task. Others haven’t. What should you do?",
    solution: "Assist them if possible.",
    reason:
      "Helping others ensures team success and shows leadership. It also strengthens collaboration.",
  },
  {
    question: "During a demo, your code fails. What's your first step?",
    solution: "Explain and fix calmly.",
    reason:
      "Staying calm shows professionalism. Explaining the issue keeps trust while you work on a solution.",
  },
  {
    question: "You’re offered a certificate for a project your friend did. What do you do?",
    solution: "Reject honestly.",
    reason:
      "Taking credit for someone else’s work is unethical. Honesty upholds your personal and professional integrity.",
  },
  {
    question: "You're asked to do extra work beyond office hours. What's the best approach?",
    solution: "Accept if feasible.",
    reason:
      "Accepting extra work when possible shows flexibility and commitment — but only if it’s manageable.",
  },
  {
    question: "You overhear team members talking negatively about a teammate. What do you do?",
    solution: "Stop them politely.",
    reason:
      "Maintaining team harmony means addressing toxic behavior. Speaking up politely shows integrity and leadership.",
  },
  {
    question: "You're unable to meet a deadline. What's the professional approach?",
    solution: "Inform beforehand.",
    reason:
      "Timely communication helps manage expectations and shows you are accountable even when things go wrong.",
  },
  {
    question: "You're new and don’t understand a concept. What’s the best approach?",
    solution: "Ask a teammate.",
    reason:
      "Asking questions early prevents bigger issues later. It shows eagerness to learn and confidence to seek help.",
  },
  {
    question: "You get an urgent task during your break. What should you do?",
    solution: "Notify that you’ll handle it post-break.",
    reason:
      "Respecting your break while communicating intent to address the task shows balance and responsibility.",
  },
  // ... (you can include the rest of the objects here as is)
];

const BeginnerSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 text-[#1E3A8A] flex justify-center items-center p-8">
      <div className="max-w-5xl w-full p-6 bg-white shadow-xl rounded-lg border border-blue-200">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Beginner Level Solutions
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-6 text-[#1E3A8A]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Learn the best practices for workplace situations and boost your decision-making skills.
        </motion.p>

        <div className="space-y-6">
          {beginnerSolutions.map((item, index) => (
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
              <p className="mt-2 text-[#1E3A8A]">
                <strong>Solution:</strong> {item.solution}
              </p>
              <p className="text-sm mt-1 text-blue-800">
                <strong>Reason:</strong> {item.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeginnerSolutions;
