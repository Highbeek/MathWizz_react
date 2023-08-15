import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "../component/Timer";

const apiKey = "YOUR_WOLFRAM_ALPHA_API_KEY"; // Replace with your actual API key

const SinglePlayer: React.FC = () => {
  const [question, setQuestion] = useState("");

  const generateMathQuestion = async () => {
    
    const response = await fetch(
      `https://api.wolframalpha.com/v2/query?input=generate%20a%20math%20question&format=plaintext&output=JSON&appid=${apiKey}`
    );
    const data = await response.json();
    const pod = data.queryresult.pods.find(pod => pod.title === "Result");
    if (pod) {
      return pod.subpods[0].plaintext;
    }
    return null;
  };

  const loadQuestion = async () => {
    const newQuestion = await generateMathQuestion();
    if (newQuestion) {
      setQuestion(newQuestion);
      // Logic to set answer choices and correct answer based on the question
    }
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
      <div className="text-default">
        <CountdownTimer />
        <p>{question}</p>
        {/* Render answer choices, input field for user's answer, and submit button */}
      </div>
      <button className="btn" onClick={loadQuestion}>
        Load New Question
      </button>
    </motion.div>
  );
};

export default SinglePlayer;
