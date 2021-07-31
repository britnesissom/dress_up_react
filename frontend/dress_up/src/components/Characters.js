import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothingSelector from "./ClothingSelector";
import LoadingSpinner from "./LoadingSpinner";

const Characters = () => {
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    setIsLoading(true);
    const sendRequest = async () => {
      const response = await fetch(
        `http://localhost:3001/api/characters/${id}`
      );

      if (!response.ok) {
        throw new Error("There was an error retrieving your character");
      }

      const data = await response.json();
      setCharacter(data.character);
      setIsLoading(false);
    };

    sendRequest().catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  }, []);

  let clothingContent;
  console.log(character);
  if (character && character.clothing.length > 0) {
    clothingContent = character.clothing.map((item) => {
      return (
        <div id={`selected-${item.category}`}>
          <img src={item.url} alt={item.name} />
        </div>
      );
    });
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!error && !isLoading && (
        <>
          <h1>{character.meta.name}</h1>
          <div className="person">
            <div className="body">
              {/* <img src={character.body} alt="character's body" /> */}
              <div className="selected-clothes">{clothingContent}</div>
            </div>
          </div>

          <ClothingSelector
            name={character.meta.name.replace(/\s+/, "")}
            id={character.meta.id}
          />
        </>
      )}
    </>
  );
};

export default Characters;
