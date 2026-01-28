import React from "react";
import "../styles/platformStatus.css";

export const PlatformStatus = ({ StatusData }) => {
  return (
    <div className="statusHeader">
      Platform stats
      <div className="platformStatus">
        {StatusData.map((item, index) => (
          <div key={index}>
            <img className="statusImage" src={item.icon} alt="images" />
            <p className="postHeader">{item.totalPost}</p>
            <p className="postInfo">{item.infoText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
