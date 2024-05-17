"use client";

import { createContext, useContext, useState } from "react";

const MainContext = createContext({});

export const MainContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <MainContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
