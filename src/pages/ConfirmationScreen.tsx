import React from "react";
import { motion } from "framer-motion";
import { useUserContext } from "../hooks/UserContext";
import { avatars } from "../constants";
import { signInWithGoogle } from "../config/firebase";

const ConfirmationScreen = () => {
  const { userProfile, selectedAvatar } = useUserContext();

  const selectedAvatarUrl = avatars.find(
    (avatar) => avatar.img === selectedAvatar
  )?.img;

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-4 sm:px-10">
      <p className="text-default py-6 sm:py-10 font-black-ops text-2xl">
        Confirmation
      </p>
      <div className="flex flex-col items-center">
        {selectedAvatarUrl && (
          <img
            src={selectedAvatarUrl}
            alt="selected avatar"
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-4"
          />
        )}
        <p className="text-white text-lg sm:text-xl font-changa mb-2">
          Username: {userProfile}
        </p>
        <p className="text-default text-base sm:text-lg font-changa">
          Welcome {userProfile} the Math Guru 
        </p>
        <div className="mt-4 space-y-2">
          <button className="btn" onClick={() => handleSinglePlayerClick()}>
            Single Player
          </button>
          <button className="btn" onClick={() => handlePlayWithFriendsClick()}>
            Play with Friends
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmationScreen;
