import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  const history = useHistory();
  const showForm = props.showForm;
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    setSelected(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (selected === "") {
      setError(true);
      return;
    }

    const response = await fetch("http://localhost:3001/api/characters", {
      method: "POST",
      body: JSON.stringify({ name: selected }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setError(false);
    setSelected("");
    history.replace(data.url);
  };

  return (
    <>
      <div className={classes.header}>
        <h1>
          <a href="/">Supercorp Dress Up</a>
        </h1>
        {showForm && (
          <form onSubmit={submitHandler} className={classes["character-form"]}>
            <label htmlFor="charSelect">
              Please choose a character to dress up:
            </label>
            <div>
            <select id="charSelect" value={selected} onChange={onChangeHandler}>
              <option disabled value="">- Select Character -</option>
              <option value="kara">Kara Danvers</option>
              <option value="lena">Lena Luthor</option>
            </select>
            <button>Dress Up!</button>
            </div>
            {error && <p className={classes.error}>You must select a character to continue</p>}
          </form>
        )}
      </div>
    </>
  );
};
export default Header;
