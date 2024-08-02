import React, { createContext, useState } from "react";
import Child from "./Child";

export const GlobleContext = createContext();

export default function Parent() {
  const [color, setColor] = useState("red");

  return (
    <GlobleContext.Provider value={color}>
      <div>
        <Child />
      </div>
    </GlobleContext.Provider>
  );
}
