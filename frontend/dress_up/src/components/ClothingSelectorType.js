import React, { useState, useEffect } from "react";
import ClothingItem from "./ClothingItem";
import "./ClothingSelector.scss";

const ClothingSelectorType = (props) => {
  const [clothing, setClothing] = useState([]);
  const { type, active } = props;

  // retrieve clothing items upon page load
  useEffect(() => {
    if (active) {
      fetch(
        "http://localhost:3001/api/clothings?" +
          new URLSearchParams({ type: type })
      )
        .then((response) => {
          if (!response.ok) {
            alert(response.status);
          }

          return response.json();
        })
        .then((data) => {
          setClothing(data);
        });
    }
  }, [type, active]);

  const selectItemHandler = (itemId) => {
    props.onSelectItem(itemId);
  };

  return (
    <div className="clothing-items">
      {clothing
        .filter((item) => item.category === type)
        .map((item) => (
          <ClothingItem
            key={item.id}
            onClick={selectItemHandler.bind(null, item.id)}
            item={{ url: item.url, name: item.name }}
          />
        ))}
    </div>
  );
};

export default ClothingSelectorType;
