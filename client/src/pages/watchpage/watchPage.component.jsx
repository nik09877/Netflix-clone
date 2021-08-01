import React from "react";
import "./watch-page.styles.scss";
import ArrowBack from "@material-ui/icons/ArrowBack";
const WatchPage = () => {
  return (
    <div className="watch-page">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video className="video" autoPlay progress controls src="" />
    </div>
  );
};

export default WatchPage;
