import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import karaHome from "images/kara_home.png";
import lenaHome from "images/lena_home.png";

const Home = () => {
  const history = useHistory();

  const onChangeHandler = async (event) => {
    const selected = event.target.value;

    const response = await fetch("/characters", {
      method: "POST",
      body: JSON.stringify({ name: selected }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    history.push(data.url);
  };

  return (
    <>
      <Header />
      <h3 style={{ marginTop: "15px" }}>
        Please select Kara or Lena to dress up!
      </h3>
      <div className="characters">
        <form className="character_form">
          <input
            type="checkbox"
            id="kara"
            className="checkbox-class"
            onChange={onChangeHandler}
            value="kara"
          />
          <label htmlFor="kara">
            <img src={karaHome} alt="kara danvers" />
          </label>
          <input
            type="checkbox"
            id="lena"
            className="checkbox-class"
            onChange={onChangeHandler}
            value="lena"
          />
          <label htmlFor="lena">
            <img src={lenaHome} alt="lena luthor" />
          </label>
        </form>
      </div>
    </>
  );
};

export default Home;
