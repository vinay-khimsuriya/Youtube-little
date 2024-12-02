import React from "react";
import Home from "./component/Home";
import { Provider } from "react-redux";
import appStore from "./Utility/appStore";

export default function App() {
  return (
    <Provider store={appStore}>
      <div className="py-5 px-2">
        {/* <h1> vinay</h1> */}
        {/* <AxiosLearning/> */}
        <Home />
        {/* <Parent /> */}

        {/* <TailwindPRactice /> */}
      </div>
    </Provider>
  );
}
