import React from "react";
import "./card.css";

function card(props) {
  const clases = "card " + props.className;
  return <div className={clases}>{props.children}</div>;
}

export default card;
