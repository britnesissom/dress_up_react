import React from "react";

const Header = (props) => {
  const showForm = props.showForm;

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="header">
        <h1>
          <a href="/">Supercorp Dress Up</a>
        </h1>
        {showForm && (
          <form onSubmit={submitHandler} className="character-form">
            <label htmlFor="charSelect">
              Please choose a character to dress up:
            </label>
            <select id="charSelect">
              <option disabled>- Select Character -</option>
              <option>Kara Danvers</option>
              <option>Lena Luthor</option>
            </select>
            <button>Dress Up!</button>
          </form>
        )}
        {/* <% flash.each do |type, msg| %>
    <div>
        <%= msg %>
    </div>
    <% end %> */}
      </div>
    </>
  );
};
export default Header;