"use client";

import React, { createContext, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const AppContext = createContext({
  deviceWidth: 1300,
  showNav: {
    whatWedDo: true,
    whoWeAre: false,
    join: false,
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
    whoWeAre: false,
    join: false,
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

  // gsap.registerPlugin(useGSAP);

  gsap.registerEffect({
    name: "primaryBtnHoverEnter",
    effect: (targets: gsap.TweenTarget, config: any) => {
      return gsap.to(targets, {});
    },
    extendTimeline: true,
  });

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
