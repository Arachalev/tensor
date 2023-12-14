"use client";

import React, { createContext, useState } from "react";

export const AppContext = createContext({
  deviceWidth: window.outerWidth,
  updateDeviceWidth: (value: number) => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deviceWidth, setDeviceWidth] = useState(window.outerWidth);

  const updateDeviceWidth = (value: number) => {
    setDeviceWidth(value);
  };

  return (
    <AppContext.Provider
      value={{
        updateDeviceWidth,
        deviceWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
