import React from "react";

interface AnswerChoice {
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
  question: string;
  answerChoices: AnswerChoice[];
  onChoiceSelect: (index: number) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  answerChoices,
  onChoiceSelect,
}) => {
  console.log("Question component props:", question, answerChoices);

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
                  onClick={() => {
                    console.log("Choice clicked:", choice.text);
                    onChoiceSelect(index);
                  }}
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
    </div>
  );
};
