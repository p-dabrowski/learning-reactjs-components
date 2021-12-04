import React from "react";

function CreatedIn() {
  const year = new Date().getFullYear();

  return <h4> Created in: {year} </h4>;
}

export default CreatedIn;
