import { createContext } from "react";

export const weatherContext = createContext({
  city: "",
  setCity: () => {},
  showWeather: false,
  setShowWeather: () => {},
  showContent: false,
  setShowContent: () => {},
});
