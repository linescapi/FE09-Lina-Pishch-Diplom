import { createContext, useState, useContext } from "react";
import { listenToUserChange } from "../firebase/auth";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  listenToUserChange(setUser);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = () => {
  const currentUser = useContext(userContext);
  return currentUser;
};
