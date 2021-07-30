import React from "react";
import ClothingSelector from "./ClothingSelector";

const Characters = (props) => {
  const character = props.character;

  let clothingContent;
  if (props.clothings) {
    clothingContent = props.clothings.map((item) => {
      <div id={`selected-${item.category}`}>
        <img src={item.url} alt={item.name} />
      </div>
    });
  }

  return (
    <>
      <h1>{character.name}</h1>
      <div className="person">
        <div className="body">
          <img src={character.body} alt="character's body" />
          <div className="selected-clothes">
            {clothingContent}
          </div>
        </div>
      </div>

      <ClothingSelector
        name={character.name.replace(/\s+/, "")}
        id={character.id}
      />
    </>
  );
};

export default Characters;
