import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUserContext } from "../hooks/UserContext";
import { avatars } from "../constants";
import trophy from "../assets/trophy.png";
import { useNavigate } from "react-router-dom";
import LevelCard from "../component/LevelCard";
import MultiplayerModal from "../component/multiPlayerModal";
import { Sidebar } from "../component/UserSideBar";

const ConfirmationScreen = () => {
  const navigate = useNavigate();

  const { userProfile, selectedAvatar } = useUserContext();

  // const selectedAvatarUrl = avatars.find(
  //   (avatar) => avatar.img === selectedAvatar
  // )?.img;

  const handleSinglePlayerClick = () => {
    navigate("/singleplayer");
  };

  const [isMultiplayerModalOpen, setMultiplayerModalOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const openMultiplayerModal = () => {
    setRandomNumber(Math.floor(Math.random() * 6) + 1);
    setMultiplayerModalOpen(true);
  };

  const closeMultiplayerModal = () => {
    setMultiplayerModalOpen(false);
  };

  return (
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[rgb(5,25,55)] h-screen p flex flex-col lg:flex-row ">
      <Sidebar selectedAvatarUrl={selectedAvatar} userProfile={userProfile} />

      <div className="h-full flex flex-col lg:w-[75%] items-center justify-between my-10 lg:h-[auto]">
        <div className="relative flex flex-row justify-between w-full items-center bg-default h-16 px-10 rounded-lg mx-28 lg:w-1/2">
          <div className="text-center">
            <p className="text-blue-500 text-2xl  lg:text-3xl">134</p>
            <p className="text-gray-500 text-sm font-bold">GAMES PLAYED</p>
          </div>
          <div className="text-center">
            <p className="text-blue-500 text-xl lg:text-3xl">44</p>
            <p className="text-gray-500 text-sm font-bold">RECENT SCORE</p>
          </div>
          <div className="flex flex-col bg-blue-600 w-28 h-28 rounded-full justify-center items-center absolute left-[40%] border-8 border-[btn]">
            <img src={trophy} alt="" className="w-10 h-10" />
            <p className="text-default text-xs">584321</p>
            <p className="text-default text-xs">HIGHEST SCORE</p>
          </div>
        </div>
        <LevelCard />
        <div className="flex flex-col lg:flex-row justify-center gap-4 items-center ">
          <button
            className="btn w-56 px-10 py-5 text-2xl"
            onClick={handleSinglePlayerClick}
          >
            Single Player
          </button>
          <button
            className="btn w-56 px-10 py-5 text-2xl"
            onClick={openMultiplayerModal}
          >
            Multiplayer
          </button>
        </div>
      </div>

      {/* Define the multiplayer modal */}
      <MultiplayerModal
        isOpen={isMultiplayerModalOpen}
        onRequestClose={closeMultiplayerModal}
        randomNumber={randomNumber}
      />
    </motion.div>
  );
};

export default ConfirmationScreen;
