import React from "react";
import "./card.css";
import { Divider, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Card(props) {
  console.log({props});
  const { section, img, body, time } = props;

  return (
    <React.Fragment className="card-container">
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt="img" />
        </div>
        <div className="card-content">
          <Link to={"/"} style={{textDecoration: 'none'}}>
            <mark className="mark">{section}</mark>
          </Link>
          <div className="card-title">
            <Tooltip title="Show More" placement="right-start">
              <p>{body}</p>
            </Tooltip>
          </div>

          <Divider variant="middle">{time}</Divider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
