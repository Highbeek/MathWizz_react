import React, { useState } from "react";
import { Level } from "../constants";
import { Tilt } from "react-tilt";
import { MdCheckCircle } from "react-icons/md";

const LevelCard = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleLevelSelect = (index: number) => {
    console.log("handleLevelSelect called");
    setSelectedLevel(index);
    console.log("card selected");
  };

  return (
    <div className="flex justify-around w-full items-center">
      {Level.map(({ id, icon, title, description, color }, index) => (
        <Tilt
          key={id}
          className={`h-36 w-56 rounded-2xl relative cursor-pointer ${
            selectedLevel === id ? "border-2 border-green-500" : ""
          }`}
          style={{
            backgroundColor: color,
            // border: "2px solid red",
          }}
          onClick={() => {
            handleLevelSelect(index);
          }}
        >
          <div className="bg-white h-14 w-14 rounded-lg flex justify-center items-center mt-3 ml-3">
            <img src={icon} alt="" className="w-12 h-12 border-4 bg-gray-400" />
          </div>
          <p className="absolute top-5 right-5 font-black-ops">{title}</p>
          <p className="text-sm py-2 px-2 font-changa">{description}</p>
          {selectedLevel === id && (
            <div className="absolute top-2 right-2">
              <MdCheckCircle size={24} color="#00FF00" />
            </div>
          )}
        </Tilt>
      ))}
    </div>
  );
};

export default LevelCard;
