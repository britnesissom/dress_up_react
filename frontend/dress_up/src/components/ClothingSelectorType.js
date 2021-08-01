import React, { useState, useEffect } from "react";
import ClothingItem from "./ClothingItem";
import "./ClothingSelector.scss";

const ClothingSelectorType = (props) => {
  const [clothing, setClothing] = useState([]);
  const { id, type } = props;

  // retrieve clothing items upon page load
  useEffect(() => {
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
  }, [type]);

  const selectItemHandler = (itemId) => {
    const url = `http://localhost:3001/api/clothings/${itemId}/select`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ id: itemId, charId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        alert(response.status);
      }
    });
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
