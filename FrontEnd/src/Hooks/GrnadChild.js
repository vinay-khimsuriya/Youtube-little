import React, { useContext } from "react";
import { GlobleContext } from "./Parent";

export default function GrnadChild() {
  const color = useContext(GlobleContext);
  return (
    <div>
      <h1>Grand Chald Color: {color}</h1>
    </div>
  );
}
