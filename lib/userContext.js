import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("contractor");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    setName(localStorage.getItem("userName"));
    setUserId(localStorage.getItem("userId"));
    setCurrentLocation(JSON.parse(localStorage.getItem("currentLocation")));
    setUserType(localStorage.getItem("userType"));
  }, []);

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
