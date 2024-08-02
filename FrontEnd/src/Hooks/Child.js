import React, { useContext } from "react";
import GrnadChild from "./GrnadChild";
import { GlobleContext } from "./Parent";

export default function Child() {
  const color = useContext(GlobleContext);
  return (
    <div>
      <h1>Child Color:{color}</h1>
      <GrnadChild />
    </div>
  );
}
