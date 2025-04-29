import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const originalQuestions = {
    beginner: [
      {
        question: "You are in a team meeting and your senior asks you a question you don't know. What should you do?",
        options: ["Guess confidently", "Say you’ll get back after checking", "Ignore the question", "Change the topic"],
        answer: "Say you’ll get back after checking"
      },
      {
        question: "You receive two tasks due tomorrow. One is easy and short, and the other is complex and takes time. What will you do?",
        options: ["Start with the easy one", "Do the hard one first", "Postpone both", "Do both halfway"],
        answer: "Do the hard one first"
      },
      {
        question: "Your manager asks you to present a module you didn’t work on. What do you do?",
        options: ["Decline immediately", "Ask for time to understand it", "Blame the original developer", "Fake the knowledge"],
        answer: "Ask for time to understand it"
      },
      {
        question: "A teammate takes credit for your idea during a group presentation. What should you do?",
        options: ["Argue publicly", "Report them immediately", "Stay quiet", "Talk to them privately later"],
        answer: "Talk to them privately later"
      },
      {
        question: "You found a minor bug that won’t affect the output immediately. What do you do?",
        options: ["Fix it later", "Inform and log it immediately", "Ignore it", "Hide it from the team"],
        answer: "Inform and log it immediately"
      },
      {
        question: "In a client meeting, you’re asked a technical question unrelated to your domain. How should you respond?",
        options: ["Try answering vaguely", "Politely redirect to an expert", "Remain silent", "Give a wrong answer"],
        answer: "Politely redirect to an expert"
      },
      {
        question: "You are done with your work early. What do you do?",
        options: ["Relax", "Help your team", "Leave the office", "Watch videos"],
        answer: "Help your team"
      },
      {
        question: "During a team discussion, a junior suggests a wrong approach. What do you do?",
        options: ["Ignore", "Correct politely and explain", "Laugh it off", "Tell manager"],
        answer: "Correct politely and explain"
      },
      {
        question: "Your internet goes down during a WFH meeting. What’s your first step?",
        options: ["Ignore the issue", "Call the manager", "Inform in group chat", "Wait silently"],
        answer: "Inform in group chat"
      },
      {
        question: "You’re working on an urgent task but feeling tired. What should you do?",
        options: ["Push through without break", "Take a short break", "Hand over to someone", "Complain to manager"],
        answer: "Take a short break"
      },
      {
        question: "You made a mistake that caused a delay. What should you do?",
        options: ["Hide it", "Blame others", "Inform the team and fix it", "Do nothing"],
        answer: "Inform the team and fix it"
      },
      {
        question: "You are assigned a tool you've never used before. What do you do?",
        options: ["Learn it quickly", "Ask someone else to do it", "Panic", "Ignore the task"],
        answer: "Learn it quickly"
      },
      {
        question: "In a team of 5, only you completed your task. Others haven’t. What should you do?",
        options: ["Report them", "Wait for them", "Assist them if possible", "Leave your work"],
        answer: "Assist them if possible"
      },
      {
        question: "During a demo, your code fails. What's your first step?",
        options: ["Blame the system", "Restart and try again", "Explain and fix calmly", "Panic"],
        answer: "Explain and fix calmly"
      },
      {
        question: "You’re offered a certificate for a project your friend did. What do you do?",
        options: ["Accept it", "Reject honestly", "Ignore it", "Share with friend"],
        answer: "Reject honestly"
      },
      {
        question: "You're asked to do extra work beyond office hours. What's the best approach?",
        options: ["Refuse rudely", "Accept if feasible", "Complain to HR", "Ignore it"],
        answer: "Accept if feasible"
      },
      {
        question: "You overhear team members talking negatively about a teammate. What do you do?",
        options: ["Join them", "Ignore", "Stop them politely", "Tell the teammate"],
        answer: "Stop them politely"
      },
      {
        question: "You're unable to meet a deadline. What's the professional approach?",
        options: ["Give up", "Inform beforehand", "Work late without telling", "Blame others"],
        answer: "Inform beforehand"
      },
      {
        question: "You're new and don’t understand a concept. What’s the best approach?",
        options: ["Pretend you know", "Ask a teammate", "Avoid the task", "Guess it"],
        answer: "Ask a teammate"
      },
      {
        question: "You get an urgent task during your break. What should you do?",
        options: ["Ignore", "Start immediately", "Notify that you’ll handle it post-break", "Delay till evening"],
        answer: "Notify that you’ll handle it post-break"
      },
    ],

    pro: [
      {
        question: "You notice a senior developer violating code standards. What’s your action?",
        options: ["Ignore", "Raise the concern politely", "Complain directly", "Tell other juniors"],
        answer: "Raise the concern politely"
      },
      {
        question: "Your client changes the requirement after you finished the module. What now?",
        options: ["Get angry", "Understand and adapt", "Say it’s too late", "Ask for extension"],
        answer: "Understand and adapt"
      },
      {
        question: "You’re assigned two high-priority tasks at the same time. What’s your move?",
        options: ["Do both randomly", "Seek clarity on priority", "Reject one", "Delegate both"],
        answer: "Seek clarity on priority"
      },
      {
        question: "You disagree with your team’s chosen approach. What do you do?",
        options: ["Convince logically", "Ignore and follow", "Argue", "Escalate to manager"],
        answer: "Convince logically"
      },
      {
        question: "You’re given a last-minute presentation without preparation. What's your best option?",
        options: ["Panic", "Quickly prepare key points", "Decline rudely", "Read slides only"],
        answer: "Quickly prepare key points"
      },
      {
        question: "A teammate's poor performance is affecting your work. What do you do?",
        options: ["Blame them", "Help and guide", "Avoid them", "Tell manager instantly"],
        answer: "Help and guide"
      },
      {
        question: "The manager is unavailable and a client issue arises. What do you do?",
        options: ["Wait", "Resolve as per knowledge", "Panic", "Close the task"],
        answer: "Resolve as per knowledge"
      },
      {
        question: "You’re mentoring a new intern who keeps making the same mistake. How do you react?",
        options: ["Get irritated", "Explain patiently again", "Tell them to leave", "Ignore them"],
        answer: "Explain patiently again"
      },
      {
        question: "You spot a data privacy issue in the app. What’s your responsibility?",
        options: ["Hide it", "Report and escalate", "Fix quietly", "Ignore it"],
        answer: "Report and escalate"
      },
      {
        question: "You missed a small requirement in the module, post-deployment. What do you do?",
        options: ["Leave it", "Patch immediately", "Blame tester", "Deny it"],
        answer: "Patch immediately"
      },
      {
        question: "You're offered an extra incentive for working weekend. What should you check first?",
        options: ["Accept immediately", "Clarify expectations", "Ignore it", "Complain"],
        answer: "Clarify expectations"
      },
      {
        question: "You have a better solution than the one proposed. What’s the best way to share it?",
        options: ["Show your code silently", "Discuss it in the team", "Ignore it", "Send to manager only"],
        answer: "Discuss it in the team"
      },
      {
        question: "You’re assigned a task that goes beyond your role. What should you do?",
        options: ["Refuse", "Learn and attempt", "Transfer it", "Delay it"],
        answer: "Learn and attempt"
      },
      {
        question: "You're working remotely and your screen freezes during a client demo. What do you do?",
        options: ["Ignore it", "Apologize and restart", "Say nothing", "Leave the call"],
        answer: "Apologize and restart"
      },
      {
        question: "You get access to confidential code by mistake. What do you do?",
        options: ["Explore it", "Report it immediately", "Download it", "Share with friends"],
        answer: "Report it immediately"
      },
      {
        question: "You get negative feedback during a code review. How do you react?",
        options: ["Take it positively", "Get defensive", "Ignore the feedback", "Argue"],
        answer: "Take it positively"
      },
      {
        question: "You have back-to-back meetings, and no time to complete work. What should you do?",
        options: ["Do work during meetings", "Prioritize and inform manager", "Ignore work", "Miss meetings"],
        answer: "Prioritize and inform manager"
      },
      {
        question: "You observe the deployment team delaying updates. What’s your move?",
        options: ["Blame them", "Inform calmly", "Ignore it", "Take over their work"],
        answer: "Inform calmly"
      },
      {
        question: "Your module failed testing just before release. What should you do?",
        options: ["Blame test cases", "Debug fast and fix", "Deny responsibility", "Ignore the result"],
        answer: "Debug fast and fix"
      },
      {
        question: "Client praises your teammate wrongly for your work. What should you do?",
        options: ["Take credit in front of client", "Talk to team later", "Ignore", "Confront them"],
        answer: "Talk to team later"
      },
    ],
  expert: [
    {
      question: "You discover a serious vulnerability in the live system just before an important client demo. What’s your best move?",
      options: ["Ignore it for now", "Inform the team immediately", "Fix it silently", "Postpone the demo without reason"],
      answer: "Inform the team immediately"
    },
    {
      question: "Two critical modules are behind schedule. You can only finish one before the deadline. What do you do?",
      options: ["Finish the one with more impact", "Do both halfway", "Delay both", "Ask someone else to choose"],
      answer: "Finish the one with more impact"
    },
    {
      question: "During crisis management, your solution differs from leadership's direction. What do you do?",
      options: ["Follow blindly", "Propose your plan with data", "Ignore the situation", "Do both solutions"],
      answer: "Propose your plan with data"
    },
    {
      question: "Your junior reported harassment by another team. What’s your role as a senior?",
      options: ["Ignore it", "Report to HR and guide the junior", "Tell them to handle it", "Talk to the harasser"],
      answer: "Report to HR and guide the junior"
    },
    {
      question: "You find the project timeline unrealistic due to external dependencies. What do you do?",
      options: ["Accept it", "Raise a risk report and suggest revisions", "Rush the work", "Say nothing"],
      answer: "Raise a risk report and suggest revisions"
    },
    {
      question: "A competitor replicates your feature after launch. What is the best team decision?",
      options: ["Ignore and move on", "File a complaint", "Innovate a new feature fast", "Blame them publicly"],
      answer: "Innovate a new feature fast"
    },
    {
      question: "You’re leading a team and one member consistently underperforms. What’s your approach?",
      options: ["Fire them", "Coach and monitor their progress", "Ignore them", "Complain weekly"],
      answer: "Coach and monitor their progress"
    },
    {
      question: "In a client meeting, your teammate shares false metrics. What do you do?",
      options: ["Support them", "Correct gently during the meeting", "Stay silent", "Report after the meeting"],
      answer: "Correct gently during the meeting"
    },
    {
      question: "You’re offered a leadership position in a crisis project with a high chance of failure. What’s your call?",
      options: ["Accept and strategize risk mitigation", "Reject due to risk", "Ask for more pay first", "Avoid involvement"],
      answer: "Accept and strategize risk mitigation"
    },
    {
      question: "A deployment fails and your team blames the DevOps team wrongly. You realize it's your code. What do you do?",
      options: ["Stay quiet", "Own the mistake and fix it", "Let DevOps handle it", "Delay response"],
      answer: "Own the mistake and fix it"
    },
    {
      question: "The client demands an unethical workaround. What's your best move?",
      options: ["Refuse and offer a legal alternative", "Accept to please them", "Let the manager decide", "Do it silently"],
      answer: "Refuse and offer a legal alternative"
    },
    {
      question: "You're chosen to lead a merger integration project, but you lack domain knowledge. What do you do?",
      options: ["Decline the role", "Accept and upskill rapidly", "Ask for someone else", "Lead without learning"],
      answer: "Accept and upskill rapidly"
    },
    {
      question: "Two of your team members are in conflict, affecting productivity. How should you act?",
      options: ["Ignore it", "Facilitate a resolution discussion", "Take sides", "Replace one member"],
      answer: "Facilitate a resolution discussion"
    },
    {
      question: "The product release is tomorrow. You found a rare but high-impact crash bug. What's your call?",
      options: ["Report and delay release", "Ignore as it’s rare", "Hide it and fix post-release", "Blame QA"],
      answer: "Report and delay release"
    },
    {
      question: "You’re under pressure to deliver a project while your mental health is suffering. What’s the wise action?",
      options: ["Push yourself harder", "Take a break and inform manager", "Ignore health", "Quit immediately"],
      answer: "Take a break and inform manager"
    },
    {
      question: "A new AI tool can automate part of your team's work but may lead to downsizing. What do you do?",
      options: ["Hide the tool", "Propose it with reskilling plan", "Let HR handle it", "Avoid the topic"],
      answer: "Propose it with reskilling plan"
    },
    {
      question: "A high-value client offers you a personal contract to work outside your company. What’s ethical?",
      options: ["Accept secretly", "Inform your company and decline", "Negotiate higher", "Ignore ethics"],
      answer: "Inform your company and decline"
    },
    {
      question: "Your manager resigns mid-project and the client starts panicking. What should you do as acting lead?",
      options: ["Reassure and take interim charge", "Tell the client to wait", "Avoid leadership", "Panic with them"],
      answer: "Reassure and take interim charge"
    },
    {
      question: "You’re asked to present quarterly metrics but your data is incomplete. What do you do?",
      options: ["Fake the data", "Present with disclaimers", "Cancel the meeting", "Show only positive metrics"],
      answer: "Present with disclaimers"
    },
    {
      question: "You must choose between finishing a high-value project or helping a struggling teammate on a low-value one. What’s the priority?",
      options: ["Help teammate", "Complete high-value project first", "Do both halfway", "Leave both"],
      answer: "Complete high-value project first"
    },
  ],
};

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const { level } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 20);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowScore(true);
    }
  }, [quizStarted, timeLeft]);

  const startQuiz = () => {
    const levelQuestions = originalQuestions[level];
    if (!levelQuestions) return;
    const shuffled = shuffleArray(levelQuestions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(60 * 20);
    setShowScore(false);
    setQuizStarted(true);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    const next = currentQuestionIndex + 1;
    if (next < questions.length) {
      setCurrentQuestionIndex(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex justify-center items-center px-4 py-10 transition-all duration-500">
      <div className="bg-white border border-blue-200 rounded-2xl shadow-xl w-full max-w-3xl p-6 sm:p-8 transition-all hover:shadow-2xl">
        {!quizStarted ? (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-4">
              Welcome to the {level.charAt(0).toUpperCase() + level.slice(1)} Quiz
            </h1>
            <p className="text-base sm:text-lg text-[#1E3A8A] mb-6">
              Challenge yourself with shuffled questions and test your decision-making skills!
            </p>
            <button
              onClick={startQuiz}
              className="bg-blue-200 hover:bg-blue-300 text-[#1E3A8A] hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Start Quiz
            </button>
          </div>
        ) : showScore ? (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-4">
              Quiz Completed!
            </h1>
            <p className="text-lg text-[#1E3A8A] mb-4">
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={startQuiz}
              className="bg-pink-200 hover:bg-pink-300 text-[#1E3A8A] hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1E3A8A] mb-6">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-100 hover:bg-blue-300 text-[#1E3A8A] hover:text-white px-4 py-2 rounded-xl transition duration-300 font-medium shadow-sm w-full"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 text-right text-[#1E3A8A] font-medium">
              Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}{timeLeft % 60}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
