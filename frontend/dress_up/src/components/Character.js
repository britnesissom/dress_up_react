import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothingSelector from "./ClothingSelector";
import LoadingSpinner from "./util/LoadingSpinner";

import karaBodyImg from "../assets/kara_body.png";
import lenaBodyImg from "../assets/lena_body.png";
import "./Character.scss";
import Header from "./Header";

const Character = () => {
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
      console.log("retrieve character");
    };

    sendRequest().catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  }, [id]);

  const selectClothingHandler = (itemId) => {
    console.log("select");
    setIsLoading(true);
    const url = `http://localhost:3001/api/clothings/${itemId}/select`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ id: itemId, charId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert(response.status);
        }

        return response.json();
      })
      .then((data) => {
        setCharacter(data.character);
        setIsLoading(false);
      });
  };

  let clothingContent;
  if (!isLoading && character && character.clothing.length > 0) {
    clothingContent = character.clothing.map((item) => {
      return (
        <div key={item.id} id={`selected-${item.category}`}>
          <img src={item.url} alt={item.name} />
        </div>
      );
    });
  }

  return (
    <>
      <div className="bg">
        <Header showForm />
        {isLoading && <LoadingSpinner />}
        {error && <p>{error}</p>}
        {!error && !isLoading && (
          <>
            <h1 className="name">{character.meta.name}</h1>
            <div className="char">
              <div className="person">
                <div className="body">
                  <img
                    src={
                      character.meta.name.toLowerCase().includes("kara")
                        ? karaBodyImg
                        : lenaBodyImg
                    }
                    alt="character's body"
                  />
                  <div className="selected-clothes">{clothingContent}</div>
                </div>
              </div>

              <ClothingSelector
                name={character.meta.name.replace(/\s+/, "")}
                id={character.meta.id}
                onSelectItem={selectClothingHandler}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Character;
