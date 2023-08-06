import React from "react";
import { motto } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const GameCard = () => {
  return (
    <motion.div className="relative flex">
      {motto.map(({ id, header, description, icon, bg }, index) => (
        <Tilt className="xs:w-[250px]">
          <div
            key={id}
            style={{
              backgroundColor: bg,
              transform: `rotate(${
                index === 0 ? "10" : index === motto.length - 1 ? "20" : "0"
              }deg)`,
              transformOrigin:
                index === 0
                  ? "right center"
                  : index === motto.length - 1
                  ? "left center"
                  : "center bottom",
              marginLeft: index !== 0 ? "50px" : "0",
              zIndex: motto.length,
            }}
            className={`p-4 w-80 rounded-3xl h-[250px] ${
              index !== 0 ? "ml-[-40px]" : ""
            }`}
          >
            <div className="flex px-5 pb-2 gap-3">
              <img src={icon} alt="icon" className="w-10 h-10" />
              <p className="font-changa font-bold py-2">{header}</p>
            </div>
            <p className="px-5">{description}</p>
            <button className="bg-[#242323] rounded-full text-default px-3 py-1 mt-5 mx-5 absolute bottom-5 left-5">
              Explore
            </button>
          </div>
        </Tilt>
      ))}
    </motion.div>
  );
};

export default GameCard;
