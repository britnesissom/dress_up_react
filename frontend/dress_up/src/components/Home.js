import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import classes from "./Home.module.css";
import karaHome from "../assets/kara_home.png";
import lenaHome from "../assets/lena_home.png";

const Home = () => {
  const history = useHistory();

  const onChangeHandler = async (event) => {
    const selected = event.target.value;

    const response = await fetch("http://localhost:3001/api/characters", {
      method: "POST",
      body: JSON.stringify({ name: selected }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data)
    history.push(data.url);
  };

  return (
    <>
      <Header />
      <h3 style={{ marginTop: "15px" }}>
        Please select Kara or Lena to dress up!
      </h3>
      <div className={classes.characters}>
        <form className={classes["character_form"]}>
          <input
            type="checkbox"
            id="kara"
            className={classes["checkbox-class"]}
            onChange={onChangeHandler}
            value="kara"
          />
          <label htmlFor="kara">
            <img src={karaHome} alt="kara danvers" />
          </label>
          <input
            type="checkbox"
            id="lena"
            className={classes["checkbox-class"]}
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
