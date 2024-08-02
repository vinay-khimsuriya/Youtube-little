import React from "react";
import Home from "./component/Home";
import { Axios } from "axios";
import AxiosLearning from "./component/AxiosLearning";
import Parent from "./Hooks/Parent";
import TailwindConfig from "../../tailwind.config";
import TailwindPRactice from "./component/TailwindPRactice";

export default function App() {
  return (
    <div className="py-5 px-2">
      {/* <h1> vinay</h1> */}
      {/* <AxiosLearning/> */}
      {/* <Home /> */}
      {/* <Parent /> */}

      <TailwindPRactice />
    </div>
  );
}
