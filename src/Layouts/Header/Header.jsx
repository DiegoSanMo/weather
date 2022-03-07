import React, { useContext } from "react";
import { weatherContext } from "../../context";
const Header = () => {
  const { showContent, setShowContent } = useContext(weatherContext);

  const handlerContent = () => {
    setShowContent(!showContent);
  };
  const icon = showContent ? (
    <span className="close" onClick={handlerContent}>
      &#10005;
    </span>
  ) : (
    <span className="close" onClick={handlerContent}>
      &#128468;
    </span>
  );
  return (
    <div className="header">
      <h2 className="title">Weather Forrecast</h2>
      {icon}
    </div>
  );
};

export default Header;
