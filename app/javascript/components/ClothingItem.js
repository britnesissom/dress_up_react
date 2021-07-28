import React from "react";

const ClothingItem = (props) => {
  const { id, url, name } = props.item;

  return (
    <div className="clothing-item">
      <button onClick={props.onClick.bind(id)}>
        <img src={url} alt={name} />
      </button>
    </div>
  );
};

export default ClothingItem;
