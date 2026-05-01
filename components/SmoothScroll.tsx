"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    initScroll();
  }, []);

  return null;
};

export default SmoothScroll;
