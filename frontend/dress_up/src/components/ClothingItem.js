import React from "react";
import classes from "./ClothingItem.module.css";

const ClothingItem = (props) => {
  const { url, name } = props.item;

  return (
    <div className={classes["clothing-item"]}>
      <button onClick={props.onClick}>
        <img src={url} alt={name} />
      </button>
    </div>
  );
};

export default ClothingItem;
