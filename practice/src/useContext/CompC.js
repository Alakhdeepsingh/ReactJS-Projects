import React, { useContext } from "react";
import { AppState } from "../App";

const CompC = () => {
  const appdata = useContext(AppState);
  return (
    <div>
      <h1>alakhdeep ka {appdata} hai </h1>
    </div>
  );
};
export default CompC;
