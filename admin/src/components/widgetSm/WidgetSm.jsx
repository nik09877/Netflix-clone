import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span calssName="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span calssName="widgetSmUsername">Nik Harrison</span>{" "}
            <span calssName="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span calssName="widgetSmUsername">Nik Harrison</span>{" "}
            <span calssName="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span calssName="widgetSmUsername">Nik Harrison</span>{" "}
            <span calssName="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="profile pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span calssName="widgetSmUsername">Nik Harrison</span>{" "}
            <span calssName="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            alt="profile pic"
          />
          <div className="widgetSmUser">
            <span calssName="widgetSmUsername">Nik Harrison</span>
            <span calssName="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
