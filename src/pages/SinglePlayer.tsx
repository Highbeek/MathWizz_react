import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "../component/Timer";
import { Question } from "../component/Questions";
import { generateQuestion } from "../utils/appUtils";

const SinglePlayer: React.FC = () => {
  const [questionData, setQuestionData] = useState({
    question: "",
    answerChoices: [],
    explanation: "",
  });

  const loadQuestion = useCallback(async () => {
    const newQuestionData = await generateQuestion();

    if (newQuestionData) {
      setQuestionData(newQuestionData);
    }
  }, []);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
      <div className="text-default">
        <CountdownTimer />
        <Question
          question={questionData.question}
          answerChoices={questionData.answerChoices}
          onChoiceSelect={loadQuestion}
        />
      </div>
      <button className="btn" onClick={loadQuestion}>
        Load New Question
      </button>
    </motion.div>
  );
};

export default SinglePlayer;
