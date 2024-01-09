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
      <div className="flex flex-col min-h-screen bgGradient overflow-hidden">
        <h1 className="text-default text-3xl md:text-5xl font-black-ops px-4 md:px-10 text-left mt-4 md:mt-0">
          MathWiz
        </h1>
        <div className="flex flex-col items-center mt-4 px-4 md:px-10">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-default text-5xl md:text-8xl tracking-wide font-changa text-center"
          >
            Keep Learning on Track
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-default font-changa py-4 md:py-10 tracking-wide text-center"
          >
            Test your math skills and improve your mental arithmetic with
            MathWiz! Solve random math questions and see how high you can score.
          </motion.p>
          <div className="mt-4">
            <GameCard />
          </div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="w-full md:w-[75%] bg-black-100 p-4 md:p-8 rounded-2xl mb-0"
          >
            <button
              className="btn w-full md:w-56 px-4 md:px-10 py-3 md:py-5 text-lg md:text-2xl"
              onClick={handleSignIn}
            >
              Start Now
            </button>
            <p className="text-default text-center pt-2 md:pt-5">
              Sign In With Google
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
