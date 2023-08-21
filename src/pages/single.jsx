import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "../component/Timer";
import { Question } from "../component/Questions";
import openai from "openai";

const SinglePlayer: React.FC = () => {
  const [question, setQuestion] = useState("");

  const generateMathQuestion = useCallback(async () => {
    const prompt =
      "Generate a math question about arithmetic but with no decimals.";

    const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

    const newQuestion = await fetchData(prompt, apiKey);

    if (newQuestion) {
      setQuestion(newQuestion);
    }
  }, []);

  const fetchData = async (prompt: string, apiKey: string) => {
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 50,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.error) {
        console.error("API Error:", data.error);
        return null;
      }

      if (data.choices && data.choices[0] && data.choices[0].text) {
        return data.choices[0].text;
      } else {
        console.error("Invalid data format:", data);
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const loadQuestion = useCallback(async () => {
    await generateMathQuestion();
  }, [generateMathQuestion]);

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
      <div className="text-default">
        <CountdownTimer />
        <Question />
        <p className="text-default">{question}</p>
      </div>
      <button className="btn" onClick={loadQuestion}>
        Load New Question
      </button>
    </motion.div>
  );
};

export default SinglePlayer;
