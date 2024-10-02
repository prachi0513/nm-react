import { createContext } from "react";
import { useState } from "react";

const UseLoginContext = createContext();

export const UseLoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UseLoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UseLoginContext.Provider>
  );
};

export default UseLoginContext;
