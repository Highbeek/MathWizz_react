import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useUserContext } from "../hooks/UserContext";
import { avatars } from "../constants";
import trophy from "../assets/trophy.png";
import { FaPowerOff } from "react-icons/fa";
import { signOutWithGoogle } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import LevelCard from "../component/LevelCard";
import MultiplayerModal from "../component/multiPlayerModal";
import { medals } from "../constants";

const ConfirmationScreen = () => {
  const navigate = useNavigate();

  const { userProfile, selectedAvatar } = useUserContext();

 
  const selectedAvatarUrl = avatars.find(
    (avatar) => avatar.img === selectedAvatar
  )?.img;

  const handleSinglePlayerClick = () => {
    navigate("/singleplayer"); //
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
      <div className="flex w-full items-center justify-around py-10 border-r-0 border-0 lg:flex-col lg:justify-between lg:border-r-2 lg:w-[25%] px-10">
        {selectedAvatarUrl && (
          <div className="flex  flex-col justify-between  items-center  lg:w-full">
            <img
              src={selectedAvatarUrl}
              alt="selected avatar"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-4 border-4 border-green-400"
            />
            <p className="text-default lg:hidden">{userProfile}</p>
            <p className="hidden lg:block lg:text-default text-base sm:text-lg font-changa ">
              Welcome {userProfile} the Math Guru
            </p>
            <div className="flex my-10 justify-around w-full">
              {medals.map(({ id, img }) => (
                <div key={id} className="">
                  <img src={img} alt="img" className="w-10" />
                </div>
              ))}
            </div>
            <div className="w-60 border-2 mx-10 border-blue-500"/>
          </div>
        )}

        <div>
          <p className="text-default text-center font-changa text-xl">Level 1</p>
          <p className="text-default text-center font-changa">You're a Champ , Keep Going 🚀</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:w-full lg:justify-between">
          <p
            className="text-gray-500 font-semibold font-changa cursor-pointer"
            onClick={signOutWithGoogle}
          >
            Sign Out
          </p>

          <FaPowerOff
            color="gray"
            className="cursor-pointer"
            onClick={signOutWithGoogle}
          />
        </div>
      </div>
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
