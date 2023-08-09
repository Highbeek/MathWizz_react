import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { avatars } from "../constants";
import { useUserContext } from "../hooks/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const {
    userProfile,
    selectedAvatar,
    updateUserProfile,
    updateSelectedAvatar,
  } = useUserContext();

  const [text, setText] = useState(userProfile || ""); // Initialize with existing username
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [canCreateProfile, setCanCreateProfile] = useState(false);

  useEffect(() => {
    // Update canCreateProfile whenever the username or selectedAvatar changes
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
    <motion.div className="bg-gradient-to-bl from-[#000000] via-[#000000] to-[#051937] h-screen px-10 ">
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
        <div className="max-w-xl grid grid-cols-4 gap-4">
          {avatars.map(({ img }) => (
            <img
              key={img}
              src={img}
              alt="avatar"
              className={`w-24 h-24 rounded-full cursor-pointer ${
                selectedAvatar === img ? "border-2 border-yellow-800" : ""
              }`}
              onClick={() => handleAvatarClick(img)}
            />
          ))}
        </div>
        <button
          className={`btn my-2 ${
            canCreateProfile ? "" : "opacity-50 pointer-events-none"
          }`}
          onClick={handleCreateProfile}
        >
          Create Profile
        </button>
      </div>
    </motion.div>
  );
};

export default Profile;
