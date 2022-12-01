import React, { Fragment, useState } from "react";
import { render } from "react-dom";

function Button() {
  const [isLoggedIn, login] = useState(false);
  return (
    <div>
      <h1>This is a headline</h1>
      <div>
        <div>
          <button className="button" onClick={() => login(!isLoggedIn)}>
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
        <style jsx dynamic>
          {`
            .button {
              background-color: ${isLoggedIn ? "blue" : "green"};
              color: white;
              padding: 20px;
              margin: 10px;
            }
          `}
        </style>
      </div>
    </div>
  );
}

render(
  <Fragment>
    <Button />
  </Fragment>,
  document.getElementById("app")
);
