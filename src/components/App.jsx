import React from "react";
import Heading from "./Heading.jsx";
import List from "./List.jsx";

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <Heading />
      <List />
      Created in: {year}
    </div>
  );
}

export default App;
