"use client";

import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  deviceWidth: 1300,
  showNav: {
    whatWedDo: true,
    whoWeAre: true,
    join: true,
  },
  updateShowNav: (item: "whatWedDo" | "whoWeAre" | "join") => {},
  updateDeviceWidth: (value: number) => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showNav, setShowNav] = useState({
    whatWedDo: true,
    whoWeAre: true,
    join: true,
  });

  const [deviceWidth, setDeviceWidth] = useState(1300);
  useEffect(() => {
    setDeviceWidth(window.outerWidth);
  }, []);

  const updateShowNav = (item: "whatWedDo" | "whoWeAre" | "join") => {
    setShowNav((state) => ({ ...state, [item]: !state[item] }));
  };

  const updateDeviceWidth = (value: number) => {
    setDeviceWidth(value);
  };

  return (
    <AppContext.Provider
      value={{
        updateDeviceWidth,
        deviceWidth,
        updateShowNav,
        showNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
