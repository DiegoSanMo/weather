import { useState, useMemo } from "react";
import "./App.css";

import Header from "./Layouts/Header/Header";
import Form from "./components/Form/Form";

import { weatherContext } from "./context";
function App() {
  const [city, setCity] = useState("Toronto");
  const [showWeather, setShowWeather] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const value = useMemo(
    () => ({
      city,
      setCity,
      showWeather,
      setShowWeather,
      showContent,
      setShowContent,
    }),
    [city, showWeather, showContent]
  );

  return (
    <weatherContext.Provider value={value}>
      <div className="container">
        <Header />
        <Form />
      </div>
    </weatherContext.Provider>
  );
}

export default App;
