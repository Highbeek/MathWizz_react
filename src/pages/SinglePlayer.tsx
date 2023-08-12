import React, { useState, useEffect } from "react";
import * as math from "mathjs";
import { motion } from "framer-motion";
import CountdownTimer from "../component/Timer";

const SinglePlayer = () => {
  const [question, setQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const generateQuestion = () => {
    let num1, num2, operator;

    do {
      num1 = math.randomInt(1, 20);
      num2 = math.randomInt(1, 20);
      operator = math.pickRandom(["+", "-", "*", "/"]);
    } while ((operator === "-" || operator === "/") && num1 < num2);

    const questionText = `${num1} ${operator} ${num2}`;
    setQuestion(questionText);
    setUserAnswer("");
    setIsAnswerCorrect(false);
  };

  const checkAnswer = () => {
    const correctAnswer = math.evaluate(question).toString();
    if (userAnswer === correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSubmit = () => {
    checkAnswer();
    generateQuestion();
  };

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
      <div className="text-default">

      <CountdownTimer />
      </div>
      <div className="text-default">{question}</div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      {isAnswerCorrect && (
        <div>
          <p className="text-default">Correct!</p>
          {/* Display a star icon or any other visual feedback */}
        </div>
      )}
    </motion.div>
  );
};

export default SinglePlayer;
