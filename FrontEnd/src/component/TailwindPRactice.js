import React from "react";
import logo from "../img/logo.png";

export default function TailwindPRactice() {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ul>
            <li className="title">
              <a className="text-3xl font-bold underline">Home</a>
            </li>
            <li>
              <a>Brand</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Help</a>
            </li>
          </ul>
        </div>
        <div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
