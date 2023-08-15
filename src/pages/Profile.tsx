import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { avatars } from "../constants";
import { useUserContext } from "../hooks/UserContext";
import { useNavigate } from "react-router-dom";
import { slideIn } from "../utils/motion";
import Rubik from "../canvas/Rubik";

const Profile = () => {
  const navigate = useNavigate();
  const {
    userProfile,
    selectedAvatar,
    updateUserProfile,
    updateSelectedAvatar,
  } = useUserContext();

  const [text, setText] = useState(userProfile || "");
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [canCreateProfile, setCanCreateProfile] = useState(false);

  useEffect(() => {
    setCanCreateProfile(text && selectedAvatar);
  }, [text, selectedAvatar]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setText(username);
    setUsernameTaken(isUsernameTaken(username));
  };

  const handleAvatarClick = (img: string) => {
    updateSelectedAvatar(img);
  };

  const handleCreateProfile = () => {
    console.log("Create profile button clicked");
    if (userProfile && !usernameTaken) {
      updateUserProfile(text);
      navigate("/con");
    }
  };

  const isUsernameTaken = (username: string) => {
    return username === "username1" || username === "username2";
  };

  return (
    <div className="lg:flex-row flex-col-reverse flex gap-10  bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex-[0.5] border-r"
      >
        <p className="text-default py-10 font-black-ops text-2xl">
          Let's Create your Profile
        </p>
        <div className="flex flex-col">
          <label htmlFor="" className="text-default text-xl font-changa">
            Create a Username
          </label>
          <input
            type="text"
            placeholder="USERNAME"
            value={text}
            className={`py-5 px-2 placeholder:text-gray-500 font-bold font-changa focus:outline-none w-96 ${
              usernameTaken ? "border border-red-500" : ""
            }`}
            onChange={handleTextChange}
          />
          {usernameTaken && (
            <p className="text-red-500 text-sm">Username is already taken</p>
          )}
        </div>
        <div>
          <p className="text-default text-xl font-changa my-5">
            Choose your Avatar
          </p>
          <div className="max-w-xl grid grid-cols-4 gap-3">
            {avatars.map(({ img }) => (
              <img
                key={img}
                src={img}
                alt="avatar"
                className={`w-24 h-24 rounded-full cursor-pointer ${
                  selectedAvatar === img ? "border-8 border-yellow-800" : ""
                }`}
                onClick={() => handleAvatarClick(img)}
              />
            ))}
          </div>
          <button
            className={`btn my-2 w-56 px-10 py-3 text-2xl ${
              canCreateProfile ? "" : "opacity-50 pointer-events-none"
            }`}
            onClick={handleCreateProfile}
          >
            Create Profile
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex-[0.5] lg:h-auto md:h-[550px] h-[350px] text-default"
      >
        <Rubik />
      </motion.div>
    </div>
  );
};

export default Profile;
