import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("contractor");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  const userContextValues = {
    userType,
    name,
    userId,
    currentLocation,
    setUserType,
    setName,
    setUserId,
    setCurrentLocation,
  };

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
