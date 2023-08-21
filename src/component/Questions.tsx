import React, { useState, useEffect } from "react";
import axios from "axios"; // You need to install axios

const OPENAI_API_KEY = import.meta.env.VITE_APP_OPENAI_API_KEY; 
const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions"; // Endpoint for GPT-3

interface AnswerChoice {
  text: string;
  isCorrect: boolean;
}

export const Question: React.FC= () => {
  const [question, setQuestion] = useState<string | null>(null);
  const [answerChoices, setAnswerChoices] = useState<AnswerChoice[]>([]);
  const [explanation, setExplanation] = useState<string | null>(null);

  const generateQuestion = async () => {
    try {
      const prompt =
        "Generate a math-related multiple-choice question and explanation:\n\n";
      const response = await axios.post(
        OPENAI_API_URL,
        {
          prompt: prompt,
          max_tokens: 150, // Adjust as needed
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      // Extract question, answer choices, and explanation from response
      const responseData = response.data.choices[0].text.split("\n\n");
      setQuestion(responseData[0]);
      const choicesData = responseData[1].split("\n");
      const correctAnswerIndex = Number(responseData[2]);
      const parsedAnswerChoices = choicesData.map((choice, index) => ({
        text: choice,
        isCorrect: index === correctAnswerIndex,
      }));
      setAnswerChoices(parsedAnswerChoices);
      setExplanation(responseData[3]);
    } catch (error) {
      console.error("Error generating question:", error);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="game-container">
      <div className="question">
        {question ? (
          <>
            <div className="question-text">{question}</div>
            <div className="choices">
              {answerChoices.map((choice, index) => (
                <button
                  key={index}
                  className={choice.isCorrect ? "correct" : "incorrect"}
                  disabled={explanation !== null}
                  onClick={() => setExplanation(explanation)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="explanation">
        {explanation && (
          <>
            <div className="explanation-text">{explanation}</div>
            <button onClick={generateQuestion}>Next Question</button>
          </>
        )}
      </div>
    </div>
  );
};
