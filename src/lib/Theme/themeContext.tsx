"use client";
import { createContext, useMemo } from "react";
import defaultTheme from "./defaultTheme";

interface ThemeContextInterface {
  theme?: unknown;
  //   mode?: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: object;
}

const ThemeWrapper: React.FC<Props> = ({
  children,
  // theme: customTheme
}) => {
  const value = useMemo(
    () => ({
      theme: defaultTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeWrapper;
