import React from "react";
import Featured from "../../components/featured/Featured.component";
import NavBar from "../../components/navbar/NavBar.component";
import List from "./../../components/list/List.component";
import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <Featured />
      <List />
    </div>
  );
};

export default HomePage;
