import React, { useState, useEffect } from "react";
import ClothingItem from "./ClothingItem";
import "./ClothingSelector.scss";

const ClothingSelectorType = (props) => {
  const [clothing, setClothing] = useState([]);
  const { type } = props;

  // retrieve clothing items upon page load
  useEffect(() => {
    fetch("http://localhost:3001/api/clothings?" + new URLSearchParams({ type: type }))
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          alert(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setClothing(data);
      });
  }, [type]);

  const selectItemHandler = (clothingId) => {
    const url = `http://localhost:3001/api/clothings/select`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ clothingId: clothingId, charId: props.id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        alert(response.status);
      }

      return response.json();
    });
  };

  return (
    <div className="clothing-items">
      {clothing
        .filter((item) => item.clothing_type === props.type)
        .map((item) => 
          <ClothingItem
            onClick={selectItemHandler}
            item={{ id: item.id, url: item.url, name: item.name }}
          />
        )}
    </div>
  );
};

export default ClothingSelectorType;
