import React from "react";
import "./home.css";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import { data } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title={"User Analytics"}
        data={data}
        dataKey={"Active User"}
        grid={true}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
