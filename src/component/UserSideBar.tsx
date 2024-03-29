import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { signOutWithGoogle } from "../config/firebase";
import { medals, levelDescriptions } from "../constants";

interface SidebarProps {
  selectedAvatarUrl: string | null | undefined;
  userProfile: string | null | undefined;
}

const userProgress = ""; 


export const Sidebar: React.FC<SidebarProps> = ({
  selectedAvatarUrl,
  userProfile,
}) => {
  const currentLevel =
    userProgress >= 1 && userProgress < 33.4
      ? 1
      : userProgress >= 33.4 && userProgress < 67.1
      ? 2
      : userProgress >= 67.1 && userProgress <= 100
      ? 3
      : 0;

  const currentLevelDescription =
    levelDescriptions.find((desc) => desc.level === currentLevel)
      ?.description || "Get ready to embark on a math adventure! 🚀";

  return (
    <div className="flex w-full items-center justify-around py-10 border-r-0 border-0 lg:flex-col lg:justify-between lg:border-r-2 lg:w-[25%] px-10">
      {selectedAvatarUrl && (
        <div className="flex flex-col justify-between items-center lg:w-full">
          <img
            src={selectedAvatarUrl}
            alt="selected avatar"
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-4 border-4 border-green-400"
          />
          <p className="text-default lg:hidden">{userProfile}</p>
          <p className="hidden lg:block lg:text-default text-base sm:text-lg font-changa">
            Welcome {userProfile} the Math Guru
          </p>
          <div className="flex my-10 justify-around w-full">
            {medals.map(({ id, img }) => (
              <div key={id}>
                <img src={img} alt="medal" className="w-10" />
              </div>
            ))}
          </div>
          <div className="w-60 mx-10">
            <div className="relative h-4 rounded-full bg-gray-300">
              <div
                className="absolute h-full rounded-full bg-blue-500"
                style={{
                  width: `${userProgress}%`,
                }}
              ></div>
              <div className="absolute h-full w-4 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full">
        <p className="text-default text-center font-changa text-xl">
          {`Level ${currentLevel}`}
        </p>
        <p className="text-default text-center font-changa">
          {currentLevelDescription}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full justify-between">
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
  );
};
