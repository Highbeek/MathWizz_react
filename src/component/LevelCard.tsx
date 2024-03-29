import { useState } from "react";
import { Level } from "../constants";
import { Tilt } from "react-tilt";
import { MdCheckCircle } from "react-icons/md";

interface LevelCardProps {
  selectedLevel: number | null;
  onLevelSelect: (index: number) => void;
}
const LevelCard = ({ selectedLevel, onLevelSelect }) => {
  return (
    <div className="flex justify-around w-full items-center">
      {Level.map(({ id, icon, title, description, color }, index) => (
        <div
          key={id}
          className={`h-36 w-56 rounded-2xl relative cursor-pointer
          }`}
          style={{
            backgroundColor: color,
          }}
        >
          <Tilt
            className="h-full w-full"
            // options={{ max: 25, perspective: 1000, scale: 1.05 }}
          >
            <div
              onClick={() => {
                onLevelSelect(index);
              }}
            >
              <div className="bg-white h-14 w-14 rounded-lg flex justify-center items-center mt-3 ml-3">
                <img
                  src={icon}
                  alt=""
                  className="w-12 h-12 border-4 bg-gray-400"
                />
              </div>
              <p className="absolute top-5 right-5 font-black-ops">{title}</p>
              <p className="text-sm py-2 px-2 font-changa">{description}</p>
              {selectedLevel === index && (
                <div className="absolute bottom-5 right-2">
                  <MdCheckCircle size={24} color="#00FF00" />
                </div>
              )}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default LevelCard;
