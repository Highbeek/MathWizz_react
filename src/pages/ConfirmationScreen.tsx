import React from "react";
import { motion } from "framer-motion";
import { useUserContext } from "../hooks/UserContext";
import { avatars } from "../constants";

const ConfirmationScreen = () => {
  const { userProfile, selectedAvatar } = useUserContext();

  const selectedAvatarUrl = avatars.find(
    (avatar) => avatar.img === selectedAvatar
  )?.img;

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-4 sm:px-10">
      <div className="flex flex-col pt-5 mr-[auto]">
        {selectedAvatarUrl && (
          <div className="flex justify-center h-30 w-30 rounded-full bg-btngradient">
            <img
              src={selectedAvatarUrl}
              alt="selected avatar"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-4"
            />
          </div>
        )}

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
