"use client";

import { createContext, useContext, useState } from "react";

const MainContext = createContext({
  isSideBarOpen: false,
  toggleSideBar: () => {},
});

export const MainContextProvider = ({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>) => {
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
