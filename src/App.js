import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import BookList from "./Components/BookList";
import horror from "./resources/horror.json";

// import BookComponent from "./Components/BookComponent";

function App() {
  return (
    <div>
      <WarningSign text="this is a alert from props" color="danger" />
      <MyBadge text="My badge text" color="primary" />
      {/* <SingleBook book={horror[0]} /> */}
      <BookList books={horror} />
    </div>
  );
}

export default App;
