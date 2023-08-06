import React from "react";
import GameCard from "../component/gameCard";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  return (
    <motion.div variants={textVariant} initial="hidden" animate="visible">
      <div className="flex flex-col h-screen bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] via-opacity-10 overflow-hidden">
        <h1 className="text-default text-5xl font-black-ops px-10">MathWiz</h1>
        <div className="flex lg:flex-row px-10 mt-10 ">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-default text-8xl tracking-wide font-changa"
          >
            Keep Learning on Track
          </motion.p>
          <div className="flex flex-col items-center justify-center">
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-default font-changa py-10 px-20 tracking-wide "
            >
              Test your math skills and improve your mental arithmetic with
              MathWiz! Solve random math questions and see how high you can
              score.
            </motion.p>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{
                type: "tween",
                delay: 0.2,
                duration: 1,
                ease: "easeOut",
              }}
              className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
              <button className="text-default font-changa w-56 px-10 py-5 mt-16 text-2xl rounded-full bg-gradient-to-r from-[#5f1611] via-[#5f1611] to-[#a8eb12]">
                Start Now
              </button>
            </motion.div>
          </div>
        </div>
        <div>
          <GameCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
