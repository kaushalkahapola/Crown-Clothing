import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuItem.styles.scss";

export const MenuItem = ({ title , imageUrl, size, linkUrl}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={`${size} menu-item`} onClick={()=>navigate(`${location.pathname}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
