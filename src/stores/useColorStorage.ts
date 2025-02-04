"use client";

import { useState, useEffect } from "react";

export function useColorStorage(defaultColor: string) {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    const storedColor = localStorage.getItem("userColor");
    if (storedColor) setColor(storedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem("userColor", color);
  }, [color]);

  return [color, setColor] as const;
}
