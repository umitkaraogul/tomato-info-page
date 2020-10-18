import React, { useState } from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div id="newsletter" className="newsletter">
      <h2>Keep up to date on the tomato</h2>
      <div className="newsletter__heading">
        <p>
          Enter your name and email address below to receive weekly updates on
          the status of the tomato
        </p>
      </div>

      <form
        className="newsletter__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="newsletter__input-wrapper">
          <input
            className="newsletter__form-input"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <input
            className="newsletter__form-input"
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <button className="newsletter__submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
