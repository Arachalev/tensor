"use client";

import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  deviceWidth: 1300,
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
