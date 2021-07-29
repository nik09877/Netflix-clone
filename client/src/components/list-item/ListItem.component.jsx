import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
  Add,
} from "@material-ui/icons";
import "./list-item.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=TcMBFSGVi1c";

  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      {isHovered && (
        <>
          {/*<video src={trailer} autoPlay={true} loop />*/}
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              enim dolore soluta at delectus ex quo incidunt porro tempora
              recusandae.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
