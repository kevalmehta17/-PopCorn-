import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} OnSetRating={setMovieRating} />
      <p>This movie is rated {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={5} /> */}
    {/* <StarRating maxRating={10} /> */}
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={4}
    />
    <StarRating />
    <Test></Test>
  </React.StrictMode>
);
