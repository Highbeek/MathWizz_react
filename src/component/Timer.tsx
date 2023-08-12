import React from "react";
import { CountdownCircleTimer, TimeProps } from "react-countdown-circle-timer";

const CountdownTimer: React.FC = () => {
  const timerProps = {
    isPlaying: true,
    duration: 60,
    colors: [["#218380"]],
    size: 120,
    strokeWidth: 6,
  };

  const renderTime = ({ remainingTime }: TimeProps) => {
    // Display the remaining time dynamically
    return (
      <div className="time-wrapper">
        <div className="time">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className="countdown-container">
      <CountdownCircleTimer
        {...timerProps}
        trailColor="transparent"
        onComplete={() => console.log("Countdown completed")}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
