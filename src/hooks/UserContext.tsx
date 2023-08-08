import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  userProfile: string | null;
  selectedAvatar: string | null;
  updateUserProfile: (profile: string) => void;
  updateSelectedAvatar: (avatar: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

const UserProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const updateUserProfile = (profile: string) => {
    setUserProfile(profile);
  };

  const updateSelectedAvatar = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        selectedAvatar,
        updateUserProfile,
        updateSelectedAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
