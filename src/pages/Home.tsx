import React from "react";
import { GameCard } from "../component/gameCard";
import { motion } from "framer-motion";
import { signInWithGoogle } from "../config/firebase";
import { useUserContext } from "../hooks/UserContext";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  const { userProfile, selectedAvatar } = useUserContext();

  const handleSignIn = () => {
    signInWithGoogle(userProfile, selectedAvatar);
  };

  return (
    <motion.div variants={textVariant} initial="hidden" animate="visible">
      <div className="flex flex-col h-screen bgGradient overflow-hidden">
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
              <button
                className="btn w-56 px-10 py-5 text-2xl"
                onClick={handleSignIn}
              >
                Start Now
              </button>
              <p className="text-default text-center pt-5">
                Sign In With Google
              </p>
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
